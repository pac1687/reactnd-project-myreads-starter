import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelves from './components/BookShelves'
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
                    <BookShelves books={books} updateBooks={this.updateBooks} />
                )}/>
                <Route path="/search" render={() => (<SearchBooks myBooks={books} updateBooks={this.updateBooks}/>)}/>
            </div>
        )
    }
}

export default BooksApp
