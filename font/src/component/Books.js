import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import '../App.css';
import Form from './Form';
const Books=(props)=>{
    const books = useSelector(state=> state.book);
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
     useEffect(()=>{
        getBooks();
     },[])
    const getBooks = async () => {
        const result = await axios.get(`https://api-books-miniproject.herokuapp.com/api/books`)
        console.log(result.data)
        const action = {type:'GET_BOOKS',book: result.data}
        dispatch(action)
      }


      const printBooks = ()=>{
        if(books && books.length){
            return books.map((book,index)=>{
                return(
                    <li key={index}>
                            no: {book.id} :
                            {book.name}  {book.cost  } : 
                            {book.status}
                            {/* <span className="App3">
                            <button className="btn2" onClick={ ()=>deleteStudent(book.id)}>Delete</button>
                            </span>
                            <span  className="App3">
                            <button className="btn3" onClick={ ()=>updateStudent(book.id)}>Update</button>
                            </span> */}
                    </li> 
                )
            })
        } 
        else{
            return(<h1>No data</h1>)
        }
    }


    return(
        <div>
             <ul>
                {printBooks()}
                <Form/>
            </ul>
        </div>
    )



}
export default Books;