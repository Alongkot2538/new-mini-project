import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const Form = () => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const books = useSelector(state => state.book)


    const addBook = async () => {
        await axios.post(`https://api-books-miniproject.herokuapp.com/api/books`, form)
        dispatch({
            type: 'ADD_BOOK', book: {
                id: books.length > 0 ? books[books.length - 1].no + 1 : 0,
                ...form
            }
        })
    }
    return (
        <div class="container">
            <input
                type="name" class="form-control mb-2 mr-sm-2"
                placeholder="Enter name"
                onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
            />
            <input
                type="number" class="form-control mb-2 mr-sm-2"
                placeholder="Enter cost"
                onChange={(e) => dispatch({ type: 'CHANGE_COST', cost: e.target.value })}
            />
            <input 
                type="text" class="form-control mb-2 mr-sm-2"
                placeholder="Enter Tel"
                onChange={(e) => dispatch({ type: 'CHANGE_STATUS', status: e.target.value })}
            />


            <button class="btn btn-primary mb-2" onClick={addBook}>ADD</button>

           

        </div>
    )
}
export default Form;