import React from "react";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Battle from "./Battle";
import AllPlayers from "./AllPlayers";

const Main = () => {

  return (
    <div id="main" style={{display:"flex", flexDirection:"column"}}>
      <div style={{flexDirection:"column"}}>
        <h1 className="title">THE ULTIMATE NBA WEBSITE</h1>
      </div>
      {/* <button class="button" variant="contained" >LET'S PLAY!</button> */}
      <div style={{display: 'flex'}}>
        <Team1 />
        <br></br>
        <Battle />
        <br></br>
        <Team2 />
      </div>
      <div>
        <AllPlayers />
      </div>
    </div>
  );
};

export default Main;
