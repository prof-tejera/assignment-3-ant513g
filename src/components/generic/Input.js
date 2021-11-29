import React from "react";
import styled from 'styled-components';

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
        id="options"
        >
        {options()}
      </Select>
    </ BoxContainer>
  );
}

export default Input;

