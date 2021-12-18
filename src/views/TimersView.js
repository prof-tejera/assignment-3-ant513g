import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';
import Navigation from '../components/generic/Navigation';
import { Section, Container, Label } from '../utils/containers';
import { Panel, LargeText } from '../utils/containers';
import DisplayTime from '../components/generic/DisplayTime';
import { Link } from 'react-router-dom';
import Button from '../components/generic/Button';
import Queue from '../components/generic/Queue';

const Timer = () => {
  const {
    queue,
    state,
    currentRound,
    TimeDisplay,
    resting,
  } = useContext(TimerContext);
 
  const Rounds = () => {
    if (queue.length > 0 && queue[0].rounds) {
      return (
        <>
          Round: {currentRound}/{queue[0].rounds}
        </>
      );
    } else {
      return (null);
    }
  }
  const Resting = () => {
    if(queue.length > 0 && queue[0].title === 'Tabata') {
       return (
      <>
        <Label> Time Left in { resting ? 'Rest' : 'Round'}:</Label>
      </>
    );
    }else {
      return (null);
    }
  }
  
  const BeginWorkout = () => {
    if (!state.isRunning) {
      return (
        <>
          <Container>
           {queue.length < 1 ? <h1>Create a New Workout!</h1> : ''}
          </Container>
          <br />
          <Container> 
              <Link to='/add'>
                <Button type='begin' />
              </Link>
          </Container>
        </>
      );
    } else {
      return (
        <>
          {null}
        </>
      );
    }
  }
  
  return (
    <React.Fragment>
      <Section>
        <Panel>
          <DisplayTime>
            <Section>
            <Rounds />
              <Section>
                <LargeText>
                <Resting />
                <TimeDisplay />
                </LargeText>
              </Section>
            </Section>
          </DisplayTime>
        </Panel>
        <Section>
          <BeginWorkout />
        </Section>
        <Queue />
        <Navigation />
      </Section>
    </React.Fragment>
  );
};

export default Timer;

