import React from 'react'
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Sidebar({sideOne, sideOneIcon}) {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarWrapperList">
                
                <li className="sidebarWrapperListItem active">
                    <FontAwesomeIcon icon={faDashboard} className="sidebarWrapperListItemIcon"/>  Dashboard
                </li>
                <Link to ="/doctor/appointment">
                    <li className="sidebarWrapperListItem">
                        <FontAwesomeIcon icon={sideOneIcon} className="sidebarWrapperListItemIcon"/> {sideOne}
                    </li>
                </Link>
                
                <li className="sidebarWrapperListItem">
                    <FontAwesomeIcon icon={sideOneIcon} className="sidebarWrapperListItemIcon"/> {sideOne}
                </li>
                <li className="sidebarWrapperListItem">
                    <FontAwesomeIcon icon={sideOneIcon} className="sidebarWrapperListItemIcon"/> {sideOne}
                </li>
                <li className="sidebarWrapperListItem">
                    <FontAwesomeIcon icon={sideOneIcon} className="sidebarWrapperListItemIcon"/> {sideOne}
                </li>
                <li className="sidebarWrapperListItem">
                    <FontAwesomeIcon icon={sideOneIcon} className="sidebarWrapperListItemIcon"/> {sideOne}
                </li>

                <Link to="/doctor/mail/inbox">
                    <li className="sidebarWrapperListItem">
                        <FontAwesomeIcon icon={faMailBulk} className="sidebarWrapperListItemIcon"/> Mail
                    </li>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}
