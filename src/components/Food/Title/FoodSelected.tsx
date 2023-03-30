import React from "react";

// CSS
import classes from "./FoodSelected.module.css";

interface Props {
  children: React.ReactNode;
  selected: string[];
  foodItem: string[];
}

const FoodSelected = (props: Props) => {
  return (
    <div className={classes.foodItem__selected_title}>
      <div className={classes.foodItem__selected_itemLength}>
        선택된 음식 - {props.selected.length} / {props.foodItem.length}
      </div>
      {props.children}
    </div>
  );
};

export default FoodSelected;
