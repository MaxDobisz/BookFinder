import { useState } from "react";

export const SearchForm = ({ setQuery, setError, setBooks }) => {
    const [searchTerm, setSearchTerm] = useState();
    const handleOnChange = e => setSearchTerm(e.target.value);
    const handleOnClick = e => {
        e.preventDefault();
        setError();
        setBooks();

        if (!searchTerm) {
            setError('Enter a title');
        } else if (searchTerm.length === 1) {
            setError('At least two characters required')
        } else {
            setQuery(searchTerm);
        }
    }

    return (
        <div className="searchForm-wrapper container">
            <form className="searchForm">
                <input className="form-control" type="text" placeholder="Enter a book title" onChange={handleOnChange} />
                <button className="btn btn-warning ms-4" type="submit" onClick={handleOnClick}>search</button>
            </form>
            <hr className="searchForm__line" />
        </div>
    );
}
