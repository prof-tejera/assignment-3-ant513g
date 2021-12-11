import React, { useContext, useEffect } from "react";
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Container, Label, Section, LargeLabel, FlexBetween, Rounds, LargeText, Border, Column, FlexCenter} from '../../utils/containers';
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";
import Input from "../generic/Input";
import { useInterval } from "../../hooks/hooks";
import { formatTime, format } from "../../utils/helpers";

// TABATA
//  An interval timer with work / rest periods.
//  Example: 20s / 10s, 8 rounds, would count down from 20 seconds to 0,
//  then count down from 10 seconds to 0, then from 20, then from 10, etc, 
//  for 8 rounds. A full round includes both the work and rest.
//  In this case, 20 + 10=30 seconds per round. 


const Tabata = ({children}) => {

  const {
    time,
    setTime,
    ss,
    mm,
    hh,
    resting,
    setResting,
    restMM,
    restSS,
    totalTime,
    setTotalTime,
    rounds,
    setState,
    state,
    countDown,
    timerDone,
    getMs,
    getRestMs,
    roundTime,
    setRoundTime,
    restTime,
    setRestTime,
    currentRound,
    setCurrentRound,
    countReset,
    totalTabata,
    roundDone,
  } = useContext(TimerContext);

  const intervalRef = useInterval(() => {
    //counting if time is not 0
    if (state.isRunning && totalTime !== 0) {
      setTime(countDown);
      setTotalTime(totalTime - 1);
      if (time === 0 && resting) {
        // Setting roundTime - 1
        // Because if it includes the initial round time, it will also count zero as a number,
        // which will make the round time left in round greater than the total time left
        setTime(roundTime - 1);
        setResting(false);
        roundDone();
        if (currentRound >= rounds) {
          setCurrentRound(currentRound);
        } else {
          setCurrentRound(currentRound => currentRound + 1);
        }
      } else if (time === 0 && !resting) {
          setTime(restTime - 1);
          setResting(true);
          roundDone();
        } 
    } else if (state.isRunning && (totalTime === 0)) {
      countReset();
      timerDone();
      setState({ type: 'stop' });
    } else {
      window.clearInterval(intervalRef.current);
    }
  },  state.isRunning ? 1000 : null );

  useEffect(() => {
    if (!state.isRunning) {
      setTime(getMs);
      setRoundTime(getMs);
      setRestTime(getRestMs);
      setTotalTime(totalTabata);
    } 
    if (isNaN(time)) {
      setTotalTime(0);
  }
  }, );


  return (
    <Panel>
      <DisplayTime>
        <Section>
          <Label>Total Time Left:</Label>
          <Rounds>{formatTime(totalTime)}</Rounds>
        </Section>
        <Section>
          <Label> Time Left in {resting ? 'Rest' : 'Round'}:</Label>
          <LargeText> {formatTime(time)}</LargeText>
        </Section>
        <Section>
          <Label>Rounds:</Label>
          <Rounds>{currentRound}/{state.rounds}</Rounds>
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
        <LargeLabel>Set Round Time: {format(hh, mm, ss)}</LargeLabel>
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
      <Section>
        <FlexBetween>
          <Button type={state.isRunning ? 'stop' : 'start'} />
          <Button type='reset' />
          <Button type='skip' />
        </FlexBetween>
      </Section>
    </Panel>
  );
}
  
export default Tabata;