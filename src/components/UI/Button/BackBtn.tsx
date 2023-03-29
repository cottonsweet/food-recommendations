// CSS
import classes from "./BackBtn.module.css";

interface Props {
  title: string;
  className: string;
  onClick: () => void;
}

const BackBtn = (props: Props) => {
  return (
    <div
      className={`${classes[props.className || ""]}`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};

export default BackBtn;
