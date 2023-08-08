import { createBrowserRouter } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Tentang from "./page/Tentang";
import Galeri from "./page/Galeri";
import UbahGaleri from "./page/UbahGaleri";
import UbahBeranda from "./page/UbahBeranda";
import UbahTentang from "./page/UbahTentang";
import RequireLogin from "./components/RequireLogin";
import GaleriDetail from "./page/GaleriDetail";

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
      path: "/galeri/:id",
      element: <GaleriDetail />,
   },
   {
      path: "/dashboard/ubah-galeri",
      element: <RequireLogin>
         <UbahGaleri />
      </RequireLogin>,
   },
   {
      path: "/dashboard/ubah-beranda",
      element: <RequireLogin>
         <UbahBeranda />
      </RequireLogin>,
   },
   {
      path: "/dashboard/ubah-tentang",
      element: <RequireLogin>
         <UbahTentang />
      </RequireLogin>,
   },
   {
      path: "*",
      element: <h1>404 Not Found</h1>,
   }
]);