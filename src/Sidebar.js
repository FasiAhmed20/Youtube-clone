import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="side-bar">
      {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">search</Link>
            </li>
          </ul> */}
      <SidebarRow Icon={HomeIcon} tittle="Home" />

      <SidebarRow Icon={WhatshotIcon} tittle="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} tittle="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} tittle="Library" />
      <SidebarRow Icon={HistoryIcon} tittle="History" />
      <SidebarRow Icon={OndemandVideoIcon} tittle="your Videos" />
      <SidebarRow Icon={WatchLaterIcon} tittle="WatchLater" />
      <SidebarRow Icon={ThumbUpOutlinedIcon} tittle="liked video" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} tittle="show more" />
    </div>
  );
}

export default Sidebar;
