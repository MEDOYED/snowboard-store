import { useSelector, useDispatch } from "react-redux";
import { setSignInState } from "../../../App/store/signInSlice";
import "./ModalSignIn.scss";

const ModalSignIn = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.signIn.isActive);

  const handleClick = () => {
    //dispatch(setSignInState(false));
  };

  return (
    <>
      {isActive === true && (
        <div className="modal-sign-in" onClick={handleClick}>
          <div className="modal-sign-in__content">
            <div className="modal-sign-in__sign-in">
              <h3 className="modal-sign-in__heading">Sign in</h3>
              <form action="#" className="modal-sign-in__form">
                <div className="modal-sign-in__input-fields">
                  <label>
                    <span>Phone number or email</span>
                    <input type="text" required />
                  </label>

                  <label>
                    <span>Password</span>
                    <input type="password" required />
                  </label>
                </div>

                <div className="modal-sign-in__checkbox-row">
                  <label className="modal-sign-in__checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>

                  <a href="#" className="modal-sign-in__forgot-password-link">
                    Forgot password?
                  </a>
                </div>

                <button className="modal-sign-in__auth-btn">Sign In</button>
              </form>
            </div>

            <div className="modal-sign-in__sign-up">Registration</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSignIn;
