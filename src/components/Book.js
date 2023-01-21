import { Rating } from 'react-simple-star-rating';

export const Book = ({ book: { volumeInfo: { title, imageLinks = '', authors, publishedDate, description, infoLink, averageRating } } }) => {
    const renderAuthors = () => {
        if (authors.length > 1) {
            return authors.map((auth, index) => index !== authors.length - 1 ? auth + ', ' : auth);
        }

        return authors;
    }

    return (
        <div className="card container-75 p-2">
            {imageLinks ? <img src={imageLinks.smallThumbnail} className="card-img-top mt-2" alt="book cover" /> : <div className="card__no-img text-danger fw-bolder mt-2">no cover available</div>}
            <div className="card-body">
                <h5 className="card-title mt-2 mb-3 fw-bolder">{`"${title}"`}</h5>
                <h5 className={authors ? 'card-auth mb-2' : 'text-danger mb-2'}>
                    {authors ? renderAuthors() : 'no authors available'}
                </h5>
                <h5 className="mb-4">Published: {publishedDate}</h5>
                <div className={description ? 'card-text mb-auto' : 'card-text-not-available text-danger'}>
                    {description ? description : 'no description available'}
                </div>
                <div className="card-body__rating mb-3 mt-3">
                    {averageRating ? <Rating initialValue={averageRating} readonly /> : <h5 className="text-danger">no rating available</h5>}
                </div>
                <a href={infoLink} className="btn btn-success ">More details</a>
            </div>
        </div>
    );
}