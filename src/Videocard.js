import { Avatar } from "@mui/material";
import React from "react";
import "./Videocard.css";

function VideoCard({ image, tittle, channel, views, timestamp, channelImage }) {
  return (
    <div className="videocard">
      <img className="videocard-thumbnail" src={channelImage} alt="" />
      <div className="videocard-info">
        <Avatar className="videocard-avatar" alt={channel} src={image} />
        <div className="vedio-text">
          <h4>{tittle}</h4>
          <p>{channel}</p>
          <p>
            {views}.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
