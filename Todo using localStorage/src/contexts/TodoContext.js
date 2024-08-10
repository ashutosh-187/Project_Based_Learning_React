import {createContext, useContext} from 'react'

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

const useTodo = ()=>{
    return useContext(TodoContext)
}

const TodoProvider = TodoContext.Provider

export {
    useTodo,
    TodoContext,
    TodoProvider,
}