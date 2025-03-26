import { useDispatch } from "react-redux";
import { setSignInState } from "../../../../app/store/signInSlice";
import { X } from "lucide-react";

import "./ButtonCloseModal.scss";

const ButtonCloseModal = ({ className }) => {
  const dispatch = useDispatch();

  const handleCloseModalWindow = () => {
    dispatch(setSignInState(false));
  };

  return (
    <button
      className={`button-close-modal ${className}`}
      onClick={handleCloseModalWindow}
    >
      <X className="button-close-modal__X-icon" />

      <span className="corner top-left"></span>
      <span className="corner top-right"></span>
      <span className="corner bottom-left"></span>
      <span className="corner bottom-right"></span>
    </button>
  );
};

export default ButtonCloseModal;
