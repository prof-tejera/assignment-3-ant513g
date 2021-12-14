import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';
import Button from './Button';
import { FlexBetween, Panel } from '../../utils/containers';
import { formatTime } from '../../utils/helpers';
import { Section, Label, Rounds } from '../../utils/containers';

const Navigation = () => {
    const {
        time,
        setTime,
        state,
        countDown,
        getMs,
        timerDone,
        totalTime,
      } = useContext(TimerContext);
    return (
        <Panel>
          
            
            <FlexBetween>
            <div>
                <Label>Total Time Left:</Label>
                <Rounds>{formatTime(totalTime)}</Rounds>
                </div>
                <Button type={state.isRunning ? 'stop' : 'start'} />
                <Button type='reset' />
                <Button type='lap' />
                <Button type='skip' />
               
            </FlexBetween>
        </Panel>
    );

}

export default Navigation;