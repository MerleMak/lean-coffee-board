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
        <InputWrapper>
          <label htmlFor="add-entry">
            <ScreenReaderOnly>Create a new entry</ScreenReaderOnly>
          </label>
          <input
            name="add-entry"
            id="add-entry"
            placeholder="write an entry..."
            type="text"
          />
          <span></span>
        </InputWrapper>
        <PlusButton aria-label="Add-new-entry">
          <svg viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15"></circle>
            <line x1="9" x2="23" y1="16" y2="16"></line>
            <line x1="16" x2="16" y1="9" y2="23"></line>
          </svg>
        </PlusButton>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 50px;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  bottom: 0px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding-right: 16px;
  min-width: 256px;
  input {
    flex: 1 1;
    background: none;
    box-sizing: border-box;
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 24px;
    color: #ffecd1;
  }
  input[type='text' i] {
    padding: 1px 2px;
  }
  span {
    align-self: center;
    fill: transparent;
    color: #FA9871
    height: 1px;
    transition: width 0.25s linear;
    width: 0;
    margin-top: 1px;
  }
`;

const PlusButton = styled.button`
  box-sizing: border-box;
  align-self: center;
  width: 32px;
  height: 32px;
  line-height: 28px;
  font-weight: 700;
  border-radius: 50%;
  outline: none;
  background: none;
  margin: 0;
  padding: 0;
  svg {
    color: #fa9871;
    circle {
      fill: transparent;
    }
  }
`;

// background-color: #001524;
