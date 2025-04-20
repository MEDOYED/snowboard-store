import classNames from "classnames";
import { useState, useRef } from "react";
import { IoMailSharp } from "react-icons/io5";
import { IoPaperPlane } from "react-icons/io5";

import "./FormEmailSubscribe.scss";

const FormEmailSubscribe = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const planeRef = useRef(null);

  const handleClickOnPlane = (e) => {
    e.preventDefault();

    setIsAnimating(true);
  };

  const handleAnimationPlaneEnd = () => {
    setIsAnimating(false);
  };

  const classNamePlane = classNames("form-email-subscribe__plane-icon", {
    "plane-animation": isAnimating,
  });

  return (
    <form className="form-email-subscribe" action="" method="post">
      <IoMailSharp className="form-email-subscribe__email-icon" />
      <input type="email" placeholder="Email" />
      <button type="submit" onClick={handleClickOnPlane}>
        <IoPaperPlane
          className={classNamePlane}
          ref={planeRef}
          onAnimationEnd={handleAnimationPlaneEnd}
        />
      </button>
    </form>
  );
};

export default FormEmailSubscribe;
