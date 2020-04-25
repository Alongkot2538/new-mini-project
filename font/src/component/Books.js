import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import '../App.css';
import Form from './Form';
const Books = (props) => {
    const books = useSelector(state => state.book);
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
    useEffect(() => {
        getBooks();
    }, [])
    const getBooks = async () => {
        const result = await axios.get(`https://api-books-miniproject.herokuapp.com/api/books`)
        console.log(result.data)
        const action = { type: 'GET_BOOKS', book: result.data }
        dispatch(action)
    }
    const deleteBooks = async (books_id) => {
        await axios.delete(`https://api-books-miniproject.herokuapp.com/api/books/${books_id}`)
        dispatch({ type: 'DELETE_BOOK', id: books_id })
        getBooks()

    }

    const updateBook = async (books_id) => {
        await axios.put(`https://api-books-miniproject.herokuapp.com/api/books/${books_id}`,form)
         dispatch(
             {type:'UPDATE_BOOK',
             id: books_id,
             book:{...form, id:  books_id}
         })
         getBooks()
         
       }


    const printBooks = () => {
        if (books && books.length) {
            return books.map((book, index) => {
                return (
                    <li key={index}>
                        no: {book.id + 1} :
                        {book.name}  {book.cost} :
                        {book.status}
                        <span className="App3">
                            <button className="btn2" onClick={ ()=>deleteBooks(book.id)}>Delete</button>
                            </span>
                            <span  className="App3">
                            <button className="btn3" onClick={ ()=>updateBook(book.id)}>Update</button>
                            </span>
                    </li>
                )
            })
        }
        else {
            return (<h1>No data</h1>)
        }
    }


    return (
        <div>
            
                {printBooks()}
                <Form />
            
        </div>
    )



}
export default Books;