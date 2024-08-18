import {createSlice, nanoid} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {id: 1, text: "Hello, start entering your today's tasks!"}
        ]
    },
    reducers: {
        addTodo: (state, action)=>{
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((ele)=>ele.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map((ele)=>{
                if(ele.id = action.payload.id){
                    ele.text = action.payload.text
                }
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer