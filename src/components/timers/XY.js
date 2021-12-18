import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Container, FlexCenter, LargeLabel, Section, Column, LargeText } from '../../utils/containers';
import { format, formatTime } from '../../utils/helpers';
import DisplayTime from '../generic/DisplayTime';
import Button from '../generic/Button';
import Input from '../generic/Input';

//    XY
//    A timer that counts down from X time per round, for Y number of rounds
//   (e.g. 1 minute for 10 minutes would count down from 1 minute to 0,
//   then start another countdown, etc, 10 times ) 

const XY = ({children}) => {

  const {
    state,
    totalXY,
    timeVal
  } = useContext(TimerContext);

  return (
    <React.Fragment>
      <Panel>
        <DisplayTime>
          <Section>
            <LargeLabel>Total Time:</LargeLabel>
            <LargeText>{formatTime(totalXY)}</LargeText>
          </Section>
        </DisplayTime>
        <Section>
          <LargeLabel>Select Rounds:</LargeLabel>
          <FlexCenter>
            <LargeText>{state.rounds}</LargeText>
            <Column>
              <Button type='arrowUp' />
              <Button type='arrowDown' />
            </Column>
          </FlexCenter>
        </Section>
        <Section>
        <LargeLabel>Set Round Time: {format(timeVal.hh, timeVal.mm, timeVal.ss)}</LargeLabel>
          <Container>
            <Input value='hh' />
            <Input value='mm' />
            <Input value='ss' />
          </Container>
        </Section>
      </Panel>
    </React.Fragment>
  );
}
  
  export default XY;