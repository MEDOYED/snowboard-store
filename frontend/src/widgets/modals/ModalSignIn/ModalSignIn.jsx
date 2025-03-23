import { useSelector, useDispatch } from "react-redux";
import { setSignInState } from "../../../App/store/signInSlice";
import "./ModalSignIn.scss";

const ModalSignIn = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.signIn.isActive);

  const handleClick = () => {
    dispatch(setSignInState(false));
  };
  return (
    <>
      {isActive === true && (
        <div className="modal-sign-in" onClick={handleClick}>
          <div className="modal-sign-in__content">
            <div className="modal-sign-in__sign-in">Sign In:</div>
            <div className="modal-sign-in__registration">Registration</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSignIn;
