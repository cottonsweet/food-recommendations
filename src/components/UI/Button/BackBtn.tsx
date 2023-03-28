// CSS
import styled from "./BackBtn.module.css";

interface Props {
  title: string;
  onClick: () => void;
}

const BackBtn = (props: Props) => {
  return (
    <div className={styled.back_btn} onClick={props.onClick}>
      {props.title}
    </div>
  );
};

export default BackBtn;
