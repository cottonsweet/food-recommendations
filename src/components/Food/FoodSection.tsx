import React from "react";

// CSS
import classes from "./FoodSection.module.css";

interface Props {
  userFood?: string;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FoodSection = (props: Props) => {
  return (
    <div className={`${classes[props.className || ""]}`}>
      <div>오늘은 어떤 음식을 드시고 싶으세요?</div>

      <form onSubmit={props.onSubmit}>
        <input onChange={props.onChange} value={props.userFood} placeholder="음식 이름을 여기에 입력 해주세요!" />
      </form>
    </div>
  );
};

export default FoodSection;
