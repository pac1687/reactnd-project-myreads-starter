import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'

const BookShelves = ({books, updateBooks}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <ListBooks books={books.filter((book) => book.shelf === 'currentlyReading')} title="Currently Reading" updateBooks={updateBooks} />
                    </div>
                    <div className="bookshelf">
                        <ListBooks books={books.filter((book) => book.shelf === 'wantToRead')} title="Want to Read" updateBooks={updateBooks} />
                    </div>
                    <div className="bookshelf">
                        <ListBooks books={books.filter((book) => book.shelf === 'read')} title="Read" updateBooks={updateBooks} />
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

BookShelves.propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
}

export default BookShelves
