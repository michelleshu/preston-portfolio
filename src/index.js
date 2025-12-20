import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Home from "./routes/Home";
import Artwork from "./routes/Artwork";
import DreamStories from "./routes/DreamStories";
import Error from "./routes/Error";
import Automatic from "./routes/galleries/Automatic";
import Collages from "./routes/galleries/Collages";
import Current from "./routes/galleries/Current";
import DelegatedAbstraction from "./routes/galleries/DelegatedAbstraction";
import OlderWork from "./routes/galleries/OlderWork";
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
  {
    path: "/dream-stories",
    element: <DreamStories />,
  },
  {
    path: "/artwork",
    element: <Artwork />,
  },
  {
    path: "/artwork-current",
    element: <Current />,
  },
  {
    path: "/artwork-automatic",
    element: <Automatic />,
  },
  {
    path: "/artwork-delegated-abstraction",
    element: <DelegatedAbstraction />,
  },
  {
    path: "/artwork-collages",
    element: <Collages />,
  },
  {
    path: "/artwork-older-work",
    element: <OlderWork />,
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
