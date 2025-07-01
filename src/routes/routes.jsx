import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/news",
        element: <h1>tui harale arale</h1>,
      },
    ],
  },
]);

export default router;
