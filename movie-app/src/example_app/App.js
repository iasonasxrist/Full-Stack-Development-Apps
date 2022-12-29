import './App.css';
import { Router } from "react-history-router";
import { useState } from 'react';
import styled from 'styled-components';
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const Room = styled.div`

  position: relative;
  width: 500px;
  height: 500px;
  border : 10px solid black;
  margin: 0 auto;

`;

const App = () => {
  const [isLampOneOn, setLampOneOn] = useState(false);
  const [isLampTwoOn, setLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => setLampOneOn(prev => !prev)
  const handleLightSwitchTwo = () => setLampTwoOn(prev => !prev)

  return (
    <Room>

      <Lamp lampOn={isLampOneOn} position='left' />
      <Lamp lampOn={isLampTwoOn} position='right' />
      <LightSwitch
        name="one"
        callback={handleLightSwitchOne}
        position="left"
        switchOn={isLampOneOn} />
      <LightSwitch
        name="two"
        callback={handleLightSwitchTwo}
        position="right"
        switchOn={isLampTwoOn} />
    </Room>


  );
}

export default App;
