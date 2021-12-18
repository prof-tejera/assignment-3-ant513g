import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Section, Label, LargeText} from '../../utils/containers';
import { formatTime } from '../../utils/helpers';
import DisplayTime from '../generic/DisplayTime';

//    Stopwatch
//    A timer that counts up to X amount of time
//   (e.g.count up to 2 minutes and 30 seconds, starting at 0)

const Stopwatch = () => {
  const {
    laps,
    time
  } = useContext(TimerContext);
  
  return (
    <Panel>
      <DisplayTime>
        <Section>
          <LargeText>{formatTime(time)}</LargeText>
          <Label>Current Lap: {laps.length + 1}</Label>
        </Section>
      </DisplayTime>
    </Panel>
  );
}

export default Stopwatch;
