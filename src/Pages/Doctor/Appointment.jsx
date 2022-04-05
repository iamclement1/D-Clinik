import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import DoctorSideBar from '../../Components/Sidebar/DoctorSideBar'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AdminMobileSide from '../../Components/Sidebar/AdminMobileSide';
import { Link } from 'react-router-dom';

function Appointment() {
//  Pseudo DataTable columns and rows for the Appointment
    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'firstName', headerName: 'Patient name', width: 220 },
        { field: 'lastName', headerName: 'Appointment Date', width: 120 },
        {field: 'age', headerName: 'Time', width: 80,},
        {field: 'reason', headerName: 'Reason', width: 140,},
        {field: 'status', headerName: 'Status', width: 120,},
        {field: 'action', headerName: 'Action', width: 90,},
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    //   JavaScript for the mobile view sidebar calling and destroying
      const openNav = () =>{
        document.getElementById("mySidenav").style.width = "200px"
      }
      const closeNav = () =>{
        document.getElementById("mySidenav").style.width = "0";
      }
  return (
    <div>
        <Navbar/>
        <div className="container-fluid">
            <div className="row">
                {/* The sidebar for the desktop view, it will be hidden in mobile view */}
                <div className="col-md-2 bg-light mobile">
                   <DoctorSideBar/>
                </div>
                {/* The main body detail goes in here */}
                <div className="col-md-10 col bg-sucess">
                    <div className="row">
                        <div className="col-md-12" style={{display:"flex"}}>
                            {/* The side Nav trigger for the mobile view, it will be hidden in desktop view */}
                            <svg onClick={()=>openNav()}
                                className=' flex items-center cursor-pointer desktop'
                                fill='#2563eb'
                                viewBox='0 0 100 80'
                                width={20}
                                height={20}>
                                    <rect width={100} height={10}></rect>
                                    <rect y={30} width={100} height={10}></rect>
                                    <rect y={60} width={100} height={10}></rect>
                            </svg>
                            <h4>Appointment</h4>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 shadow-xl  hover:shadow-lg bg-white">
                       <div style={{ height: 570, width: '100%', marginTop:"10px"}}>
                           {/* Table for the Appointment */}
                        <DataGrid
                            style={{ fontSize: "13px",}}
                            rows={rows}
                            columns={columns}
                            pageSize={8}
                            rowsPerPageOptions={[8]}
                            checkboxSelection
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* Open side nav in mobile view */}
       <div id="mySidenav" className="sidenav bg-blue-800">
            <a to="#!" className="closebtn" onClick={()=>closeNav()}>&times;</a>
            <AdminMobileSide/>
       </div>
        
    </div>
  )
}

export default Appointment