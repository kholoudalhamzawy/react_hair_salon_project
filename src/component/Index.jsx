import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import RoomIcon from "@mui/icons-material/Room";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../index.css";
import Option from "./Option";
import App from "./Date";
    
import React, { useEffect, useState } from "react";

import axios from 'axios';

function Index() {
  const steps = ["services", "data/time", "finalizing"];
  // {
  //   "id": 1,
  //   "name": "Adult Cut",
  //   "durationInMinutes": 30,
  //   "price": 300,
  //   "description": "Looking for a quick haircut? This is the one for you."
  // },
  /*useEffect*/
  const [services, setServices] = useState([]);

  useEffect(() => {
    const api_url =  'https://fci-back-end.herokuapp.com/services';

    const response = axios.get(api_url).then((response) => {
      // console.log(response)
      const {data} = response;
      console.log(data[0].services);
      setServices(data[0].services)
    } )

  }, []);

  const Options = [
    {
      title: "Adult Cut",
      time: "30 minutes",
      contents: "Looking for a quick haircut? This is the one for you.",
      price: "300$",
    },

    {
      title: "Cut & Shampoo",
      time: "1 hours",
      contents:
        "This cut includes a shampoo service with some of our favorite professional products",
      price: "400$",
    },
    {
      title: "Cut, Shampoo & Basic Style",
      time: "45 minutes",
      contents:
        "After this blow-dry and brush-finished cut, you'll be ready for anything",
      price: "500$",
    },
    {
      title: "Cut, Shampoo & Full Style",
      time: "20 minutes",
      contents:
        "This cut option offers styling with hot tools to complete your new look",
      price: "360$",
    },
  ];
 
  const components = services.map((option, index) => {
    return <Option data={option} key={index}></Option>;
  });


  
   const Colors = [
    {
      title: "Permanent",
      time: "30 minutes",
      contents:
        "for gray coverage or going lighter or darker): Receive a professional hair color service performed by one of our experts to cover gray or to lighten or darken your natural hair color.",
      price: "$129",
    },
    {
      title: "Semi",
      time: "1 hours",
      contents:
        "Looking for a new color, but not ready for a total commitment? Ask your stylist if semi-permanent is right for you.",
      price: "$400",
    },
    {
      title: "Specialty",
      time: "1 hours",
      contents:
        "Make a bold change with an on-trend color choice, including dimensional color, multiple colors, ombre/sombre, balayage, block color, color melt, and more.",
      price: "$400",
    },
    {
      title: "Gray Blending",
      time: "1 hours",
      contents:
        "Take the amount of gray in your hair down a notch, while maintaining a more natural look with this popular service.",
      price: "$400",
    },
  ];
  const Colorr = Colors.map((option, index) => {
    return <Option data={option} key={index}></Option>;
  });
     const Treatments = [
    {
      title: "Basic Conditioning",
      time: "30 minutes",
      contents:
        "This conditioning treatment provides intense moisture to strands and fortifies the hair with added protein.",
      price: "$129",
    },
    {
      title: "Specialty Conditioning",
      time: "1 hours",
      contents:
        "Customizable conditioning treatments specifically designed for what your hair needs most. Your stylist will create a formula for color treated hair, moisturizing, smoothing, or strengthening.",
      price: "$400",
    },
    {
      title: "Malibu",
      time: "1 hours",
      contents:
        "This two-step process first cleanses the hair of impurities and remove any build-up. Then the next step is an intense repair treatment that will leave your hair feeling stronger and shinier.",
      price: "$400",
    },
  ];
  const Treatment = Treatments.map((option, index) => {
    return <Option data={option} key={index}></Option>;
  });
  const Waxing = [
    {
      title: "Brow Wax",
      time: "30 minutes",
      contents:
        "This service removes hair and exfoliates the skin, making make-up application smoother and helps open the look of your eyes with a natural brow arch.",
      price: "$129",
    },
    {
      title: "Facial Waxing",
      time: "1 hours",
      contents: "Creates smoothness along the lip-line or chin.",
      price: "$400",
    },
  ];
  const waxing = Waxing.map((option, index) => {
    return <Option data={option} key={index}></Option>;
  });
  const Special = [
    {
      title: "Formal Styling/Special Occasion Hair",
      time: "30 minutes",
      contents:
        "Special occasion styling includes braided up-styles, chignon, French twists, or any style to fit the event.",
      price: "$129",
    },
    {
      title: "Blow Outs",
      time: "1 hours",
      contents:
        "Enjoy a relaxing shampoo and a smooth blow out to de-frizz, create body and shine.",
      price: "$400",
    },
  ];
 const SpecialServices = Special.map((option, index) => {
    return <Option data={option} key={index}></Option>;
  });

  return (
    <div>
      <Stepper activeStep={0} alternativeLabel className="mt">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <h1>Services </h1>

      <Paper elevation={3} className=" wp hp mp mmp">
        <Button variant="outlined">Back</Button>
        <Button onClick={< App ></ App >} variant="contained ">Next</Button>
        <h1>Hair Salon </h1>
        <RoomIcon /> <h3> Norway, Oslo</h3>
        <PermPhoneMsgIcon />
      </Paper>

      <Alert variant="outlined" severity="info" className="mta wa ha ma mma">
        This is an info alert — check it out!
      </Alert>
      <div className="wk">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Haircuts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>{components}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>All-Over Color</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>{Colorr}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Deep Conditioning</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>{Treatment}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Waxing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>{waxing}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography> Special Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>{SpecialServices}</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export default Index;

     