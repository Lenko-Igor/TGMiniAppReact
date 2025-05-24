import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./utils/constants/routes";

const AppLayout = lazy(() => import('./app/layouts/AppLayout'))
const Home = lazy(() => import('./app/pages/Home'))
const ErrorPage = lazy(() => import('./app/pages/ErrorPage'))

const router = createBrowserRouter([
  {
    path: ROUTES.INITIAL_ROUTE,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.CONTACTS,
        element: <p>contacts</p>,
        errorElement: <ErrorPage />
      }
    ]
  }
])

const Router = () => (
  <RouterProvider router={router} />
)

export default Router;
