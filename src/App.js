import styled from 'styled-components';
import Entry from './components/Entry';
import Entryform from './components/Entryform';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  });

  if (entriesError) return <h1>Sorry, could not fetch.</h1>;
  if (!entries) return <em>loading...</em>;

  async function handleEntry(text) {
    const newEntry = {
      text,
      author: 'Anonymous',
      tempID: Math.random(),
    };

    mutateEntries([...entries, newEntry], false);

    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });
    mutateEntries();
  }

  return (
    <>
      <h1>Lean Coffee Board</h1>
      <EntryList role="list">
        {entries.map(({ text, author, _id, tempId }) => (
          <li key={tempId}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </EntryList>
      <Entryform onSubmit={handleEntry} />
    </>
  );
}

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
