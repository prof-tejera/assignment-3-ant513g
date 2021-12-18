import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';
import { formatTime } from '../../utils/helpers';
import { HR, Li, ListUl } from '../../utils/containers';

const Label = styled.span`
  font-size: 18px;
  margin-right: 1rem;
`;

const DisplayRounds = () => {

  const {
    laps,
  } = useContext(TimerContext);
  
  return (
    <>
      <ListUl> {laps.map((lapTime, index) => {
        const lapNumber = 1 + index;
        return (
          <>
            <Li key={lapTime.id}{...index.id}>
                <Label>Lap {lapNumber}:</Label>
              <span>{formatTime(parseFloat(lapTime - laps[index - 1] ? laps[index - 1] : laps[0]))}
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