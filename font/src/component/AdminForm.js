import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'


export default function AdminForm() {
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
        <div>
            <div >
     
                <div class="form-group">
                    <label >Name:</label>
                    <input type="name" class="form-control" 
                    placeholder="Enter name"
                    onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
                     />
                </div>
             
              <div class="form-group">
                    <label >Cost:</label>
                     <input
                    type="number" class="form-control"
                    placeholder="Enter cost"
                    onChange={(e) => dispatch({ type: 'CHANGE_COST', cost: e.target.value })}
                />
              </div>
               
                <div class="form-group">
                    <label for="sel1">Tel:</label>
                    <input
                    type="number" class="form-control"
                    placeholder="Enter Tel"
                    onChange={(e) => dispatch({ type: 'CHANGE_STATUS', status: e.target.value })}
                />
                   
                </div>


                <button class="btn btn-primary mb-2" onClick={addBook}>ADD</button>



            </div>
        </div>
    )
}
