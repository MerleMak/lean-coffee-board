import styled from 'styled-components';
export default function CreateAuthor({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    const inputColor = form.elements.color;
    onSubmit(inputElement.value, inputColor.value);
  }

  return (
    <NameForm
      autoComplete="off"
      onSubmit={handleSubmit}
      aria-label="entry-form-name"
    >
      <NameInput>
        <label htmlFor="name">What's your name?</label>
        <input
          name="name"
          id="name"
          placeholder="type your name..."
          type="text"
          required
        ></input>
      </NameInput>
      <ColorInput>
        <label htmlFor="color">What's your favorite color?</label>
        <input name="color" id="color" type="color" defaultValue={'#798478'} />
      </ColorInput>
      <button>Remember me</button>
    </NameForm>
  );
}

const NameForm = styled.form`
  font-family: ;
  color: #001524;
  background-color: #15616d;
  border: solid 5px #001524;
  border-radius: 17px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 20rem;
  position: fixed;
  bottom: 45%;
  right: 30%;
  button {
    border: none;
    border-radius: 17px;
    background-color: #ff7d00;
    padding: 9px;
    color: #ffecd1;
    margin-top: 20px;
  }
`;

const NameInput = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  label {
    color: #d6efff;
    cursor: pointer;
  }
  input {
    border: solid #ff7d00 1px;
    border-radius: 17px;
    background-color: #ffecd1;
    padding: 7px;
    width: 100%;
    ::placeholder {
      color: #c2c5bb;
      padding: 7px;
    }
  }
`;

const ColorInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  label {
    color: #d6efff;
    cursor: pointer;
  }
  input[type='color'] {
    border: solid #ff7d00 1px;
    border-radius: 10px;
    background-color: #ffecd1;
    padding: 50px;
    height: 35px;
    width: 50px;
    padding: 2px;
  }
`;
