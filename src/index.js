import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import App from "./components/App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme appearance="dark">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
