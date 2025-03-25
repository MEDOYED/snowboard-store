import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app/App.jsx";
import PageFAQ from "./pages/PageFAQ/PageFAQ.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import PageHome from "./pages/PageHome/PageHome.jsx";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    // if want to route to a children element,
    // instead of new page
    children: [
      {
        index: true, // this renders when path is exactly "/"
        element: <PageHome />, // or whatever component you want
      },
      {
        path: "/FAQ/:FAQSection",
        element: <PageFAQ />,
      },
    ],
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
