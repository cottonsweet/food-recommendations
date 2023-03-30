import React from "react";

// CSS
import classes from "./FoodContainer.module.css";

interface Props {
  children: React.ReactNode;
}

const FoodContainer = (props: Props) => {
  return <div className={classes.foodContainer}>{props.children}</div>;
};

export default FoodContainer;
