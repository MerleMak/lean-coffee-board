import styled from 'styled-components';
import { useState } from 'react';

export default function Entryfrom({ onEntry }) {
  const [newEntry, setNewEntry] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onEntry(newEntry);
    setNewEntry('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="add-entry">Create a form</label>
        <input
          id="add-entry"
          name="add-entry"
          placeholder="write an entry..."
          onChange={event => setNewEntry(event.target.value)}
          value={newEntry}
        ></input>
        <button>+</button>
      </form>
    </>
  );
}
