type Good = {
  result: string;
};

const ResultModal = (props: Good) => {
  return <div>{props.result}</div>;
};

export default ResultModal;
