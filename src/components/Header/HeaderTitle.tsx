import styles from "./HeaderTitle.module.css";

const HeaderTitle = () => {
  return (
    <div className={styles.header_title}>
      <div>오늘,</div>
      <span>뭘</span>
      <span>먹을까?</span>
    </div>
  );
};

export default HeaderTitle;
