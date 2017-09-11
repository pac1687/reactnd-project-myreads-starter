import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import fakeBookData from './fakeData/fakeBookData'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    showSearchPage: false,
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({books})
      })
  }

  // build lifecycle method for calling out to API to retrieve books

  // addBook(book, shelf)

  // removeBook(book, shelf)

  // build listBooks Component
  // listBooks(books, title)

  updateBooks = (updatedBook) => {
      const newBooks = this.state.books.map(book => {
          if (book.id === updatedBook.id) {
              book = updatedBook
              BooksAPI.update(updatedBook, updatedBook.shelf)
          }
          return book
      })

      this.setState({books: newBooks})
  }

  // this will be removed eventually
  updateShowSearchPage = (show) => {
      this.setState({showSearchPage: show})
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks books={this.state.books} updateBooks={this.updateBooks} updateShowSearchPage={this.updateShowSearchPage}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <ListBooks books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} title="Currently Reading" updateBooks={this.updateBooks} />
                </div>
                <div className="bookshelf">
                  <ListBooks books={this.state.books.filter((book) => book.shelf === 'wantToRead')} title="Want to Read" updateBooks={this.updateBooks} />
                </div>
                <div className="bookshelf">
                  <ListBooks books={this.state.books.filter((book) => book.shelf === 'read')} title="Read" updateBooks={this.updateBooks} />
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.updateShowSearchPage(true)}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
