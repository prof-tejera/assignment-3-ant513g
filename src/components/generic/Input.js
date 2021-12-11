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
  
const Select = styled.select`
  width: 50px;
  display: block;
  font-family: 'Inconsolata', monospace;
  font-size: 16px;
  color: #f2f2f2;
  background-color: #4A4A55;
  border: none;
  text-align: center;
  font-weight: 500;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer; 
`;

const Option = styled.option`
&:hover {
  font-weight: 700;
  background-color: #4037C4;
}
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

  const { onChange, value, name } = props;
  
  const {
    ss,
    setSS,
    mm,
    setMM,
    hh,
    setHH,
    restSS,
    setRestSS,
    restMM,
    setRestMM,
  } = useContext(TimerContext);
 
  function options() {
    var arrOptions = [];

    for (let i = 0; i <= 59; i++) {
      if (i < 10) {
        i = `0${i}`;
        arrOptions.push(<Option key={i} value={i}>{i}</Option>);
      } else {
        arrOptions.push(<Option key={i} value={i}>{i}</Option>);
      }
    }
    return arrOptions; 
  }

  switch (value) {
    default:
      return (
        <BoxContainer>
          <Label
            HTMLfor={name}
            value={value}>
            {name}
          </Label>
          <Select
            name={name}
            size="5"
            onChange={onChange}
            value={value}
            id="options">
            {options()}
          </Select>
        </ BoxContainer>
      );
    case 'hh':
      return (
        <BoxContainer>
          <Label
            HTMLfor='Hours'
            value={hh}>
            Hours
          </Label>
          <Select
            name='Hours'
            size='5'
            onChange={(e) => setHH(e.target.value)}
            value={hh}
            id='options'>
            {options()}
          </Select>
        </BoxContainer>
      );
    case 'mm':
      return (
        <BoxContainer>
          <Label
            HTMLfor='Minutes'
            value={mm}>
            Minutes
          </Label>
          <Select
            name='Minutes'
            size="5"
            onChange={(e) => setMM(e.target.value)}
            value={mm}
            id="options">
            {options()}
          </Select>
        </ BoxContainer>
      );
    case 'ss':
      return (
        <BoxContainer>
          <Label
            HTMLfor='Seconds'
            value={ss}>
            Seconds
          </Label>
          <Select
            name='Seconds'
            size="5"
            onChange={(e) => setSS(e.target.value)}
            value={ss}
            id="options">
            {options()}
          </Select>
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
          <Select
            name='RestMinutes'
            size="5"
            onChange={(e) => setRestMM(e.target.value)}
            value={restMM}
            id="options">
            {options()}
          </Select>
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
          <Select
            name='RestSeconds'
            size="5"
            onChange={(e) => setRestSS(e.target.value)}
            value={restSS}
            id="options">
            {options()}
          </Select>
        </ BoxContainer>
      );
  }
  
  // return (
  //   <BoxContainer>
  //     <Label
  //       HTMLfor={name}
  //       value={value}>
  //       {name}
  //     </Label>
  //     <Select
  //       name={name}
  //       size="5"
  //       onChange={onChange}
  //       value={value}
  //       id="options"
  //       >
  //       {options()}
  //     </Select>
  //   </ BoxContainer>
  // );
}

export default Input;

