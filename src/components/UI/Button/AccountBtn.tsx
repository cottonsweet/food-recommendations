import classes from "./AccountBtn.module.css";

interface Props {
  title: string;
  className?: string;
  onClick?: () => void;
}

const AccountBtn = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes[props.className || ""]}`}
    >
      {props.title}
    </div>
  );
};

export default AccountBtn;
