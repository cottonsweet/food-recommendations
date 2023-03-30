// Icons
import { MdOutlineLogout } from "react-icons/md";

import classes from "./LogoutIcon.module.css";

interface Props {
  onClick: () => void;
}

const LogoutIcon = (props: Props) => {
  return (
    <div>
      <span onClick={props.onClick} className={classes.logout__icon_btn}>
        <MdOutlineLogout />
      </span>
    </div>
  );
};

export default LogoutIcon;
