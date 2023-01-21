import { Book } from "./Book"

export const Books = ({ books }) => {
    return (
        <div className="books container text-center">
            {books.map(book => <Book book={book} key={book.id} />)}
        </div>
    )
}