import Todo from "./components/Todo"
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className=" relative bg-zinc-950 w-full h-screen text-zinc-400 font-mono" >
      <h1 className="flex items-center justify-center text-9xl">
        todo_using_redux
      </h1>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App