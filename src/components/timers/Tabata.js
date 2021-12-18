import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Container, Section, LargeLabel, LargeText, Border, Column, FlexCenter} from '../../utils/containers';
import DisplayTime from '../generic/DisplayTime';
import Button from '../generic/Button';
import Input from '../generic/Input';
import { formatTime, format } from '../../utils/helpers';

// TABATA
//  An interval timer with work / rest periods.
//  Example: 20s / 10s, 8 rounds, would count down from 20 seconds to 0,
//  then count down from 10 seconds to 0, then from 20, then from 10, etc, 
//  for 8 rounds. A full round includes both the work and rest.
//  In this case, 20 + 10=30 seconds per round. 

const Tabata = ({children}) => {

  const {
    restMM,
    restSS,
    state,
    totalTabata,
    timeVal,
  } = useContext(TimerContext);

  return (
    <Panel>
      <DisplayTime>
        <Section>
          <LargeLabel>Total Time:</LargeLabel>
          <LargeText>{formatTime(totalTabata)}</LargeText>
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
      <Section>
        <Border>
          <LargeLabel>Set Rest Time: {format(0, restMM, restSS)}</LargeLabel>
          <Container>
            <Input value='restMM' />
            <Input value='restSS' />
          </Container>
        </Border>
      </Section>
    </Panel>
  );
}
  
export default Tabata;