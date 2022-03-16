import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Entry from './components/Entry';
import Entryform from './components/Entryform';

export default function App() {
  const [entries, setEntries] = useState([]);

  function handleEntry(input) {
    setEntries([...entries, { text: input }]);
  }

  useEffect(() => {
    getEntries();

    async function getEntries() {
      const response = await fetch('/api/entries');
      const entries = await response.json();
      setEntries(entries);
    }
  }, []);

  return (
    <>
      <h1>Lean Coffee Board</h1>
      <Grid role="list">
        {entries.map(({ text, author }, index) => (
          <li key={index}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </Grid>
      <Entryform onEntry={handleEntry} />
    </>
  );
}

const Grid = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
