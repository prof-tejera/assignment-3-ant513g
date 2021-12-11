import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import styled from "styled-components";
import TimerProvider from "./context/TimerProvider";
import DocumentationView from "./views/DocumentationView";
import Timer from "./views/TimersView";
import AddView from "./views/AddView";
import { FlexBetween } from "./utils/containers";

const Container = styled.div`
  background-image: linear-gradient(to right, #5850CE, #4037C4, #342D9F);
  height: 100vh;
  overflow: auto;
  color: white;
  font-family: 'Inconsolata', monospace;
`;

const StyledLi = styled.li`
  display: inline-flex;
  margin: 16px;
`;

const StyledLink = styled(Link)`
  padding: 8px;
  color: white;
 
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledUl = styled.ul`
  padding-left: 0;
  margin: auto;
`;

const Nav = styled.nav`
  height: auto;
  width: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #342D9F;
  transition: .5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

function App() {
  return (
    <TimerProvider>
      <Container>
        <Router>
          <Nav>
            <FlexBetween>
              <StyledUl>
                <StyledLi >
                  <StyledLink to="/">Home</StyledLink>
                </StyledLi >
                <StyledLi >
                  <StyledLink to='/docs'>Documentation</StyledLink>
                </StyledLi >
                {/* <StyledLi >
                  <StyledLink to="/add">Add</StyledLink>
                </StyledLi > */}
              </StyledUl>
            </FlexBetween>
          </Nav>
          <Routes>
            <Route path="/" element={<Timer/>} />
            <Route path='/docs' element={<DocumentationView />} />
            <Route path="/add" element={<AddView />} />
          </Routes>
        </Router>
        </Container>
      </TimerProvider>    
  );
}

export default App;
