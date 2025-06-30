import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Home from "./routes/Home";
import Error from "./routes/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
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
