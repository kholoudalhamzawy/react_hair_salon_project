import { Link } from "react-router-dom";


const Navigation = () => {
    return(
    <div>
        
        <div> 
           

            <Link to= "/Booking" >Booking  </Link>
             
        </div>
        <div>
                  <Link to= " /Profile"> Profile </Link>

        </div>
        <div>

            <Link to="/Login" > Login </Link>
        </div>
         </div>
    )
  };
  export default Navigation;