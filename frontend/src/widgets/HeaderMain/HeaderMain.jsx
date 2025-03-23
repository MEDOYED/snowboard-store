import ButtonLink from "../../shared/UI/buttons/ButtonLink/ButtonLink";

import "./HeaderMain.scss";

const HeaderMain = () => {
  return (
    <>
      <div className="header-main">
        <ul className="header-main__filters">
          <ButtonLink text={"For Men"} />
          <ButtonLink text={"For Women"} />
          <ButtonLink text={"For Kids"} />
        </ul>
      </div>
    </>
  );
};

export default HeaderMain;
