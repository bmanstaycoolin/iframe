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
    return history("/first")
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
        <Tab value="one" label="First Video" />
        </div>
        {/* <Tab value="one" label="Item One" /> */}
        <Tab value="two" label="Second Video" />
        <Tab value="three" label="Third Video" />
      </Tabs>
    </Box>
  );
}