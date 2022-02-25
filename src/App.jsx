import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminSideBar from './Components/Admin/AdminSideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <AdminSideBar />
        <Routes>
          <Route />
        </Routes>
      </div>
    </Router>
  )
}

export default App
