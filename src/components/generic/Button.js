import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';
import Styles from './Styles';
import Colors from '../../theme/Colors';

const ButtonBase = styled.button `
  display: inline-flex;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  margin: auto;
  padding: 0.25rem 1rem;
  width: auto;
  height: auto;
  min-width: 40px;
  line-height: 40px;
  border-radius: 8px;
  
  overflow: auto;
  border: none;
  font-size: 16px;
  color: ${Colors.white};
  background-color: ${Colors.oceanblue500};
  box-shadow: inset 2px 2px 5px ${Colors.oceanblue400};
  filter: ${Colors.shadow};
  cursor: pointer;
  &:hover {
    background-color: ${Colors.oceanblue600};
    box-shadow: inset 2px 2px 5px ${Colors.oceanblue500};
  }
  &:active {
    background-color: ${Colors.oceanblue600};
    font-weight: 600;
    box-shadow: ${Colors.pressed};
  }
`;



const ButtonSelected = styled(ButtonBase)`
  background-color: ${Colors.oceanblue400};
  box-shadow: inset 1px 1px 5px ${Colors.oceanblue500};
  font-weight: 600;
`;

const ButtonInactive = styled(ButtonBase)`
  background-color: ${Colors.oceanblue600};
  box-shadow: inset 1px 1px 5px ${Colors.oceanblue700};
  font-weight: 600;
  &:hover {
    background-color: ${Colors.oceanblue700};
    box-shadow: inset 2px 2px 5px ${Colors.oceanblue600};
  }
`;


const ButtonStart = styled(ButtonBase)`
  background: ${Colors.springgreen500};
  box-shadow: inset 2px 2px 5px ${Colors.springgreen400};
    &:hover {
      background-color: ${Colors.springgreen600};
      box-shadow: inset 3px 3px 5px ${Colors.springgreen500};
    }
    &:active {
      background-color: ${Colors.springgreen600};
      box-shadow: ${Colors.pressed};
    }
`;

const ButtonStop = styled(ButtonBase)`
  background: ${Colors.carnelian500};
  box-shadow: inset 2px 2px 5px ${Colors.carnelian400};
  &:hover {
    background-color: ${Colors.carnelian600};
    box-shadow: inset 2px 2px 5px ${Colors.carnelian500};
  }
  &:active {
    background-color: ${Colors.carnelian600};
    box-shadow: ${Colors.pressed};
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

const ButtonAdd = styled(ButtonBase)`
  background-color: ${Colors.oceanblue700};
`;
const ButtonBegin = styled(ButtonBase)`
  background-color: ${Colors.oceanblue700};
  border-radius: 50%;
  font-weight: 600;
  width: 120px;
  height: 120px;
  padding: 2.25rem;
 
  border: solid 2px #6760D2;
  box-shadow: 0 0 0 8px #2F288F;

  &:hover {
    background-color: ${Colors.oceanblue600};
    box-shadow: 0 0 0 8px #2F288F;
    box-shadow: inset 2px 2px 5px ${Colors.oceanblue500};
    transition:.5s ease;
  }
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
    selected,
    queue,
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
    case 'selected':
      return (
        <ButtonSelected
          {...buttonProps}>
            {children}
        </ButtonSelected>
      );
      case 'inactive':
        return (
          <ButtonInactive
            {...buttonProps}>
              {children}
          </ButtonInactive>
        );
      
    case 'add':
      return (
        <ButtonAdd
          {...buttonProps}
        >
          Add to Queue
        </ButtonAdd>
      );
    case 'begin':
    return (
      <ButtonBegin
        {...buttonProps}
      >
       Begin
      </ButtonBegin>
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