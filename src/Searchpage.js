import React from "react";
import "./Searchpage.css";
// import Videorow from "./Videorow";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

function Searchpage() {
  return (
    <div className="searchpage">
      <div className="searchpage-filtter">
        <TuneOutlinedIcon />
        <h2>filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images.unsplash.com/photo-1548328928-34db1c5fcc1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D"
        channel="F@si Ahmed"
        verified
        subs="550k"
        noofvideos={382}
        description="you can find awesome program"
      />

      <hr />

      {/* <Videorow /> */}
    </div>
  );
}

export default Searchpage;
