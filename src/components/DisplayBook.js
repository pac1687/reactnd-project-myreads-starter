import React from 'react'

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
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={updateShelf}>
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

export default DisplayBook
