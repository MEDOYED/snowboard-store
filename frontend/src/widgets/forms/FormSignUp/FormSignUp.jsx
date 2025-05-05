import { useState } from "react";

import InputName from "../../../shared/UI/inputs/InputName/InputName";

import "./FormSignUp.scss";

const FormSignUp = () => {
  const [currentValue, setCurrentValue] = useState({
    name: "",
    email: "",
  });
  return (
    <form action="#" className="modal-sign-in__form">
      <div className="modal-sign-in__input-fields">
        <label>
          <span>Name*</span>

          <InputName
            value={currentValue.name}
            onChange={(value) =>
              setCurrentValue((prev) => ({
                ...prev,
                name: value,
              }))
            }
          />
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
          <span>{"I'm agreeing with terms of service"}</span>
        </label>
      </div>

      <button className="modal-sign-in__auth-btn">Create account</button>
    </form>
  );
};

export default FormSignUp;
