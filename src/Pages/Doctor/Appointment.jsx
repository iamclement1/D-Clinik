import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import ApptTable from '../../Components/DrApptTable/ApptTable'

function Appointment() {
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
        <ApptTable/>
        </div>
    </div>

    )
}

export default Appointment