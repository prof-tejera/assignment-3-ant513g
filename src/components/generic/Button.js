import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';
import Colors from '../../theme/Colors';
import Typography from '../../theme/Typography';
import PropTypes from 'prop-types';

const size  = {
  small: 10,
  medium: 42,
  large: 54,
};


const ButtonBase = styled.button `
  display: inline;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  margin: 0.5rem auto;
  padding: 1rem 2rem;
  width: auto;
  height: ${(props) => props.size}px;
  min-width: ${(props) => props.size}px;
  border-radius: 8px;
  
  overflow: auto;
  border: none;
  font-size: ${Typography.default};
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
    font-weight: ${Typography.bold};
    box-shadow: ${Colors.pressed};
  }
`;

const ButtonSelected = styled(ButtonBase)`
  background-color: ${Colors.oceanblue400};
  box-shadow: inset 1px 1px 5px ${Colors.oceanblue500};
  font-weight: ${Typography.bold};
`;

const ButtonInactive = styled(ButtonBase)`
  background-color: ${Colors.oceanblue600};
  box-shadow: inset 1px 1px 5px ${Colors.oceanblue700};
  font-weight: ${Typography.bold};
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

const ButtonDone = styled(ButtonStop)`
  background: ${Colors.orange500};
  box-shadow: inset 2px 2px 5px ${Colors.orange400};
  &:hover {
    background-color: ${Colors.orange600};
    box-shadow: inset 2px 2px 5px ${Colors.orange500};
  }
  &:active {
    background-color: ${Colors.orange700};
    box-shadow: ${Colors.pressed};
  }
`;

const ButtonArrow = styled(ButtonBase)`
  padding: 0.25rem 0.5rem; 
  line-height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  min-width: ${(props) => props.size}px;
  height: auto;
  font-size: 12px;
  margin: auto;
`;

const ButtonAdd = styled(ButtonBase)`
  background-color: ${Colors.oceanblue700};
`;

const ButtonBegin = styled(ButtonBase)`
  background-color: ${Colors.oceanblue700};
  border-radius: 50%;
  line-height: normal;
  font-weight: ${Typography.bold};
  font-size: 16px;
  width: 160px;
  height:  160px;
  display: inline;
  vertical-align: center;
  border: solid 2px ${Colors.oceanblue300};
  box-shadow: 0 0 0 8px ${Colors.oceanblue700};
  margin: auto;
  padding: 0;
  
  &:hover {
    padding: 2.15rem;
    font-size: 18px;
    background-color: ${Colors.oceanblue600};
    box-shadow: 0 0 0 8px ${Colors.oceanblue700};
    box-shadow: inset 2px 2px 5px ${Colors.oceanblue500};
    transition: .5s ease;
  }
`;

const ButtonRemove = styled(ButtonBase)`
  background: ${Colors.surfaceDark};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  padding: 0;
  font-size: 24px;
  line-height: normal;
  position: absolute;
  top: 8px;
  right: 8px;
  min-width: ${(props) => props.size}px;
  box-shadow: inset 2px 2px 5px ${Colors.surfaceDark};
  margin: 0;

  &:hover {
    background-color: ${Colors.gray500};
    box-shadow: 0 0 0 8px ${Colors.oceanblue500};
    box-shadow: inset 2px 2px 5px ${Colors.surfaceDark};
    transition: .5s ease;
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
    queue,
  } = useContext(TimerContext);

  switch (type) {
    default:
      return (
        <ButtonBase size={size}
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
      case 'done':
        return (
          <ButtonDone
            {...buttonProps}
            onClick={() => {
              setState({type: 'done'})
            }}>
            Done
          </ButtonDone>
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
          {...buttonProps}>
          Add to Queue
        </ButtonAdd>
      );
      case 'remove':
        return (
          <ButtonRemove size='medium'
            {...buttonProps}
          >
            &#x02A2F;
          </ButtonRemove>
        );
    case 'begin': 
    return (
      <ButtonBegin
        {...buttonProps}
      > {queue.length === 0 ? 'Begin' : 'Add More'}
      </ButtonBegin>
    );
    case 'arrowUp':
      return (
        <ButtonArrow size='small'
          {...buttonProps}
          onClick={incrementRounds}>
          &#9650;
        </ButtonArrow>
      );
    case 'arrowDown':
      return (
        <ButtonArrow size='small'
          {...buttonProps}
          onClick={decrementRounds}>
          &#9660;
        </ButtonArrow>
      );
    
  }
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
};

Button.defaultProps = {
  type: 'default',
  size: 'large'
};

export default Button;