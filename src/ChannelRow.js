import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noofvideos,
  description,
}) {
  return (
    <div className="channel-row">
      <Avatar className="channelRow-logo " alt={channel} src={image} />
      <div className="channelrow-text">
        <h4>
          {channel} {verified && <VerifiedUserIcon />}
        </h4>
        <p>
          {subs} subscribes . {noofvideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
