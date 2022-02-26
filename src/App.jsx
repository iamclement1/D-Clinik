import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminNavbar from './Components/Admin/AdminNavbar'
import AdminSideBar from './Components/Admin/AdminSideBar'
import LogIn from './Pages/LogIn'
import ResetPassword from './Pages/ResetPassword'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        {/* <AdminSideBar />
        <AdminNavbar /> */}
        <Routes>
          <Route path="/" exact element={<LogIn/>} />
          <Route path="/forgot-password" exact element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
