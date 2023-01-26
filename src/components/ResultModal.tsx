// Type 키워드
// type Good = {
//   result: string;
// };

// Interface 키워드
interface Good {
  result: string;
}

// props는 왜 Type or Interface 키워드로 지정을 해줘야하는가 ?
const ResultModal = (props: Good) => {
  return <div>{props.result}</div>;
};

export default ResultModal;
