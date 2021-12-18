import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';

const BoxContainer = styled.div `
  text-align: center;
  margin: auto;
  padding: 1rem;
  overflow: auto;
  box-sizing: border-box;
  border: none;
  display: block;
  font-size: 16px;
  vertical-align: baseline;
  cursor: pointer; 
`;
  
const Number = styled.input`
  width: 64px;
  height: 40px;
  display: block;
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  font-height: 24px;
  font-weight: 500;
  color: #f2f2f2;
  background-color: #4A4A55;
  border: none;
  text-align: center;
  padding: 0px;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer; 
`;

const Label = styled.label`
  font-family: 'Courier Prime', monospace;
  font-size: 16px;
  color: white;
  border: none;
  text-align: center;
  margin: auto;
  text-align: center;
`;

export const Input = (props) => {

  const { value } = props;
  
  const {
    restSS,
    setRestSS,
    restMM,
    setRestMM,
    timeVal,
    setTimeVal
  } = useContext(TimerContext);

  switch (value) {
    case 'hh':
      return (
        <BoxContainer>
          <Label
            HTMLfor='Hours'
            value={timeVal.hh}>
            Hours
          </Label>
          <Number
            type='number'
            name='Hours'
            min='0' max='59'
            onChange={(e) => {
              setTimeVal({ ...timeVal, hh: e.target.value });
            }}
            value={timeVal.hh}
            id='options' />
        </BoxContainer>
      );
    case 'mm':
      return (
        <BoxContainer>
          <Label
            HTMLfor='Minutes'
            value={timeVal.mm}>
            Minutes
          </Label>
          <Number
            type='number'
            name='Minutes'
            min='0' max='59' 
            onChange={(e) => {
              setTimeVal({ ...timeVal, mm: e.target.value });
             }}
            value={timeVal.mm}
            id='options' />
        </ BoxContainer>
      );
    case 'ss':
      return (
        <BoxContainer>
          <Label
            HTMLfor='Seconds'
            value={timeVal.ss}>
            Seconds
          </Label>
          <Number
            type='number'
            min='0' max='59' 
            name='Seconds'
            onChange={(e) => {
              setTimeVal({ ...timeVal, ss: e.target.value });
              }}
            value={timeVal.ss}
            id='options' />
        </ BoxContainer>
      );
    case 'restMM':
      return (
        <BoxContainer>
          <Label
            HTMLfor='RestMinutes'
            value={restMM}>
            Minutes
          </Label>
          <Number
            type='number'
            min='0' max='59' 
            name='RestMinutes'
            onChange={(e) => setRestMM(e.target.value)}
            value={restMM}
            id='options' />
        </ BoxContainer>
      );
    case 'restSS':
      return (
        <BoxContainer>
          <Label
            HTMLfor='RestSeconds'
            value={restSS}>
            Seconds
          </Label>
          <Number
            type='number'
            min='0' max='59' 
            name='RestSeconds'
            onChange={(e) => setRestSS(e.target.value)}
            value={restSS}
            id='options' />
        </ BoxContainer>
      );
  }
}

Input.defaultProps = {
  type: 'number',
};

export default Input;

