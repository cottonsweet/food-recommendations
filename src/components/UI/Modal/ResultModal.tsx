import classes from "./ResultModal.module.css";

// Interface 키워드
interface Good {
  result: string;
  isInAcitivyModal: () => void;
}

// props는 왜 Type or Interface 키워드로 지정을 해줘야하는가 ? => 오브젝트구조인거같아서 그런거같기도 ?

const ResultModal = (props: Good) => {
  const handleModalClose = () => props.isInAcitivyModal();

  return (
    <div className={classes.ModalWrap}>
      <div className={classes.ModalContent}>
        <div className={classes.ModalTitle}>당첨된 음식</div>
        <div className={classes.ModalResultFood}>"{props.result}"</div>
        <div className={classes.ModalBtn} onClick={handleModalClose}>
          닫기
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
