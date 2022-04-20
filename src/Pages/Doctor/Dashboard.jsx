import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import DoctorSideBar from '../../Components/Sidebar/DoctorSideBar'
import DashboardContent from './DashboardContent'

function Dashboard() {
    return (
    <div>
        <Navbar />
        <DoctorSideBar />
        <DashboardContent />
    </div>
)
}

export default Dashboard
