import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimerContext } from '../../context/TimerProvider';
import Button from './Button';
import { FlexBetween, Panel } from '../../utils/containers';

const Navigation = () => {
    const {
        time,
        setTime,
        state,
        countDown,
        getMs,
        timerDone,
      } = useContext(TimerContext);
    return (
        <Panel>
            <FlexBetween>
                <Button type={state.isRunning ? 'stop' : 'start'} />
                <Button type='reset' />
                <Button type='lap' />
                <Button type='skip' />
            </FlexBetween>
        </Panel>
    );

}

export default Navigation;