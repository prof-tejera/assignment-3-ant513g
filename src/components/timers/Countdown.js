import React, { useContext, useEffect } from "react";
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Container, Section, FlexBetween, LargeText } from '../../utils/containers';
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
    countDown,
    getMs,
    timerDone,
    timers,
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
      setTime(getMs);
    } 
  }, );
  
  return (
    <Panel>
      <DisplayTime>
        <Section>
          <LargeText>
            {formatTime(time)}
         </LargeText>
        </Section>
      </DisplayTime>
      <Container>
        <Input value='hh' />
        <Input value='mm' />
        <Input value='ss' />
      </Container>
      <Section>
        {/* <FlexBetween>
          <Button type={state.isRunning ? 'stop' : 'start'} />
          <Button type='reset' />
        </FlexBetween> */}
      </Section>
    </Panel>
  );
}

export default Countdown;