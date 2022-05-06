import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Appointment from './Pages/Doctor/Appointment'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/doctor/appointment' element= {<Appointment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
