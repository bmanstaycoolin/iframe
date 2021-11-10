import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate} from "react-router-dom";

export default function Navigation() {
  const [value, setValue] = React.useState('one');
    const history = useNavigate();
  const handleChange = (event, newValue) => {
    console.log("Hello")
    setValue(newValue);
  };
const handleFirstClick = ()=>{
    return history("/")
}
const handleSecondClick = ()=>{
  return history("/first")
}
const handleThirdClick = ()=>{
  return history("/second")
}
const handleFourthClick = ()=>{
  return history("/third")
}


  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
         <div onClick={handleFirstClick}>
        <Tab value="one" label="Home" />
        </div>
        <div onClick={handleSecondClick}>
        <Tab value="two" label="Scenario #1" />
        </div>
        {/* <Tab value="one" label="Item One" /> */}
        <div onClick={handleThirdClick}>
        <Tab value="three" label="Scenario #2" />
        </div>
        <div onClick={handleFourthClick}>
        <Tab value="four" label="Scenario #3" />
        </div>
      </Tabs>
    </Box>
  );
}