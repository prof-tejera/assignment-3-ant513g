import React, { useContext } from "react";
import styled from "styled-components";
import { TimerContext } from "../context/TimerProvider";
import Navigation from "../components/generic/Navigation";
import Stopwatch from "../components/timers/Stopwatch";
import { FlexCenter, Section, Container } from "../utils/containers";

import {
  // BrowserRouter as
  //   Router,
  // Routes,
  // Route,
  Link,
  // useParams
} from 'react-router-dom';
// import { useHistory } from "react-router";

import Button from "../components/generic/Button";

const TimerWrapper = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.3rem;
  text-align: center;
`;
const NavWrapper = styled.div`
  position:fixed;
  bottom: 0;
  width: 100%;
`;
const Div = styled.div`
margin-bottom: 100px;
`;

const Timer = () => {
  const {
    queue,
    timers
  } = useContext(TimerContext);
 
  return (
    <React.Fragment>
      <Div>
        <Section>
          <Container>
            <h1>Create a New Workout!</h1>
          </Container>
          <br />
          <Container>
            <Link to="/add">
              <Button type='begin' />
            </Link>
          </Container>
        </Section>
          {queue.map((timer, index)=> (
            <TimerWrapper key={timer.id}>
              <h2>{timer.id}{timer.title}</h2>
                {timer.timer}
              <Button onClick={() => {
                queue.splice(index, 1);
              }}>Remove</Button>
            </TimerWrapper>
          ))}
        <NavWrapper>
          <Navigation />
        </NavWrapper>
      </Div>
    </React.Fragment>
  );
};

export default Timer;

