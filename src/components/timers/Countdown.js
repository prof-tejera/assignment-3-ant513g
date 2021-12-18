import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Container, Section, LargeText } from '../../utils/containers';
import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';
import { format } from '../../utils/helpers';

//  Countdown
//  A timer that counts down from X amount of time
//  (e.g.count down to 0, starting at 2 minutes and 30)

const Countdown = () => {

  const {
    timeVal,
  } = useContext(TimerContext);
 
  return (
    <Panel>
      <DisplayTime>
        <Section>
          <LargeText>
            {format(timeVal.hh, timeVal.mm, timeVal.ss)}
         </LargeText>
        </Section>
      </DisplayTime>
      <Container>
        <Input value='hh' />
        <Input value='mm' />
        <Input value='ss' />
      </Container>
    </Panel>
  );
}

export default Countdown;