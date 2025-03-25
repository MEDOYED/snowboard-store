import { Outlet } from "react-router-dom";

import Header from "../widgets/layout/Header/Header.jsx";
import ModalSignIn from "../widgets/modals/ModalSignIn/ModalSignIn.jsx";

import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
        <ModalSignIn />
      </div>
    </>
  );
}

export default App;
