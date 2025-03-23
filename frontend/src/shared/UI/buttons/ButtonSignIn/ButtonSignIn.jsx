import { User } from "lucide-react";

import "./ButtonSignIn.scss";

const ButtonSignIn = () => {
  return (
    <li className="button-sign-in">
      <User className="button-sign-in__icon" />
      <span>Sign in</span>
    </li>
  );
};

export default ButtonSignIn;
