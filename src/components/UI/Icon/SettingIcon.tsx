// Icons
import { HiCog } from "react-icons/hi";

import classes from "./SettingIcon.module.css";

interface Props {
  onClick: () => void;
}

const SettingIcons = (props: Props) => {
  return (
    <div>
      <span onClick={props.onClick} className={classes.setting__icon_btn}>
        <HiCog />
      </span>
    </div>
  );
};

export default SettingIcons;
