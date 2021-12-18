import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerProvider';
import Button from './Button';
import { FlexBetween, Panel } from '../../utils/containers';
import { formatTime } from '../../utils/helpers';
import { NavWrapper, Label, Rounds } from '../../utils/containers';
import DisplayRounds from './DisplayRounds';

const Navigation = () => {
  const {
    state,
    sum,
    queue,
    timeElapsed
  } = useContext(TimerContext);
  
  const StopButtons = () => {
    if (queue[0].title === 'Stopwatch' && state.isRunning) {
      return (
        <>
          <Button type='done' />
          <Button type='lap' />
        </>
      );
    } else {
      return '';
    }
  }
  
  //Was Originally going to do Total Time Left, but I wasn't sure how to calculate it with the stopwatch
  const Nav = () => {
    if (queue.length >= 1) {
      return (
        <>
          <NavWrapper>
            <Panel>
              <FlexBetween>
                <div>
                  <Label>Total Time Elapsed:</Label>
                  <Rounds>{formatTime(Math.abs(timeElapsed))}</Rounds>
                </div>
                <Button type={state.isRunning ? 'stop' : 'start'} />
                <StopButtons />
                <Button type='reset' />
                <Button type='skip' />
              </FlexBetween>
              <DisplayRounds />
            </Panel>
          </NavWrapper>
        </>
      );
    } else {
      return '';
    }
  }
  return (
      <Nav />
    );
}

export default Navigation;