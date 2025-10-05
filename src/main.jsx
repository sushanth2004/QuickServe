import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes.jsx";

import App from "./App.jsx";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
