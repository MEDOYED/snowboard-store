import "./ButtonAppDownload.scss";

const ButtonAppDownload = ({ Icon, text, title }) => {
  console.log(Icon);

  return (
    <a href="#" className="button-app-download">
      <Icon className="icon" />
      <div className="text">
        <p>{text}</p>
        <h2>{title}</h2>
      </div>
    </a>
  );
};

export default ButtonAppDownload;
