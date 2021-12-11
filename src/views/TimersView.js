import React, { useContext } from "react";
import styled from "styled-components";
import { TimerContext } from "../context/TimerProvider";
import Navigation from "../components/generic/Navigation";
import Stopwatch from "../components/timers/Stopwatch";
import { FlexCenter } from "../utils/containers";

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

const Timer = () => {
  const {
    timers,
  } = useContext(TimerContext);

  return (
    <React.Fragment>
      <div>
        <FlexCenter>
          <Link to="/add">
            <Button onClick={() => console.log(timers)}>Add</Button>
          </Link>
        </FlexCenter>
        <Stopwatch />
        {timers.map(timer => (
          <TimerWrapper key={timer.id}>
            {timer}
          </TimerWrapper>
        ))}
      </div>
      <NavWrapper>
        <Navigation />
      </NavWrapper>
      </React.Fragment>
  );
};

export default Timer;

