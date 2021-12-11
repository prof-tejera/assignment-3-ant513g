import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';

const ButtonBase = styled.button `
  display: inline-flex;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  margin: auto;
  padding: 0.25rem 1rem; 
  line-height: 40px;
  border-radius: 8px;
  box-sizing: border-box;
  width: auto;
  min-width: 40px;
  height: auto;
  overflow: auto;
  border: none;
  font-size: 16px;
  color: white;
  background-color: #4037C4;
  box-shadow: inset 2px 2px 5px #5850CE;
  filter: drop-shadow(2px 2px 3px #333333);
  cursor: pointer;
  &:hover {
    background-color: #342D9F;
    box-shadow: inset 1px 1px 5px #4037C4;
  }
  &:active {
    background-color: #342D9F;
    font-weight: 600;
    box-shadow: inset 1px 1px 5px #25253C;
  }
`;

const ButtonSelected = styled(ButtonBase)`
  background-color: #342D9F;
  box-shadow: inset 1px 1px 5px #4037C4;
  font-weight: 600;
  filter: drop-shadow(2px 2px 3px #333333);
`;

const ButtonStart = styled(ButtonBase)`
  background: #057C48;
  box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #25A76F')};
  &:hover {
    background-color: #046239;
    box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #057C48')};
  }
  &:active {
    background-color: #046239;
    box-shadow: inset 1px 1px 5px #25253C;
  }
`;

const ButtonStop = styled(ButtonBase)`
  background: #AD0A0F;
  box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #DD2C32')};
  &:hover {
    background-color: #87080C;
    box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #AD0A0F')};
  }
  &:active {
    background-color: #87080C;
    box-shadow: inset 1px 1px 5px #25253C;
  }
`;

const ButtonArrow = styled(ButtonBase)`
  padding: 0.25rem 0.5rem; 
  line-height: 20px;
  width: auto;
  min-width: 20px;
  height: auto;
  font-size: 12px;
`;

const Button = (props) => {
  const { children, type, ...buttonProps } = props;

  const {
    time,
    state,
    setState,
    laps,
    setLaps,
    countReset,
    fastForward,
    decrementRounds,
    incrementRounds,
  } = useContext(TimerContext);

  switch (type) {
    default:
      return (
        <ButtonBase
          {...buttonProps}>
          {children}
        </ButtonBase>
      );
    case 'start':
      return (
        <ButtonStart
          {...buttonProps}
          onClick={() => {
            setState({
              type: state.isRunning ? 'stop' : 'start'
            })
          }}>
          Start
        </ButtonStart>
      );
    case 'stop':
      return (
        <ButtonStop
          {...buttonProps}
          onClick={() => {
            setState({
              type: state.isRunning ? 'stop' : 'start'
            })
          }}>
          Stop
        </ButtonStop>
      );
    case 'lap':
      return (
        <ButtonBase
          {...buttonProps}
          onClick={() => {
            if (state.isRunning) {
              setLaps([...laps, time]);
            }
          }}>
          Lap
          </ButtonBase>
      );
    case 'reset':
      return (
        <ButtonBase
          {...buttonProps}
          onClick={countReset}
        >
          Reset
        </ButtonBase>
      );
    case 'skip':
      return (
        <ButtonBase
          {...buttonProps}
          onClick={fastForward}
        >
          Skip
        </ButtonBase>
      );
    case 'active':
      return (
        <ButtonSelected
          {...buttonProps}>
            {children}
        </ButtonSelected>
      );
    case 'arrowUp':
      return (
        <ButtonArrow
          {...buttonProps}
          onClick={incrementRounds}>
          &#9650;
        </ButtonArrow>
      );
    case 'arrowDown':
      return (
        <ButtonArrow
          {...buttonProps}
          onClick={decrementRounds}>
          &#9660;
        </ButtonArrow>
      );
  }
};

Button.defaultProps = {
  type: "default",
  pressed: false,
};

export default Button;