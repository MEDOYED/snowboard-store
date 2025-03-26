import IconAppleIphone from "../../icons/IconAppleIphone/IconAppleIphone";

import "./ButtonAppDownload.scss";

const ButtonAppDownload = () => {
  return (
    <a href="#" className="button-app-download">
      <IconAppleIphone className={"icon"} />
      <div className="text">
        <p>Download on the</p>
        <h2>App Store</h2>
      </div>
    </a>
  );
};

export default ButtonAppDownload;
