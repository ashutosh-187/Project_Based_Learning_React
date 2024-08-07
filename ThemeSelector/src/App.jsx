import './App.css'
import { useState } from 'react'

function App() {
  let [color, setColor] = useState('black')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 py-1 text-white bg-red-500 shadow-lg rounded-full' onClick={()=> setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 text-white bg-green-500 shadow-lg rounded-full' onClick={()=> setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 text-white bg-blue-500 shadow-lg rounded-full' onClick={()=> setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App