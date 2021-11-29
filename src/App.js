import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import TimerProvider from "./context/TimerProvider";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

const Container = styled.div`
  background-image: linear-gradient(to right, #5850CE, #4037C4, #342D9F);
  height: 100vh;
  overflow: auto;
  color: white;
  font-family: 'Inconsolata', monospace;
`;

const StyledLi = styled.li`
  color: white;
  font-family: 'Inconsolata', monospace;
  font-size: 30px;
`;


function App() {
  return (
    <TimerProvider>
      <Container>
        <Router>
          <nav>
            <ul>
              <StyledLi >
                <Link to="/">Timers</Link>
              </StyledLi >
              <StyledLi >
              <Link to="/docs">Documentation</Link>
              </StyledLi >
            </ul>
          </nav>
          <Switch>
            <Route path="/docs">
            <DocumentationView />
            </Route>
            <Route path="/">
            <TimersView/>
            </Route>
          </Switch>
        </Router>
        </Container>
      </TimerProvider>    
  );
}

export default App;
