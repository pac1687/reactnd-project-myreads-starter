import React from 'react'
import DisplayBook from './DisplayBook'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends React.Component {
    state = {
        query: '',
        books: null
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    render() {
        const {books, updateShowSearchPage, updateBooks} = this.props

        let matchedBooks
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            matchedBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
        } else {
            matchedBooks = null
        }

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
                    {matchedBooks && matchedBooks.map((book, index) => {
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
