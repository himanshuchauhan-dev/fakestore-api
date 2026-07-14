import { createHashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
