import React, {useState} from 'react'
import './App.css'
import ButtonAppBar from "./Component/AppBar" 
import SignIn from "./Component/SignIn"
import TemplateCard from "./Component/Card"
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


function App() {

const[isLoggedIn, setIsLoggedIn] = useState(true)
const [isOnline, setIsOnline] = useState(false)
const [volume, setVolume] = useState(30)
const [quality, setQuality] = useState("Low")
const handleChange = (event, newValue) => {
  setVolume(newValue);
};
const handleQualityChange = (event) => {
  setQuality(event.target.value);
};

  return (
    <div className="App">
      < ButtonAppBar />
      {isLoggedIn === true ? (<><h1> Welcome User!</h1> 
      <div className= "Cards">
      <TemplateCard title= {"Online Mode"} description = {"Is this application connected to the internet"}isOnline= {isOnline} setIsOnline ={setIsOnline} >
       <Switch {...label} onChange ={() => setIsOnline(!isOnline)} />
      </TemplateCard>
      <TemplateCard title= {"Master Volume"} description = {"Overrides all other sound settings in this application"} >
        <Slider
        aria-label="Volume"
        sx={{width: 8/10, mx: 4}}
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks = {true}
        min={0}
        max={100}
        volume= {volume}
        onChange= {handleChange}
        />
        </TemplateCard>
        <TemplateCard title= {"Sound Quality"} description = {"Manually control the music quality in event of poor connection"} >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="Age"
          onChange={handleQualityChange}
          sx={{width: 5/10, mx: 4}}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </TemplateCard>
      </div>
       <div className= "Notifications">
       <h4>System Notifications:</h4>
       {isOnline && <p>Your application is offline. You won't be able to share or stream music to other devices.</p>}
       {volume > 80 && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
       {quality === "Low" && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}
       </div>
       </>) :
      <SignIn setIsLoggedIn = {setIsLoggedIn} />}
    </div>
  );
}

export default App;
