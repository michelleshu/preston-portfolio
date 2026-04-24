import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Home from "./routes/Home";
import ArtistStatement from "./routes/ArtistStatement";
import Artwork from "./routes/Artwork";
import Bio from "./routes/Bio";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import Abstraction from "./routes/galleries/Abstraction";
import Automatic from "./routes/galleries/Automatic";
import Collages from "./routes/galleries/Collages";
import Current from "./routes/galleries/Current";
import OlderWork from "./routes/galleries/OlderWork";
import Printmaking from "./routes/galleries/Printmaking";
import PathOfTheInfiniteDream from "./routes/mythos/PathOfTheInfiniteDream";
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
    path: "/path-of-the-infinite-dream",
    element: <PathOfTheInfiniteDream />,
  },
  {
    path: "/iconography",
    element: <Iconography />,
  },
  {
    path: "/artwork",
    element: <Artwork />,
  },
  {
    path: "/artwork-abstraction",
    element: <Abstraction />,
  },
    {
    path: "/artwork-automatic",
    element: <Automatic />,
  },
  {
    path: "/artwork-collages",
    element: <Collages />,
  },
  {
    path: "/artwork-current",
    element: <Current />,
  },
  {
    path: "/artwork-older-work",
    element: <OlderWork />,
  },
  {
    path: "/artwork-printmaking",
    element: <Printmaking />,
  },
  {
    path: "/artist-statement",
    element: <ArtistStatement />,
  },
  {
    path: "/bio",
    element: <Bio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme appearance="dark">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
);
