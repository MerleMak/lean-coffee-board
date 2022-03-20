import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EntryForm from './EntryForm.js';

describe('EntryForm', () => {
  it('renders an input field and a button', () => {
    render(<EntryForm />);

    const input = screen.getByPlaceholderText('write', { exact: false });
    expect(input).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });

  it('shows a text and the author on submit of the form', () => {
    const callback = jest.fn();
    render(<EntryForm onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Create a new entry' });
    expect(form).toBeInTheDocument();

    const input = screen.getByPlaceholderText('write an entry...', {
      exact: false,
    });
    userEvent.type(input, 'Lorem ipsum dolor sit.{enter}');
    expect(form).toContainElement(input);

    expect(callback).toHaveBeenCalledWith('Lorem ipsum dolor sit.');
  });
});
