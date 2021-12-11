import React, { useContext } from "react";
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Section, Label, FlexBetween, LargeText} from '../../utils/containers';
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
    laps,
    time,
    setTime,
    countUp,
    } = useContext(TimerContext);
  
  useInterval(() => {
    setTime(countUp);
    }, state.isRunning ? 1000 : null);
  
  return (
    <Panel>
      <DisplayTime>
        <Section>
          <LargeText>{formatTime(time)}</LargeText>
          <Label>Current Lap: {laps.length + 1}</Label>
        </Section>
      </DisplayTime>
      <DisplayRounds />
    </Panel>
  );
}

export default Stopwatch;
