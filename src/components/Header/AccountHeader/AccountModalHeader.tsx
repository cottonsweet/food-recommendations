import React from "react";

// Css
import styled from "./AccountModalHeader.module.css";

interface Props {
  children: React.ReactNode;
}

const AccountModalHeader = (props: Props) => {
  return <div className={styled.account_modal_header}>{props.children}</div>;
};

export default AccountModalHeader;
