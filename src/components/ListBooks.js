import React from 'react'
import PropTypes from 'prop-types'
import DisplayBook from './DisplayBook'

const ListBooks = ({books, title, updateBooks}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, index) => {
                        return (<DisplayBook key={`${book.id}`} book={book} updateBooks={updateBooks}/>)
                    })}
                </ol>
            </div>
        </div>
    )
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    updateBooks: PropTypes.func.isRequired
}

export default ListBooks
