import React from 'react'
import MailSidebar from "./MailSidebar"
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

function InboxMail() {
    //  Pseudo DataTable columns and rows for the Inbox
    const columns = [
        { field: 'id', width: 60, headerAlign: 'center', headerClassName: 'super-app-theme--header' },
        { field: 'Subject', width: 560, headerAlign: 'center', headerClassName: 'super-app-theme--header', renderCell: (params)=>{
            return(
              <Link className='link' to="">
                <div style={{display:"flex", alignItems:"center", cursor:"pointer", color:"black"}}>
                    <div style={{marginRight:"10px",}}>{params.row.subject}</div> 
                    {
                        params.row.body
                    }
                </div>
              </Link>
            )
      }},
        { field: 'date', width: 200,headerAlign: 'center', headerClassName: 'super-app-theme--header', renderCell: (params)=>{
          return(
            <Link className='link' to="">
              <div style={{display:"flex", alignItems:"center" ,cursor:"pointer", color:"black"}}>
                  <div style={{marginRight:"10px", cursor:"pointer"}}>{params.row.date}</div> 
                  {
                      params.row.time
                  }
              </div>
            </Link>  
          )
    }},
        {field: 'action', width: 50, headerAlign: 'center', headerClassName: 'super-app-theme--header',renderCell: (params)=>{
            return(
                  <div>
                      <Link className='link' to=""><FontAwesomeIcon icon={faEdit} style={{marginLeft:"5px",marginRight:"5px",color:"green",cursor:"pointer"}}/></Link>           
                      
                      <FontAwesomeIcon icon={faDeleteLeft} className='tiny material-icons' style={{marginRight:"5px",color:"red",cursor:"pointer"}}/>
                  </div>
              )},}
      ];
      const rows = [
        { id: 1, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 2, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 3, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 4, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 5, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 6, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 7, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 8, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 9, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 10, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
        { id: 11, name: 'Snow', subject: 'Jon', body: "hgjkjiiuuijfojhbbhchbhbhvgxjjjjkk", date:"30 may 2020", time:"10pm" },
      ]
  return (
    <div className="mail">
        <div className="mailWrapper">
            <div className="mailContainer">
                <div className="mailLeft">
                    <MailSidebar/>
                </div>
                <div className="mailRights">
                    <div className="mailRightWrappers" style={{height:"100%"}}>
                        <Box sx={{
                            height: "100%",
                            width: 1,
                            "& .MuiDataGrid-columnHeaders": { display: "none" },
                            "& .MuiDataGrid-virtualScroller": { marginTop: "0!important" },
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
            </div>
        </div>
    </div>
  )
}

export default InboxMail