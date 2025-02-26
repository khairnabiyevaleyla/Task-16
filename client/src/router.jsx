import { createBrowserRouter } from "react-router";
import Shop from "@/pages/Shop/Shop";
import ShopDetail from "@/pages/Shop Detail/ShopDetail";
import Layout from "@/layout/index";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ShopDetail />,
      },
      {
        path: "/product",
        element: <div>product</div>,
      },

      {
        path: "/contact",
        element: <div>contact us</div>,
      },
    ],
  },
]);
