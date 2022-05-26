import InboxMail from "../../../Components/DrMail/InboxMail";
import Navbar from "../../../Components/Navbar/Navbar";
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../../../Components/Sidebar/Sidebar";


export default function Inbox() {
  return (
    <div>
        <Navbar />
        {/* You this pageLayout className to divide the page into two sidebar and the other component */}
        <div className="pageLayout">
        <Sidebar 
            sideOne="Appointment" sideOneIcon={faCalendarDay}
            sideTwo="Appointment" sideTwoIcon={faCalendarDay}
        />
        {/* Set the parent div of the created component "Flex" = "6"  so as to divide it equally*/}
        <InboxMail/>
        </div>
    </div>
  )
}
