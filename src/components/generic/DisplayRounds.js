import React, { createContext, useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';
import { formatTime } from '../../utils/helpers';

const Label = styled.span`
  font-size: 18px;
  margin-right: 1rem;
`;

const Li = styled.li`
  font-size: 18px;
  font-family: 'Inconsolata', monospace;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
`;

const HR = styled.hr`
  border: 0;
  height: 1px;
  background: #25253C;
  background-image: linear-gradient(to right, #342D9F, #4037C4, #342D9F);
`;

const ListUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1rem 0 0 0;
`;

export const DisplayContext = createContext();

const DisplayRounds = () => {

  const {
    laps,
  } = useContext(TimerContext);
  
  return (
    <>
      <ListUl> {laps.map((lapTime, index) => {
        const lapNumber = index + 1;
        return (
          <>
            <Li key={index}>
                <Label>Lap {lapNumber}:</Label>
              <span>{formatTime(parseFloat(lapTime - laps[index - 1] ? laps[index - 1] : 0))}
                </span>
            </Li>
            <HR />
          </>
        );})}
      </ListUl>
    </>
  );
};

export default DisplayRounds;