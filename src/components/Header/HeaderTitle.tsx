import classes from "./HeaderTitle.module.css";

interface Props {
  className?: string;
}

const HeaderTitle = (props: Props) => {
  return (
      <div className={`${classes[props.className || ""]}`}>
        <div>오늘,</div>
        <span>뭘</span>
        <span>먹을까?</span>
      </div>
  );
};

export default HeaderTitle;
