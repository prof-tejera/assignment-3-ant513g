import React, { useContext, useEffect } from "react";
import ReactDOM from 'react-dom';
import Panel from '../generic/Panel';
import TimerProvider, { TimerContext } from '../../context/TimerProvider';
import { Container, Section, FlexBetween, LargeText } from '../../utils/containers';
import { formatTime } from "../../utils/helpers";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";
import Input from "../generic/Input";
import { useInterval } from "../../hooks/hooks";

//  Countdown
//  A timer that counts down from X amount of time
//  (e.g.count down to 0, starting at 2 minutes and 30)

const Countdown = () => {

  const {
    time,
    setTime,
    state,
    setState,
    ss,
    setSS,
    mm,
    setMM,
    hh,
    setHH,
    countDown,
    getMs,
    timerDone,
    countReset,
  } = useContext(TimerContext);
 

  const intervalRef = useInterval(() => {
    if (state.isRunning && time !== 0) {
      setTime(countDown);
    } else if (time === 0) {
      timerDone();
      window.clearInterval(intervalRef.current);
    } else {
      window.clearInterval(intervalRef.current);
    }
  },  state.isRunning ? 1000 : null );

  useEffect(() => {
    if (!state.isRunning) {
      setTime(() => getMs);
    } 
  }, );
  
  return (
    <Panel>
      <DisplayTime>
        <Section>
          <LargeText>
            {formatTime(time)}<br />
         </LargeText>
         </Section>
          </DisplayTime>
      <Container>
               <Input value={hh} name="Hours" onChange={(e) => setHH(e.target.value)}/>
              <Input value={mm} name="Minutes" onChange={(e) => setMM(e.target.value)}/>
              <Input value={ss} name="Seconds" onChange={(e) => setSS(e.target.value)}/>
      </Container>
      <Section>
      <FlexBetween>
      <Button
            type={state.isRunning ? 'stop' : 'start'}
            onClick={() => {
              setState({ type: state.isRunning ? 'stop' : 'start' })
            }}>
          {state.isRunning ? 'Stop' : 'Start'  }
          </Button>

          <Button
            onClick={countReset}>Reset
          </Button>
            </FlexBetween>
   </Section>
    </Panel>
  );
}

ReactDOM.render(
  <TimerProvider>
    
    <Countdown />
    </TimerProvider>,
   
  document.getElementById('root')
);

export default Countdown;