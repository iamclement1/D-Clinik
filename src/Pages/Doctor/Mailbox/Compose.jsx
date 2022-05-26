import ComposeMail from "../../../Components/DrMail/ComposeMail"
import Navbar from "../../../Components/Navbar/Navbar"
import Sidebar from "../../../Components/Sidebar/Sidebar"
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'


export default function Compose() {
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
        <ComposeMail/>
        </div>
    </div>
  )
}