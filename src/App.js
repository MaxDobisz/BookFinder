import { Banner } from './components/Banner';
import { SearchForm } from './components/SearchForm';
import { Books } from './components/Books';
import { Error } from './components/Error';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const App = () => {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const clearError = () => setError();
            const clearBookList = () => setBooks();

            try {
                const { data: { items } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`);

                if (!items) {
                    clearBookList();
                    setError(`Sorry, we couldn't find any book`)
                } else {
                    clearError();
                    setBooks(items);
                }
            } catch (error) {
                setError('An error has occurred. Please try again.')
            }
        }

        if (query) {
            fetchData();
        }
    }, [query]);

    return (
        <div className="app">
            <Banner />
            <SearchForm setQuery={setQuery} setError={setError} setBooks={setBooks} />
            {error && <Error error={error} />}
            {books && <Books books={books} />}
        </div>
    );
}