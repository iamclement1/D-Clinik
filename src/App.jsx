import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Appointment from './Pages/Doctor/Appointment'
import LogIn from './Pages/LogIn'
import ResetPassword from './Pages/ResetPassword'
import Dashboard from './Pages/Doctor/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/doctor/appointment"  element={<Appointment/>} />
          <Route path="/" element={<LogIn/>} />
          <Route path="/dashboard"   element={<Dashboard/>} />
          <Route path="/forgotpassword" element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
