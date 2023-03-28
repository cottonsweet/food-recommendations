import React from "react";

// CSS
import classes from "./AccountSection.module.css";

interface Props {
  children: React.ReactNode;
}

const AccountSection = (props: Props) => {
  return <div className={classes.account_section}>{props.children}</div>;
};

export default AccountSection;
