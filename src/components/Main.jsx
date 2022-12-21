import React from "react";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Battle from "./Battle";

const Main = () => {
  return (
    <div>
      <div>
        <Team1 />
        <Team2 />
      </div>
      <Battle />
    </div>
  );
};

export default Main;
