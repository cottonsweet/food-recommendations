import React from "react";
import classes from "./UserInput.module.css";

interface Props {
  className?: string;
  type?: string;
  name?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput = (props: Props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      className={`${classes[props.className || ""]}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required
    />
  );
};

export default UserInput;
