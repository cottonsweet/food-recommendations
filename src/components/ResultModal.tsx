import styles from "../styles/components/ResultModal.module.css";

// Type 키워드
// type Good = {
//   result: string;
// };

// Interface 키워드
interface Good {
  result: string;
}

// props는 왜 Type or Interface 키워드로 지정을 해줘야하는가 ? => 오브젝트구조인거같아서 그런거같기도 ?

const ResultModal = (props: Good) => {
  return (
    <div className={styles.ModalWrap}>
      <div className={styles.ModalContent}>
        <div className={styles.ModalTitle}>당첨된 음식</div>
        <div className={styles.ModalResultFood}>"{props.result}"</div>
        <div className={styles.ModalFoodDesc}>맛있게 먹으소 ㅅㄱ</div>
      </div>
    </div>
  );
};

export default ResultModal;
