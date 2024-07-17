import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [inputsearch, setinputsearch] = useState("");
  return (
    <>
      <div className="header">
        <div className="header-left">
          <MenuIcon />
        </div>
        <div className="header-input">
          <input
            onChange={(e) => setinputsearch(e.target.value)}
            value={inputsearch}
            placeholder="search"
            type="text"
          />
          <Link to={`/search/${inputsearch}`}>
            <SearchIcon className="input-search-button" />
          </Link>
        </div>

        <div className="header-icons">
          <VideoCallIcon className="header-icons" />
          <AppsIcon className="header-icons" />
          <NotificationsIcon className="header-icons" />
          <AccountCircleIcon className="header-icons" />
        </div>
      </div>
    </>
  );
}

export default Header;
