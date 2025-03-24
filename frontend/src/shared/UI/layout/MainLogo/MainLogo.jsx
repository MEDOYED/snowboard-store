import logo from "/logo/logo.svg";

import "./MainLogo.scss";

const MainLogo = ({ reverse }) => {
  const className = reverse ? "main-logo__reverse" : "main-logo";

  return (
    <>
      <img src={logo} className={className} alt="Brand Logo" />
    </>
  );
};

export default MainLogo;
