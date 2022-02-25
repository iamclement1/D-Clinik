import { useState } from 'react'
import AdminSideBar from './Components/Admin/AdminSideBar'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen">
      <h2 className='text-center font-bold text-3xl text-blue-800'>Welcome to D'Clinik</h2>
      <AdminSideBar/>
    </div>
  )
}

export default App
