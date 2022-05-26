import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Appointment from './Pages/Doctor/Appointment'
import Compose from './Pages/Doctor/Mailbox/Compose'
import Inbox from './Pages/Doctor/Mailbox/Inbox'
import Sent from './Pages/Doctor/Mailbox/Sent'
import ViewInbox from './Pages/Doctor/Mailbox/ViewInbox'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/doctor/appointment' element= {<Appointment />} />
          <Route path='/doctor/mail/compose' element= {<Compose />} />
          <Route path='/doctor/mail/inbox' element= {<Inbox />} />
          <Route path='/doctor/mail/inbox/:id' element= {<ViewInbox/>} />
          <Route path='/doctor/mail/sent' element= {<Sent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
