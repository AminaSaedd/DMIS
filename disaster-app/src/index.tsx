import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AppRoutes from "./Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
