import React, { useContext } from "react";
import styled from "styled-components";
import TimerProvider, { TimerContext } from "../context/TimerProvider";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { useHistory } from "react-router";
import Button from "../components/generic/Button";
import { Container } from "../utils/containers";

const Timer = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.3rem;
  text-align: center;
`;


const TimersView = (props) => {
  
  const {
    active,
    setActive,
    countReset,
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
          <h1>Stopwatch</h1>
          <Stopwatch></Stopwatch>
        </>
      );
    } else if (activeCountdown) {
      return (
        <>
          <h1>Countdown</h1>
          <Countdown></Countdown>
        </>
      );
    } else if (activeXY) {
      return (
        <>
          <h1>XY</h1>
          <XY></XY>
        </>
      );
    } else if (activeTabata) {
      return (
        <>
          <h1>Tabata</h1>
          <Tabata> </Tabata>
        </>);
    }
  }
  return (
    <React.Fragment>
      <div>
        
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
        <Timer>
          <GetTimer active={active} />
        </Timer>
        </div>
        
</React.Fragment>
    );
}

export default () => {
  return (
    <TimerProvider>
    <TimersView />
  </TimerProvider>
  );
};

