import React from 'react'
import PropTypes from 'prop-types'

const DisplayBook = ({book, updateBooks}) => {
    const updateShelf = (e) => {
        const newShelf = e.target.value
        updateBooks(Object.assign({}, book, {shelf: newShelf}))
    }

    return (
        <li key={`${book.id}`}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf || 'none'} onChange={updateShelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && book.authors.map((author, index) => {
                    return (
                        <div key={`${book.id}-author-${index}`} className="book-authors">{author}</div>
                    )
                })}
            </div>
        </li>
    )
}

DisplayBook.propTypes = {
    book: PropTypes.object.isRequired,
    updateBooks: PropTypes.func.isRequired
}

export default DisplayBook
