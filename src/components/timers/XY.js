import React, { useContext, useEffect } from "react";
import { TimerContext } from '../../context/TimerProvider';
import { Panel, Container, FlexCenter,Label, LargeLabel, Section, Column, FlexBetween, Rounds, LargeText} from '../../utils/containers';
import { format, formatTime } from "../../utils/helpers";
import DisplayTime from "../generic/DisplayTime";
import Button from "../generic/Button";
import Input from "../generic/Input";
import { useInterval } from "../../hooks/hooks";

//    XY
//    A timer that counts down from X time per round, for Y number of rounds
//   (e.g. 1 minute for 10 minutes would count down from 1 minute to 0,
//   then start another countdown, etc, 10 times ) 

const XY = ({children}) => {

  const {
    time,
    setTime,
    ss,
    mm,
    hh,
    totalTime,
    setTotalTime,
    rounds,
    setState,
    state,
    countDown,
    timerDone,
    roundDone,
    getMs,
    roundTime,
    setRoundTime,
    currentRound,
    setCurrentRound,
    countReset,
    totalXY,
  } = useContext(TimerContext);

  const intervalRef = useInterval(() => {
    //counting if time is not 0
    if (state.isRunning && totalTime !== 0) {
      setTime(countDown);
      setTotalTime(totalTime - 1);
      if (time === 0) {
        // Setting roundTime - 1
        // Because if it includes the initial round time, it will also count zero as a number,
        // which will make the round time left in round greater than the total time left
        setTime(roundTime - 1);
        roundDone();
        if (currentRound >= rounds) {
          setCurrentRound(currentRound);
        } else {
          setCurrentRound(currentRound => currentRound + 1);
        }
      } 
    } else if (state.isRunning && (totalTime <= 0)) {
      countReset();
      timerDone();
      setState({ type: 'stop' });
    } else {
      window.clearInterval(intervalRef.current);
    }
  },  state.isRunning ? 1000 : null );

  useEffect(() => {
    if (!state.isRunning) {
      setTime(() => getMs);
      setRoundTime(getMs);
      setTotalTime(totalXY);
    } 
    if (isNaN(time)) {
      setTotalTime(0);
  }
  }, );

  return (
    <React.Fragment>
      <Panel>
        <DisplayTime>
          <Section>
            <Label>Total Time Left:</Label>
            <Rounds>{formatTime(totalTime)}</Rounds>
          </Section>
          <Section>
            <Label> Time Left in Round:</Label>
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
          {/* <FlexBetween>
            <Button type={state.isRunning ? 'stop' : 'start'} />
            <Button type='reset' />
            <Button type='skip' />
          </FlexBetween> */}
        </Section>
      </Panel>
    </React.Fragment>
  );
}
  
  export default XY;