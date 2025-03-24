import { useDispatch } from "react-redux";
import { toggleSignIn } from "../../../../app/store/signInSlice";

import { User } from "lucide-react";

import "./ButtonSignIn.scss";

const ButtonSignIn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSignIn());
  };

  return (
    <li className="button-sign-in" onClick={handleClick}>
      <User className="button-sign-in__icon" />
      <span>Sign in</span>
    </li>
  );
};

export default ButtonSignIn;
