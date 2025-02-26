import React from "react";
import { Routers } from "./router";
import { RouterProvider } from "react-router";

const App = () => {
  return <RouterProvider router={Routers} />;
};

export default App;
