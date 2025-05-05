import { useState } from "react";

import "./FormSignUp.scss";

const FormSignUp = () => {
  const [currentValue, setCurrentValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onHandleChange = (e) => {
    const changedField = e.target.name;
    const value = e.target.value;

    // more correct with destructuring the object
    // const { name, value } = e.target;

    setCurrentValue((prev) => ({
      ...prev,
      [changedField]: value,
    }));
  };

  console.log(currentValue);

  return (
    <form action="#" className="modal-sign-in__form">
      <div className="modal-sign-in__input-fields">
        <label>
          <span>Name*</span>
          <input
            name="name"
            type="text"
            value={currentValue.name}
            onChange={onHandleChange}
            required
          />
        </label>

        <label>
          <span>Email*</span>
          <input
            name="email"
            type="email"
            value={currentValue.email}
            onChange={onHandleChange}
            required
          />
        </label>

        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" value={currentValue.phone} onChange={onHandleChange} />
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
