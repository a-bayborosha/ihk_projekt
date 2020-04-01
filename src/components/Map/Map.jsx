import React from "react";
import classes from "./Map.module.css";
import mapImg from "./../../img/map.jpg";

const Map = () => {
  return (
    <div className={classes.Map}>
      <img src={mapImg} alt="" className={classes.mapImg} />
    </div>
  );
};

export default Map;
