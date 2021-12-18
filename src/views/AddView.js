import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../context/TimerProvider';
import Stopwatch from '../components/timers/Stopwatch';
import Countdown from '../components/timers/Countdown';
import XY from '../components/timers/XY';
import Tabata from '../components/timers/Tabata';
import Button from '../components/generic/Button';
import { Section, Label, FlexBetween } from '../utils/containers';
import { formatTime } from '../utils/helpers';
import { Rounds } from '../utils/containers';
import { LargeLabel } from '../utils/containers';
import { Link } from 'react-router-dom';

const Timer = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.3rem;
  text-align: center;
`;

const AddView = (props) => {
  
  const {
    sum,
    selected,
    setSelected,
    queue,
    setQueue,
    times,
  } = useContext(TimerContext);

  function clickStopwatch() {
    setSelected({ Stopwatch: true, Countdown: false, XY: false, Tabata: false });
  }

  function  clickCountdown() {
    setSelected({ Stopwatch: false, Countdown: true, XY: false, Tabata: false });
  }

  function  clickXY() {
    setSelected({ Stopwatch: false, Countdown: false, XY: true, Tabata: false });
    }

  function  clickTabata() {
    setSelected({ Stopwatch: false, Countdown: false, XY: false, Tabata: true });
  }
  
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
              <Button type='add' onClick={() => { setQueue([...queue, times.stopwatch]);  }} />
              <br />
              <Link to='/'>
                  <Button>Back</Button>
              </Link>
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
              <Button type='add' onClick={() => { setQueue([...queue, times.countdown]) }} />
              <br />
              <Link to='/'>
                  <Button>Back</Button>
              </Link>
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
              <Button type='add'
                onClick={() => { setQueue([...queue, times.xy]) }} />
              <br />
              <Link to='/'>
                  <Button>Back</Button>
              </Link>
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
              <Button type='add' onClick={() => { setQueue([...queue, times.tabata]) }} /><br />
              <Link to='/'>
                  <Button>Back</Button>
              </Link>
            </Section>
          </Timer>
        </>
      );
    }
  }
  return (
      <Section>
        <LargeLabel>Select Timer(s):</LargeLabel>
        <Section>
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
        </Section>
        <Timer>
        <GetTimer selected={selected} />
        <Label>Total Time:</Label>
        <Rounds>{formatTime(sum)}</Rounds>
        </Timer>
        
      </Section>
    );
}

export default AddView;

