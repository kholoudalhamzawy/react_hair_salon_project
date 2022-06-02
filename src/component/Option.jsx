import { Checkbox } from "@mui/material";
import { useRecoilState } from "recoil";
import { selected } from "../Atoms";

const Option = (props) => {
  const [_selected, setSelected] = useRecoilState(selected);
  const AddTopaper = (event, item) => {


    var newArry
   
    console.log(newArry)
    console.log(_selected)

    function getIndex(ob) {
      return _selected.findIndex(obj => obj.name === ob)

    }
   
    if (event.target.checked) {
     
      console.log(newArry)
      console.log(_selected)
      console.log(getIndex(item.name))
      if (getIndex(item.name) === -1) {
        newArry = _selected.concat([item])
        setSelected(newArry, _selected)
        
      
      console.log(_selected)

    } else if (event.target.checked === false) {
      console.log(event.target.checked)
     
        const indeToRemove = getIndex(item.name);
        const p1 = _selected.slice(0, indeToRemove);
        const p2 = _selected.slice(indeToRemove + 1, _selected.length);
        let result = []
        result = result.concat(p1)
        result = result.concat(p2)
        console.log(result)
        setSelected(result, _selected)

      }
      console.log(_selected)

    }

    console.log(_selected)

    console.log(newArry)


  };




   
  
     return (
        <div>

        <h2>{props.data?.title}</h2>
  
        <div>
          <span>{props.data?.time}</span>
        </div>
        <div>
          {props.data?.contents}
        </div> 
        <div>
         {props.data?.price} 
        </div>
        <div>
        <Checkbox onChange={(e) => AddTopaper(e, item)} /> 
        
        </div>
      </div>
      


     )
     };
  
  export default Option;
     