import "./mail.css"
import MailSidebar from "./MailSidebar"

export default function ComposeMail() {
  return (
    <div className="mail">
        <div className="mailWrapper">
            <div className="mailContainer">
                <div className="mailLeft">
                    <MailSidebar/>
                </div>
                <div className="mailRight">
                    <div className="mailRightWrapper">
                        <form action="" method="post">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label mb-3">Subject:</label>
                                <input type="email" className="form-control composeInput" id="email" placeholder="Enter email" name="email"/>
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="comment">Message:</label>
                                <textarea className="form-control mt-3 composeInput" rows="13" id="comment" name="text"></textarea>
                            </div>
                            <div className="d-grid mt-3">
                                <button type="submit" className="btn btn-priry btn-block mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
