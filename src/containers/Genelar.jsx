import React from "react";
import classes from "./General.module.scss";

const Genelar = () => {
  return (
    <div className={classes.general}>
      <a href="/plans">Plans</a>
      <a href="/instructor">Instructor</a>
      <a href="/videos">Videos</a>
    </div>
  );
};

export default Genelar;
