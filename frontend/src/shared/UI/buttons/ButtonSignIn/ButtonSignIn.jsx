import { useState } from "react";

import { User } from "lucide-react";

import "./ButtonSignIn.scss";

const ButtonSignIn = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);

  return (
    <li className="button-sign-in" onClick={handleClick}>
      <User className="button-sign-in__icon" />
      <span>Sign in</span>
    </li>
  );
};

export default ButtonSignIn;
