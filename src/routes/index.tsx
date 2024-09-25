import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
]);

