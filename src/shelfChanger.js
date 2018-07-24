import React, { Component } from 'react'
import './App.js'
import BooksAPI from './BooksAPI.js'
import { Link } from 'react-router-dom'

class shelfChanger extends React.Component {
    render () {
    return (
    <div className='book-shelf-changer'>
        <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        </select>
        </div>
        )
    }
}


export default shelfChanger

