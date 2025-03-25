import { X } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setSignInState } from "../../../app/store/signInSlice";
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
        <div className="modal-sign-in">
          <div className="modal-sign-in__content">
            <div className="modal-sign-in__sign-in modal-sign-in__auth-part">
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

            <div className="modal-sign-in__sign-up modal-sign-in__auth-part">
              <div className="modal-sign-in__heading-wrapper">
                <h3 className="modal-sign-in__heading">Create account</h3>
                <button
                  className="modal-sign-in__close-btn"
                  onClick={handleClick}
                >
                  <X className="modal-sign-in__X-icon" />

                  <span class="corner top-left"></span>
                  <span class="corner top-right"></span>
                  <span class="corner bottom-left"></span>
                  <span class="corner bottom-right"></span>
                </button>
              </div>

              <form action="#" className="modal-sign-in__form">
                <div className="modal-sign-in__input-fields">
                  <label>
                    <span>Name*</span>
                    <input type="text" required />
                  </label>

                  <label>
                    <span>Email*</span>
                    <input type="email" required />
                  </label>

                  <label>
                    <span>Phone number</span>
                    <input type="tel" />
                  </label>
                </div>

                <div className="modal-sign-in__checkbox-row">
                  <label className="modal-sign-in__checkbox-label">
                    <input type="checkbox" />
                    <span>I'm agreeing with terms of service</span>
                  </label>
                </div>

                <button className="modal-sign-in__auth-btn">
                  Create account
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSignIn;
