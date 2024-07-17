import React from "react";
import "./Videorow.css";

function Videorow({
  views,
  subs,
  description,
  timesstamp,
  channel,
  tittle,
  image,
}) {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="videorow-text">
        <h3>{tittle}</h3>
        <p className="videorow-headline">
          {channel}.{""} <span className="videorow-subnumber">{subs}</span>
          subscription
          {views} . {timesstamp}
        </p>
        <p className="videorow-description">{description}</p>
      </div>
    </div>
  );
}

export default Videorow;
