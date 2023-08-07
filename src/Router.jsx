import { createBrowserRouter } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Tentang from "./page/Tentang";
import Galeri from "./page/Galeri";
import UbahGaleri from "./page/UbahGaleri";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/tentang",
      element: <Tentang />,
   },
   {
      path: "/galeri",
      element: <Galeri />,
   },
   {
      path: "/dashboard/ubah-galeri",
      element: <UbahGaleri />,
   },
   {
      path: "*",
      element: <h1>404 Not Found</h1>,
   }
]);