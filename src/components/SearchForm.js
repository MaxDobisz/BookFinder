import { useState } from "react";

export const SearchForm = ({ setQuery, setError, setBooks }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        const clearBookList = () => setBooks();

        if (!searchTerm) {
            clearBookList();
            setError('enter a title');
        } else if (searchTerm.length === 1) {
            clearBookList();
            setError('at least two characters required')
        } else {
            setQuery(searchTerm);
        }
    }

    return (
        <div className="searchForm-wrapper container">
            <form className="searchForm">
                <input className="form-control" type="text" placeholder="Enter a book title" onChange={handleOnChange} />
                <button className="btn btn-warning ms-4" type="submit" onClick={handleOnClick}>SEARCH</button>
            </form>
            <hr className="searchForm__line" />
        </div>
    );
}
