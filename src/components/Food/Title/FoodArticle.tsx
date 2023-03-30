import React from "react";

// CSS
import classes from "./FoodArticle.module.css";

interface Props {
  children: React.ReactNode;
}

const FoodArticle = (props: Props) => {
  return <div className={classes.food_article}>{props.children}</div>;
};

export default FoodArticle;
