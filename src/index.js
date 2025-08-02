import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Home from "./routes/Home";
import Error from "./routes/Error";
import DreamCodex from "./routes/mythos/DreamCodex";
import Iconography from "./routes/mythos/Iconography";
import MythologyDefined from "./routes/mythos/MythologyDefined";
import Origin from "./routes/mythos/Origin";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/mythology-defined",
    element: <MythologyDefined />,
  },
  {
    path: "/origin",
    element: <Origin />,
  },
  {
    path: "/codex",
    element: <DreamCodex />,
  },
  {
    path: "/iconography",
    element: <Iconography />,
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
