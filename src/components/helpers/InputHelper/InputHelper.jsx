import "./inputhelper.css";

function InputHelper(props) {

  const handleOnChangeInputHelper = (e) => {
    props.toHandleInputHelperChange(e.target.value)
  }

  return (
    <input
      type={props.inputHelperType}
      className="inputHelperContainer"
      placeholder={props.inputHelperPlaceholder}
      onChange={handleOnChangeInputHelper}
    />
  );
}

export default InputHelper;
