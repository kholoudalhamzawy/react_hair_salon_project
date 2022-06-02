import { Navigate, Outlet } from "react-router-dom";


const Protectedroute = () => {
  const IsAuthenticated = true  ;


  if (!IsAuthenticated){

    console.log("You have to login!");
    return <Navigate to="/" /> 
  }
    return <Outlet />;
    
  };
  export default Protectedroute;