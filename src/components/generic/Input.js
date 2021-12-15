import React, { useContext, useRef, useEffect } from 'react';
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
    setState,
  } = useContext(TimerContext);
 
  // function options() {
  //   var arrOptions = [];

  //   for (let i = 0; i <= 59; i++) {
  //     if (i < 10) {
  //       i = `0${i}`;
  //       arrOptions.push(<Option key={i} value={i}>{i}</Option>);
  //     } else {
  //       arrOptions.push(<Option key={i} value={i}>{i}</Option>);
  //     }
  //   }
  //   return arrOptions; 
  // }

  // const selectRef = useRef();
  //   useEffect(() => {
  //     selectRef.current.focus();
  //   }, []);


  switch (value) {
    default:
      return (
        <BoxContainer>
          <Label
            HTMLfor={name}
            value={value}>
            {name}
          </Label>
      
        <Number
            type='number'
            // ref={selectRef} 
            name={name}
            value={mm}
            onChange={(e) => setMM(e.target.value)}
            id="options"
            min="0" max="59" />
           
   

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
          <Number
            type='number'
            // ref={selectRef} 
            name='Hours'
            min="0" max="59" 
            onChange={(e) => {
              setHH(e.target.value);
              // setState((prevState) => ({ ...prevState, [name]: value }));
            
            }}
            value={hh}
            id='options' />
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
          <Number
            // ref={selectRef} 
            type='number'
            name='Minutes'
            min="0" max="59" 
            onChange={(e) => setMM(e.target.value)}
            value={mm}
            id="options" />
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
          <Number
            type='number'
            min="0" max="59" 
            // ref={selectRef} 
            name='Seconds'
            onChange={(e) => setSS(e.target.value)}
            value={ss}
            id="options" />
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
            min="0" max="59" 
            // ref={selectRef} 
            name='RestMinutes'
            onChange={(e) => setRestMM(e.target.value)}
            value={restMM}
            id="options" />
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
            min="0" max="59" 
            // ref={selectRef} 
            name='RestSeconds'
            onChange={(e) => setRestSS(e.target.value)}
            value={restSS}
            id="options" />
        </ BoxContainer>
      );
  }
  

}

export default Input;

