import  React from 'react'

const Form =()=>{
return(
    <div>
       <input
             type="text"
             placeholder="Enter name" 
            //  onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
            />
            <input
             type="text"
             placeholder="Enter surname" 
            //  onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
            />
            <input
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
            />
            <button>ADD</button>
    </div>
)
}
export default Form;