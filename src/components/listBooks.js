import React from 'react'
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
export default ListBooks
