import React from "react";

// Css
import classes from "./AccountModalHeader.module.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

const AccountModalHeader = (props: Props) => {
  return (
    <div className={`${classes[props.className || ""]}`}>
      {props.title}
      {props.children}
    </div>
  );
};

export default AccountModalHeader;
