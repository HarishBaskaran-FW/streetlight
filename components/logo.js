import React from "react";
import Tooltip from "./tooltip";

// Component definition
const Logo = (props) => {
  return props.message ? (
    <Tooltip
      message={props.message}
      position="right"
      className="cursor-pointer"
    >
      <div className={`max-w-[15px]`}>
        <i className={`${props.icon} ${props.className}`}></i>
      </div>
    </Tooltip>
  ) : (
    <div className={`max-w-[15px]`}>
      <i className={`${props.icon} ${props.className}`}></i>
    </div>
  );
};

export default Logo;

/* 
  onClick=
  icon=
  className = 
*/
