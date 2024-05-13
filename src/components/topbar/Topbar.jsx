import React from 'react';
import './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
function Topbar(props) {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft"><span className="logo">
                   Nadish
                  </span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>

                    </div>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-8a257763046bcd33e9d4fbdbdf2d5071-pjlq" alt="" className="topAvatar"/>
                </div>


            </div>

        </div>
    );
}

export default Topbar;