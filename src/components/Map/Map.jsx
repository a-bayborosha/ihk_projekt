import React from "react";
import classes from "./Map.module.css";
import Image from "./Image/Image.jsx";

const Map = (props) => {
  return (
    <div className={classes.Map}>
      <Image />
    </div>
  );
};

export default Map;
