import React from 'react';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './sidebar.css';
function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className=".sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <ConfirmationNumberIcon className="sidebaricons"/>Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebaricons"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebaricons"/>Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <ConfirmationNumberIcon className="sidebaricons"/>Users
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebaricons"/>products
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebaricons"/>Transactions
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebaricons"/>Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <ConfirmationNumberIcon className="sidebaricons"/>Mail
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebaricons"/>Feedback
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebaricons"/>Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Students</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <ConfirmationNumberIcon className="sidebaricons"/>manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebaricons"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebaricons"/>Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;