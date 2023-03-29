import React from "react";

import classes from "./HeaderWrap.module.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const HeaderWrap = (props: Props) => {
  return (
    <div className={`${classes[props.className || ""]}`}>{props.children}</div>
  );
};

export default HeaderWrap;
