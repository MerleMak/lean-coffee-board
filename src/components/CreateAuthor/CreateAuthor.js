import NameForm from './styled-components/NameForm';
import NameInput from './styled-components/NameInput';
import ColorInput from './styled-components/ColorInput';

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
