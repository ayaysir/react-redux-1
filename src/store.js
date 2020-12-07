import {createStore} from 'redux'

const initState = {
    mode: 'WELCOME',
    welcome_content: {
        title: 'WEB',
        desc: 'desc'
    },
    selected_content_id: 1,
    contents: [
        {id:1, title:'HTML', desc:'html is...'},
        {id:2, title:'CSS', desc:'css is...'},
        {id:3, title:'JS', desc:'js is...'},
    ]
}

function reducer(state = initState, action) {
    console.log(action)
    if(action.type === 'WELCOME') {
        return {...state, mode: 'WELCOME'}
    }
    if(action.type === 'READ') {
        return {
            ...state, 
            mode: 'READ',
            selected_content_id: action.id
        }
    }
    if(action.type === 'CREATE') {
        return {...state, mode: 'CREATE'}
    }
    return state
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())