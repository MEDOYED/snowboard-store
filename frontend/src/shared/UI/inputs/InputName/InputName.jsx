import "./InputName.scss";

const InputName = ({ value, onChange }) => {
  const onHandleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <input className="input-name" onChange={onHandleChange} value={value} type="text" required />
    </>
  );
};

export default InputName;
