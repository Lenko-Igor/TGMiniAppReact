import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./utils/constants/routes";

const ErrorPage = lazy(() => import('./app/pages/ErrorPage'))
const AppLayout = lazy(() => import('./app/layouts/AppLayout'))

const HomePage = lazy(() => import('./app/pages/HomePage'))
const MenuPage = lazy(() => import('./app/pages/MenuPage'))
const BookingPage = lazy(() => import('./app/pages/BookingPage'))
const MorePage = lazy(() => import('./app/pages/MorePage'))

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
        element: <BookingPage />,
        errorElement: <ErrorPage />
      },
      {
        path: ROUTES.MORE,
        element: <MorePage />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

const Router = () => (
  <RouterProvider router={router} />
)

export default Router;
