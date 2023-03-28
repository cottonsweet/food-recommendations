import { useNavigate } from "react-router-dom";

// CSS
import styles from "./AccountContainer.module.css";

// components
import AccountBtn from "../../UI/Button/AccountBtn";

const AccountContainer = () => {
  const path = useNavigate();

  // 계정 회원가입
  const handleCreateAccount = () => path("/join");

  // 계정 로그인
  const handleLoginAccount = () => path("/login");

  return (
    <div className={styles.account}>
      <AccountBtn title="회원가입" onClick={handleCreateAccount} />
      <AccountBtn title="로그인" onClick={handleLoginAccount} />
    </div>
  );
};

export default AccountContainer;
