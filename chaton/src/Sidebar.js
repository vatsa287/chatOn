import React from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerticon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

import './Sidebar.css';



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                     <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                     <ChatIcon />
                    </IconButton>

                    <IconButton>
                     <MoreVerticon />
                    </IconButton>
                </div>
            </div>

            <div className="header_search">
                <SearchOutlined/>

                <input placeholder="Please search message" type="text"></input>

            </div>
            <div className="sidebar__chats">

            </div>

        </div>
    )
}

export default Sidebar
