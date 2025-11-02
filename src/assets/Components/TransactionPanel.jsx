function TransactionPanel(props) {
  const { index, value } = props;
  return (
    <>
      {value === index && props.children}
    </>
  );
}

export default TransactionPanel;
