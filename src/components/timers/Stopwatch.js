import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import Panel from '../generic/Panel';
import TimerProvider, { TimerContext } from '../../context/TimerProvider';
import { Section, Label, FlexBetween, LargeText} from '../../utils/containers';
import { formatTime } from "../../utils/helpers";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";
import DisplayRounds from "../generic/DisplayRounds";
import useInterval from "../../hooks/hooks";

//    Stopwatch
//    A timer that counts up to X amount of time
//   (e.g.count up to 2 minutes and 30 seconds, starting at 0)

const Stopwatch = () => {
  const {
    state,
    setState,
    laps,
    setLaps,
    time,
    setTime,
    countUp,
    countReset
    } = useContext(TimerContext);
  
    
  
  useInterval(() => {
    setTime(countUp);
    }, state.isRunning ? 1000 : null);
  
  return (
    <React.Fragment>
      <Panel>
        <DisplayTime>
          <Section>
            <LargeText>{formatTime(time)}</LargeText>
            <Label>Current Lap: {laps.length + 1}</Label>
          </Section>
        </DisplayTime>
        <Section>
        <FlexBetween>
          <Button
            type={state.isRunning ? 'stop' : 'start'}
            onClick={() => {
                setState({
                  type: state.isRunning ? 'stop' : 'start'
                })
              }}>
            {state.isRunning ? 'Stop' : 'Start'  }
          </Button>
          <Button onClick={countReset}>Reset</Button>
            <Button onClick={() => {
                if (state.isRunning) {
                  setLaps([...laps, time]);
                } }}>Lap</Button>
        </FlexBetween>
        </Section>
        <Section>
          <DisplayRounds />
        </Section>
    </Panel>
  </React.Fragment>);
}

ReactDOM.render(
  <TimerProvider>
    <Stopwatch />
  </TimerProvider> ,

  document.getElementById('root')
);

export default Stopwatch;
