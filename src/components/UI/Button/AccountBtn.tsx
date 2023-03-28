interface Props {
  title: string;
  onClick: () => void;
}

const AccountBtn = (props: Props) => {
  return <div onClick={props.onClick}>{props.title}</div>;
};

export default AccountBtn;
