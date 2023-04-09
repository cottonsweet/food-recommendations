import classes from "./FoodItem.module.css";

// Icons
import { AiOutlineCheckCircle } from "react-icons/ai";

interface Props {
  foodItem: string[];
  selected: string[];
  selectedFoodItem: (e: React.MouseEvent<HTMLElement>) => void;
}

const FoodItem = (props: Props) => {
  return (
    <ul>
      {props.foodItem?.map((foodItem, i) => {
        return (
          <li key={i} className={`${classes.foodItem__list}`}>
            <span className={classes.foodItem__list__number}>{i + 1}</span>
            <span
              onClick={props.selectedFoodItem}
              className={`${classes.foodItem__list__item} ${props.selected.includes(foodItem) ? classes.foodItem__list__selected : ""}`}
            >
              <span className={classes.foodItem}>{foodItem}</span>
              <span>
                <AiOutlineCheckCircle
                  onClick={(e) => e.stopPropagation()}
                  className={`${classes.foodItem__list__icon} ${props.selected.includes(foodItem) ? classes.foodItem__list__selected__icon : ""}`}
                />
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default FoodItem;
