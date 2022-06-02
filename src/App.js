import {
   AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Booking from "./component/Booking";
import Profile from "./component/Profile";
import { Route, Routes } from "react-router-dom";
import Notfound from "./component/Notfound";
import Index from "./component/Index";
import Protectedroute from "./component/Protectedroute";
import Navigation from "./component/Navigation";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Date from "./component/Date";
import Stepper from "./component/Stepper";
import Login from "./component/Login";
const App = () => {
 
  
  return (
  
  
    <div>
      
      
  
     {<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu" 
            
              sx={{ mr: 2 }}
            ></IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hair salon
            </Typography>
            <AddBoxIcon  />
            New Booking
           <  AccountCircleIcon />
            login
          </Toolbar>
         
        </AppBar>
        <Stepper> </Stepper>
      </Box> 
       }

      <Routes>
 
    <Route  path="/" element= {<Index />}/>
    <Route element={<Protectedroute />}>
      <Route  path="/Booking" element= {<Booking />}/>
      <Route  path="/Profile" element= {< Profile />}/>
     </Route>
     <Route path="/Date" element= {< Date />}/>
     <Route path="*" element= {< Notfound />}/>
     <Route path="/Login" element= {< Login />}/>
     

   </Routes>
   <Navigation> </Navigation>
    </div>
                     
    
    
  );
};
export default App;