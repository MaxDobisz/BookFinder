import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SearchForm } from './SearchForm';

test('show search input', () => {
    render(<SearchForm />);
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument()
})

test('show submit button', () => {
    render(<SearchForm />);
    const submitButton = screen.getByRole('button', { name: /search/i });
    expect(submitButton).toBeInTheDocument();
})

test('input works, accepts text', () => {
    render(<SearchForm />);
    const searchInput = screen.getByRole('textbox')
    user.click(searchInput);
    user.keyboard('search query')
    expect(searchInput).toHaveValue('search query')
})

test('show error when submit empty form', () => {
    const mockSetError = jest.fn();
    const mockSetBooks = jest.fn();
    render(<SearchForm setError={mockSetError} setBooks={mockSetBooks} />);
    const submitButton = screen.getByRole('button', { name: /search/i });
    const searchInput = screen.getByRole('textbox');

    expect(searchInput).toHaveValue('');
    user.click(submitButton);
    expect(mockSetBooks).toHaveBeenCalled()
})
