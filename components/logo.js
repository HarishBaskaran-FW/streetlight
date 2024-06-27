import React from "react";
import Tooltip from "./tooltip";

// Component definition
const Logo = (props) => {
  return props.icon && props.message ? (
    <Tooltip message={props.message} position="down" className="cursor-pointer">
      <div className={`max-w-[15px]`}>
        <i
          className={`${props.icon} ${props.className}`}
          onClick={props.onClick}
        ></i>
      </div>
    </Tooltip>
  ) : (
    <div className={`max-w-[15px]`}>
      <i
        className={`${props.icon} ${props.className}`}
        onClick={props.onClick}
      ></i>
    </div>
  );
};

export default Logo;

/* 
  onClick=
  icon=
  className = 
*/
