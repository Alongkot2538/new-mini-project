import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import '../App.css';
import Form from './Form';
import Navadmin from './์Navadmin';
import AdminForm from './AdminForm';
const Update = (props) => {
    const books = useSelector(state => state.book);
    const form = useSelector(state => state.form);
    const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        getBooks();
    }, [])
    const getBooks = async () => {
        const result = await axios.get(`https://api-books-miniproject.herokuapp.com/api/books`)
        console.log(result.data)
        const action = { type: 'GET_BOOKS', book: result.data }
        dispatch(action)
        getBooks();
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
                    <ol key={index}>
                        Book : {book.id + 1} <br/>Book Name : 
                        {book.name}<br/> Cost :   {book.cost}<br/> Tel :
                        {book.status}<br/>
                        <span className="App3">
                            <button className="btn2" class="btn btn-danger" onClick={ ()=>deleteBooks(book.id)}>Delete</button>
                            </span> 
                            <span  className="App3">
                            <button className="btn3" class="btn btn-success" onClick={ ()=>updateBook(book.id)}>Update</button>
                            </span>
                    </ol>
                )
            })
        }
        else {
            return (<h1>No data</h1>)
        }
    }


    return (
        <div>
            <Navadmin></Navadmin>
            
               
                <div className="container">
                    <div className="App">
                         {printBooks()}
                    </div>
               
                     <AdminForm></AdminForm>
                </div>
               
                {/* <Form /> */}

        </div>
    )

}
export default Update;