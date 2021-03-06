import styled from 'styled-components';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Entry from './components/Entry/Entry';
import EntryForm from './components/EntryForm/Entryform';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const [author, setAuthor] = useState('');
  const [cardColor, setCardColor] = useState('');

  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  });
  if (entriesError) return <h1>Sorry, could not fetch.</h1>;
  if (!entries) return <em>loading...</em>;

  function handleAuthorInput(author, color) {
    setAuthor(author);
    setCardColor(color);
  }

  async function handleEntry(text) {
    const newEntry = {
      text,
      author: author,
      color: cardColor,
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
    const filteredEntries = entries.filter(entry => entry._id !== _id);
    mutateEntries(filteredEntries, false);

    await fetch('/api/entries', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
    mutateEntries();
  }

  async function toggleCheck(_id) {
    await fetch('/api/entries', {
      method: 'UPDATE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
    mutateEntries();
  }

  return author ? (
    <>
      <Header>Lean Coffee Board</Header>
      <EntryList role="list">
        {entries.map(({ text, author, createdAt, _id, tempId, color }) => (
          <li key={_id ?? tempId}>
            <Entry
              text={text}
              author={author}
              color={color}
              _id={_id}
              createdAt={createdAt}
              onDelete={() => handleDelete(_id)}
              onCheck={() => toggleCheck(_id)}
            />
          </li>
        ))}
      </EntryList>
      <EntryForm onSubmit={handleEntry} />
    </>
  ) : (
    <CreateAuthor onSubmit={handleAuthorInput} />
  );
}

const Header = styled.h1`
  color: #cd4631;
`;

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
