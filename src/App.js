import styled from 'styled-components';
import CreateAuthor from './components/CreateAuthor';
import Entry from './components/Entry';
import Entryform from './components/Entryform';
import { useState } from 'react';
import useSWR from 'swr';
import DayJS from 'react-dayjs';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const [author, setAuthor] = useState('');
  const [cardColor, setcardColor] = useState('');

  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 100,
  });

  if (entriesError) return <h1>Sorry, could not fetch.</h1>;
  if (!entries) return <em>loading...</em>;

  function handleAuthorInput(author, color) {
    setAuthor(author);
    setcardColor(color);
  }

  async function handleEntry(text, date) {
    const newEntry = {
      text,
      author: author,
      color: cardColor,
      created: Date('now'),
      tempId: Math.random(),
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

  async function handleDelete(_id) {
    await fetch('/api/entries', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
  }

  return author ? (
    <>
      <h1>Lean Coffee Board</h1>
      <EntryList role="list">
        {entries.map(({ text, author, created, _id, tempId, color }) => (
          <li key={_id ?? tempId}>
            <Entry
              text={text}
              author={author}
              color={color}
              _id={_id}
              created={created}
              onClick={() => handleDelete(_id)}
            />
          </li>
        ))}
      </EntryList>
      <Entryform onSubmit={handleEntry} />
    </>
  ) : (
    <CreateAuthor onSubmit={handleAuthorInput} />
  );
}

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
