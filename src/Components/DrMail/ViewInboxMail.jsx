import MailSidebar from "./MailSidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft ,faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function ViewInboxMail() {
  return (
    <div className="mail">
        <div className="mailWrapper">
            <div className="mailContainer">
                <div className="mailLeft">
                    <MailSidebar/>
                </div>
                <div className="mailRights">
                    <div className="mailRightWrappers" style={{height:"100%"}}>
                        <div className="mailRightTop">
                          <faArrowLeft/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewInboxMail