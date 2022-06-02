import { Checkbox } from "@mui/material";

const Option = (props) => {
    return (
      <div>
        <h2>{props.data?.name}</h2>
  
        <div>
          <span>{props.data?.durationInMinutes}</span>
        </div>
        <div>
          {props.data?.description}
        </div> 
        <div>
         {props.data?.price} 
        </div>
        <div>
        <Checkbox  />
        
        </div>
      </div>
      


      
    );
  };
  export default Option;
  