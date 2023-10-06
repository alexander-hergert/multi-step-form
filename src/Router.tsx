import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "thankyou",
            element: <ConfirmationPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
