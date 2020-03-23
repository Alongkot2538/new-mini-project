import {createStore, combineReducers} from 'redux'
const initialForm = {
    
    id: '',
    name: '',
    cost: '',
    status: ''
    
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        
        case 'CHANGE_ID': return {...state,id: action.id}
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_COST': return {...state,cost: action.cost}
        case 'CHANGE_STATUS': return {...state,status: action.status}
        default:return state;
    }
}

const bookReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_BOOKS':
            return action.book;
        case 'ADD_BOOK': 
            return [...state,action.book]
        case 'DELETE_BOOK':
                return state.filter(book => book.id !== +action.id)
        case 'UPDATE_BOOK':
            return state.map(book =>{
                if(+book.id === +book.id)
                    return action.book;
                else return book;
                })
        default:
            return state;
    }
}
const reducer = combineReducers({
    book: bookReducer,
    form: formReducer
})



export const store = createStore(reducer)