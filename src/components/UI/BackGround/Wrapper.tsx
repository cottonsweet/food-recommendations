import React from "react";

// CSS
import styles from "./Wrapper.module.css";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default Wrapper;
