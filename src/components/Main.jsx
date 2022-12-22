import React from "react";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Battle from "./Battle";

const Main = () => {
  return (
    <div id="main">
      <div id="teams">
        <Team1 />
        <Battle />
        <Team2 />
      </div>
    </div>
  );
};

export default Main;
