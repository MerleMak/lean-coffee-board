export default function CreateAuthor({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    const inputColor = form.elements.color;
    onSubmit(inputElement.value, inputColor.value);
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      aria-label="entry-form-name"
    >
      <label htmlFor="name">What's your name?</label>
      <input
        name="name"
        id="name"
        placeholder="type your name..."
        type="text"
        required
      ></input>
      <input name="color" id="color" type="color" defaultValue={'#798478'} />
      <button>Remember me</button>
    </form>
  );
}
