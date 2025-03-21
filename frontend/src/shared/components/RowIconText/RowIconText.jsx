import "./RowIconText.scss";

const RowIconText = ({ Icon, text }) => {
  return (
    <>
      <div className="icon-text-row">
        <Icon />
        <span className="text">{text}</span>
      </div>
    </>
  );
};

export default RowIconText;
