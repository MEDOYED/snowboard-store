import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app/App.jsx";
import PageFAQ from "./pages/PageFAQ/PageFAQ.jsx";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Error(temp)</div>,
  },
  {
    path: "/FAQ",
    element: <PageFAQ />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
