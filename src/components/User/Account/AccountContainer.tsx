import styles from "./AccountContainer.module.css";

// components
import AccountBtn from "../../UI/Button/AccountBtn";

const AccountContainer = () => {
  return (
    <div className={styles.account}>
      <AccountBtn title="회원가입" />
      <AccountBtn title="로그인" />
    </div>
  );
};

export default AccountContainer;
