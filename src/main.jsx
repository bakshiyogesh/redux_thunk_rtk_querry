import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/home";
import Cart from "./pages/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
