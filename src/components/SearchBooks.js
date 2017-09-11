import React from 'react'
import DisplayBook from './DisplayBook'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {
    state = {
        query: '',
        matchedBooks: null
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()}, () => this.searchAPI())
    }

    searchAPI = () => {
        BooksAPI.search(this.state.query, 20).then((books) => {
            const myBooksIndex = this.returnBooksIndex()
            const matchedBooks = books.map((book) => {
                if (book.id in myBooksIndex) {
                    return myBooksIndex[book.id]
                }

                return book
            })
            this.setState({matchedBooks})
        })
    }

    returnBooksIndex = () => {
        return this.props.myBooks.reduce((acc, currentBook) => {
            acc[currentBook.id] = currentBook
            return acc
        }, {})
    }

    render() {
        const {updateShowSearchPage, updateBooks} = this.props
        const {matchedBooks} = this.state

        return (
            <div className="search-books">
              <div className="search-books-bar">
                <a className="close-search" onClick={() => updateShowSearchPage(false)}>Close</a>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input
                      type="text"
                      placeholder="Search by title or author"
                      value={this.query}
                      onChange={(event) => this.updateQuery(event.target.value)}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                    {Array.isArray(matchedBooks) && matchedBooks.map((book, index) => {
      				  return (
      					  <DisplayBook key={`${book.id}`} book={book} updateBooks={updateBooks}/>
      				  )
      			  })}
                </ol>
              </div>
            </div>
        )
    }
}

export default SearchBooks
