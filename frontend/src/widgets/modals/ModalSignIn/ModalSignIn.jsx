import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSignInState } from "../../../app/store/signInSlice";
import { Eye, EyeOff } from "lucide-react";

import ButtonCloseModal from "../../../shared/UI/buttons/ButtonCloseModal/ButtonCloseModal";
import FormSignUp from "../../forms/FormSignUp/FormSignUp";

import "./ModalSignIn.scss";

const ModalSignIn = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.signIn.isActive);
  const [showPass, setShowPass] = useState(false);

  const handleCloseModalWindow = useCallback(() => {
    dispatch(setSignInState(false));
  }, [dispatch]);

  const togglePassVisability = (e) => {
    e.preventDefault();
    setShowPass((prevState) => !prevState);
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        handleCloseModalWindow();
      }
    };

    if (isActive) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isActive, handleCloseModalWindow]);

  return (
    <>
      {isActive === true && (
        <div className="modal-sign-in" onClick={handleCloseModalWindow}>
          <div className="modal-sign-in__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sign-in__sign-in modal-sign-in__auth-part">
              <h3 className="modal-sign-in__heading">Sign in</h3>

              {/* refactor */}
              <form action="#" className="modal-sign-in__form">
                <div className="modal-sign-in__input-fields">
                  <label>
                    <span>Phone number or email</span>
                    <input type="text" required />
                  </label>

                  <label>
                    <span>Password</span>
                    <div className="modal-sign-in__input-fields__pass-input-wrapper">
                      <input type={showPass ? "text" : "password"} required />
                      <button type="button" onClick={togglePassVisability}>
                        {showPass ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
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
                <ButtonCloseModal className="modal-sign-in__close-modal-btn" />
              </div>

              <FormSignUp />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSignIn;
