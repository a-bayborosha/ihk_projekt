import React from "react";
import classes from "./Sidebar.module.css";
import Button from "@material-ui/core/Button";

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Buttons}>
        <div className={classes.Button}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
        <div className={classes.Button}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
