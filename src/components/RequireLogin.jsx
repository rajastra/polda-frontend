import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

const RequireLogin = (props) => {

   if (!Cookies.get('token')) {
      return <Navigate to="/login" />
   }

   return (
      <>{props.children}</>
   )
}

export default RequireLogin