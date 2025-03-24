import Header from "../widgets/layout/Header/Header.jsx";
import PageHome from "../pages/PageHome/PageHome.jsx";

import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <PageHome />
      </div>
    </>
  );
}

export default App;
