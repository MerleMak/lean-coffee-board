import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Entryform from './Entryform.js';

describe('Entryform', () => {
  it('renders an input field and a button', () => {
    render(<Entryform />);

    const input = screen.getByPlaceholderText('write', { exact: false });
    expect(input).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form data when every field is filled out', () => {
    const handleSubmit = jest.fn();
    render(<Entryform onEntry={handleEntry} />);

    const submitButton = screen.getByRole('button');

    userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
