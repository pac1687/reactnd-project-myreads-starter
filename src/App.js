import React from 'react'
import {Link, Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateBooks = (updatedBook) => {
        BooksAPI.update(updatedBook, updatedBook.shelf).then(() => {
            BooksAPI.getAll().then((books) => {
                this.setState({books})
            })
        })
    }

    render() {
        const {books} = this.state

        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <ListBooks books={books.filter((book) => book.shelf === 'currentlyReading')} title="Currently Reading" updateBooks={this.updateBooks}/>
                                </div>
                                <div className="bookshelf">
                                    <ListBooks books={books.filter((book) => book.shelf === 'wantToRead')} title="Want to Read" updateBooks={this.updateBooks}/>
                                </div>
                                <div className="bookshelf">
                                    <ListBooks books={books.filter((book) => book.shelf === 'read')} title="Read" updateBooks={this.updateBooks}/>
                                </div>
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
                    </div>
                )}/>
                <Route path="/search" render={() => (<SearchBooks myBooks={books} updateBooks={this.updateBooks}/>)}/>
            </div>
        )
    }
}

export default BooksApp
