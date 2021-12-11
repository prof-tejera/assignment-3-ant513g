import React, { useContext } from "react";
import styled from "styled-components";
import { TimerContext } from "../context/TimerProvider";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
// import { useHistory } from "react-router";
import Button from "../components/generic/Button";
import { Container } from "../utils/containers";


const Timer = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.3rem;
  text-align: center;
`;

const Nav = styled.nav`
  height: auto;
  width: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #342D9F;
  transition: .5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const AddView = (props) => {
  
  const {
    active,
    setActive,
    countReset,
    timers,
    Timers,
  } = useContext(TimerContext);

  function clickStopwatch() {
    setActive({ Stopwatch: true, Countdown: false, XY: false, Tabata: false });
    countReset();
  }

  function  clickCountdown() {
    setActive({ Stopwatch: false, Countdown: true, XY: false, Tabata: false });
    countReset();
  }

  function  clickXY() {
    setActive({ Stopwatch: false, Countdown: false, XY: true, Tabata: false });
    countReset();
    }

  function  clickTabata() {
    setActive({ Stopwatch: false, Countdown: false, XY: false, Tabata: true });
    countReset();
  }



  
    
    
  function GetTimer() {
    const activeStopwatch = active.Stopwatch;
    const activeCountdown = active.Countdown;
    const activeXY = active.XY;
    const activeTabata = active.Tabata;

    
    if (activeStopwatch) {
      return (
        <>
          <Timer>
            <h1>Stopwatch</h1>
            <Stopwatch></Stopwatch>
            <Button onClick={() => {
              Timers();
              console.log('Clicked');
              console.log(timers);
            }}>Add</Button>
          </Timer>
        </>
      );
    } else if (activeCountdown) {
      return (
        <>
          <Timer type='countdown'>
          <h1>Countdown</h1>
          <Countdown></Countdown>
            <Button onClick={() => {
              Timers('countdown');
              console.log('Clicked');
              console.log(timers);
            }}>Add</Button>
            </Timer>
        </>
      );
    } else if (activeXY) {
      return (
        <>
          <Timer type='xy'>
          <h1>XY</h1>
          <XY></XY>
            <Button onClick={() => {
              Timers('xy');
              console.log('Clicked');
              console.log(timers);
            }
            }>Add</Button>
            </Timer>
        </>
      );
    } else if (activeTabata) {
      return (
        <>
          <Timer type='tabata'>
          <h1>Tabata</h1>
          <Tabata> </Tabata>
            <Button onClick={() => {
              Timers('tabata');
              console.log('Clicked');
              console.log(timers);
            }}>Add</Button>
            </Timer>
        </>);
    }
  }
  return (
    <React.Fragment>
      <div>
        <Nav>
        <Container>
          <Button
            type={active.Stopwatch ? 'active' : 'default'}
            onClick={clickStopwatch}>Stopwatch</Button>
          <Button
            type={active.Countdown ? 'active' : 'default'}
            onClick={clickCountdown}>Countdown</Button>
          <Button
            type={active.XY ? 'active' : 'default'}
            onClick={clickXY}>XY</Button>
          <Button
            type={active.Tabata ? 'active': 'default'}
            onClick={clickTabata}>Tabata</Button>
        </Container>
        </Nav>
        <Timer>
          <GetTimer active={active} />
        </Timer>
        </div>
        
</React.Fragment>
    );
}

export default AddView;

