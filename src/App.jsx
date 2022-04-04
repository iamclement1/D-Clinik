import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './Pages/LogIn'
import ResetPassword from './Pages/ResetPassword'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" exact element={<LogIn/>} />
          <Route path="/forgot-password" exact element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
