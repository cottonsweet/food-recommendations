import FoodItem from "./FoodItem";

interface Props {
  foodItem: string[];
  selected: string[];
  selectedFoodItem: (e: React.MouseEvent<HTMLElement>) => void;
}

const Food = (props: Props) => {
  return (
    <>
      <FoodItem foodItem={props.foodItem} selected={props.selected} selectedFoodItem={props.selectedFoodItem} />
    </>
  );
};

export default Food;
