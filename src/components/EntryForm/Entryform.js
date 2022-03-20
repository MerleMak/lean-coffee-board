import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function EntryForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements['add-entry'];
    onSubmit(inputElement.value);
    form.reset();
  }
  return (
    <>
      <Form
        autoComplete="off"
        aria-label="Create-a-new-entry"
        onSubmit={handleSubmit}
      >
        <label htmlFor="add-entry">
          <ScreenReaderOnly>Create a new entry</ScreenReaderOnly>
        </label>
        <input
          name="add-entry"
          id="add-entry"
          placeholder="write an entry..."
          type="text"
        />
        <PlusButton aria-label="Add-new-entry">+</PlusButton>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: none;
  background-color:#001524;
  overflow-y: auto; 
  overflow-x: hidden; 
 
  }
  input {
  width: 100%;
  background-color:#001524;
  padding: 15px;
  border: none;
`;

const PlusButton = styled.button`
  color: #ffecd1;
  line-height: 0;
  width: 28px;
  height: 28px;
  border: none;
`;
