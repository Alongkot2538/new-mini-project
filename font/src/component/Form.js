import  React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

const Form =()=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const books = useSelector(state => state.book)

   
    const addBook = async () => {
       await axios.post(`http://localhost/api/students`, form)
        dispatch({
            type: 'ADD_BOOK', book: {
                id: books.length > 0 ? books[books.length-1].no+1 : 0,
                ...form
            }
        })
    }
return(
    <div>
       <input
             type="name"
             placeholder="Enter name" 
             onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
            />
            <input
             type="number"
             placeholder="Enter cost" 
            //  onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
            />
            {/* <input
             type="text"
             placeholder="Enter id" 
            //  onChange={(e) => dispatch({ type: 'CHANGE_ID', id: e.target.value })}
            />
            <input
             type="text"
             placeholder="Enter Major" 
            //  onChange={(e) => dispatch({ type: 'CHANGE_MAJOR', Major: e.target.value })}
            />
            <input
             type="number"
             placeholder="Enter GPA" 
            //  onChange={(e) => dispatch({ type: 'CHANGE_GPA', GPA: e.target.value })}
            /> */}
            <button onClick ={addBook }>ADD</button>
    </div>
)
}
export default Form;