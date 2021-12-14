import React, { useContext } from "react";
import styled from "styled-components";
import { TimerContext } from "../context/TimerProvider";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
// import { useHistory } from "react-router";
import Button from "../components/generic/Button";
import { Section, Label, FlexBetween } from "../utils/containers";
import { formatTime } from "../utils/helpers";
import { Rounds } from "../utils/containers";
  
  
const Timer = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.3rem;
  text-align: center;
`;

const Nav = styled.nav`
  height: auto;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #342D9F;
  transition: .5s ease;
  display: flex;
  align-content: space-between;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
`;

const Container = styled.div`
width: 50%;
`;

const AddView = (props) => {
  
  const {
    selected,
    setSelected,
    countReset,
    queue,
    myQueue,
                setQueue,
    timers,
    totalTime,
   
  } = useContext(TimerContext);

  function clickStopwatch() {
    setSelected({ Stopwatch: true, Countdown: false, XY: false, Tabata: false });
    countReset();
  }

  function  clickCountdown() {
    setSelected({ Stopwatch: false, Countdown: true, XY: false, Tabata: false });
    countReset();
  }

  function  clickXY() {
    setSelected({ Stopwatch: false, Countdown: false, XY: true, Tabata: false });
    countReset();
    }

  function  clickTabata() {
    setSelected({ Stopwatch: false, Countdown: false, XY: false, Tabata: true });
    countReset();
  }

  console.log(queue);


  
    
    
  function GetTimer() {
    const selectedStopwatch = selected.Stopwatch;
    const selectedCountdown = selected.Countdown;
    const selectedXY = selected.XY;
    const selectedTabata = selected.Tabata;

    
    if (selectedStopwatch) {
      return (
        <>
          <Timer>
            <h1>Stopwatch</h1>
            <Stopwatch />
            <Section>
           
              <Button type='add' onClick={() => { queue.push(timers.stopwatch); console.log(queue); }} />
            </Section>
          </Timer>
        </>
      );
    } else if (selectedCountdown) {
      return (
        <>
          <Timer type='countdown'>
          <h1>Countdown</h1>
            <Countdown />
            <Section>
              <Button type='add' onClick={() => { queue.push(timers.countdown);  console.log(queue);}} />
             </Section>
            </Timer>
        </>
      );
    } else if (selectedXY) {
      return (
        <>
          <Timer type='xy'>
          <h1>XY</h1>
            <XY />
            <Section>
              <Button type='add' onClick={() => { queue.push(timers.xy); console.log(queue);}} />
            </Section>
            </Timer>
        </>
      );
    } else if (selectedTabata) {
      return (
        <>
          <Timer type='tabata'>
          <h1>Tabata</h1>
          <Tabata />
            <Section>
              <Button type='add' onClick={() => { queue.push(timers.tabata); console.log(queue);}} />
            </Section>
            </Timer>
        </>);
    }
  }
  
  return (
    <React.Fragment>
      <div>
      <Label>Select Timer(s):</Label>
       
          <FlexBetween>
          <Button
            type={selected.Stopwatch ? 'default' : 'inactive'}
            onClick={clickStopwatch}>Stopwatch</Button>
          <Button
            type={selected.Countdown ? 'default' : 'inactive'}
            onClick={clickCountdown}>Countdown</Button>
          <Button
            type={selected.XY ? 'default' : 'inactive'}
            onClick={clickXY}>XY</Button>
          <Button
            type={selected.Tabata ? 'default': 'inactive'}
            onClick={clickTabata}>Tabata</Button>
            </FlexBetween>
   
        
        <Timer>
          <GetTimer selected={selected} />
        </Timer>
        <Label>Total Time:</Label>
        <Rounds>{formatTime(totalTime)}</Rounds>
      
        </div>
        
</React.Fragment>
    );
}

export default AddView;

