import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./utils/constants/routes";

const ErrorPage = lazy(() => import('./app/pages/ErrorPage'))
const AppLayout = lazy(() => import('./app/layouts/AppLayout'))

const HomePage = lazy(() => import('./app/pages/HomePage'))
const MenuPage = lazy(() => import('./app/pages/MenuPage'))

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.MENU,
        element: <MenuPage />,
        errorElement: <ErrorPage />
      },
      {
        path: ROUTES.BOOKING,
        element: <p>Booking</p>,
        errorElement: <ErrorPage />
      },
      {
        path: ROUTES.MORE,
        element: <p>More</p>,
        errorElement: <ErrorPage />
      }
    ]
  }
])

const Router = () => (
  <RouterProvider router={router} />
)

export default Router;
