import "./ButtonAppDownload.scss";

const ButtonAppDownload = ({ Icon, text, title, fontSize }) => {
  return (
    <a href="#" className="button-app-download">
      <Icon className="icon" />
      <div className="text">
        <p>{text}</p>
        <h2
          style={{
            fontSize: `${fontSize}rem`,
          }}
        >
          {title}
        </h2>
      </div>
    </a>
  );
};

export default ButtonAppDownload;
