import { Link } from "react-router-dom"
import "./mail.css"

export default function MailSidebar() {
  return (
    <ul className="mailList">
      <Link to="/doctor/mail/compose">
        <li className={`mailListItem ${window.location.pathname === "/doctor/mail/compose" ? "mailActive" :   ""}`}>
            Compose
        </li>
      </Link>
      <Link to="/doctor/mail/inbox">
        <li className={`mailListItem ${window.location.pathname === "/doctor/mail/inbox" ? "mailActive" :   ""}`}>
            Inbox
        </li>
      </Link>
      <Link to="/doctor/mail/sent">
        <li className={`mailListItem ${window.location.pathname === "/doctor/mail/sent" ? "mailActive" :   ""}`}>
            Sent
        </li>
      </Link>
    </ul>
  )
}
