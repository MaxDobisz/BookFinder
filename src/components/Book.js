export const Book = ({ book: { volumeInfo: { title, imageLinks = '', authors, publishedDate, description, infoLink } } }) => {
    return (
        <div className="card container-75 p-2">
            {imageLinks ? <img src={imageLinks.smallThumbnail} className="card-img-top" alt="..." /> : <div className="card__no-img text-danger fw-bolder">no cover available</div>}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-auth">{authors}</h5>
                <h5 className="date">Published: {publishedDate}</h5>
                <p className={description ? 'card-text' : 'text-danger'}>{description ? description : 'no description available'} </p>
                <a href={infoLink} className="btn btn-success ">More details</a>
            </div>
        </div>
    );
}