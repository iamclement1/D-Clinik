import React from 'react'
import "./apptTable.css"
import { DataGrid, gridClasses} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft ,faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";




const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));


export default function ApptTable() {
    //  Pseudo DataTable columns and rows for the Appointment
    const columns = [
        { field: 'id', headerName: 'Id', width: 60, headerAlign: 'center', headerClassName: 'super-app-theme--header' },
        { field: 'name', headerName: 'Name of Patient', width: 141, headerAlign: 'center', headerClassName: 'super-app-theme--header' },
        { field: 'website', headerName: 'Nature of Sickness', width: 600,headerAlign: 'center', headerClassName: 'super-app-theme--header' },
        { field: 'date', headerName: 'Appt Date/Time ', width: 200,headerAlign: 'center', headerClassName: 'super-app-theme--header', renderCell: (params)=>{
          return(
              <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{marginRight:"10px",}}>{params.row.date}</div> 
                  {
                      params.row.time
                  }
              </div>
          )
    }},
        {field: 'action', headerName: 'Action', width: 90, headerAlign: 'center', headerClassName: 'super-app-theme--header',renderCell: (params)=>{
            return(
                  <div>
                      <Link className='link' to=""><FontAwesomeIcon icon={faEdit} style={{marginLeft:"5px",marginRight:"5px",color:"green",cursor:"pointer"}}/></Link>           
                      
                      <FontAwesomeIcon icon={faDeleteLeft} className='tiny material-icons' style={{marginRight:"5px",color:"red",cursor:"pointer"}}/>
                  </div>
              )},}
      ];
      const rows = [
        { id: 1, name: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, name: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, name: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, name: 'Stark', firstName: 'Arya', age: 16 },
      ]
  return (
    <div className="apptTable">
        <div className="tableWrapper">
            <Box sx={{
                height: "100%",
                width: 1,
                '& .super-app-theme--header': {
                backgroundColor: '#212529', color:"white"}}}>
                <StripedDataGrid
                    sx={{
                        boxShadow: 2,
                        '& .MuiDataGrid-cell:hover': {
                        color: '#212529',}
                    }}
                    style={{ fontSize: "13px"}}
                    rows={rows}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    disableSelectionOnClick
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                    }
                />
            </Box>
        </div>
    </div>
  )
}
