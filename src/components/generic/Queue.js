import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerProvider';
import Button from './Button';
import { Section, QueueCard, QueueSurface, FlexBetween } from '../../utils/containers';
import { formatTime } from '../../utils/helpers';

const Queue = () => {
    const {
        queue,
        removeItem,
    } = useContext(TimerContext);
    
    return (
        <Section>
            <QueueSurface>
                <h2>{queue.length > 1 ? 'Queue:' : ''}</h2>
                {queue.map((timer, index) => (
                    <QueueCard key={index}>
                        <FlexBetween>
                            <span>
                                {index === 0 ? 'Current' : index}
                            </span>
                            <span>
                                {timer.title}
                            </span>
                            <span>
                                Total Time: {formatTime(timer.totalTime)}
                            </span>
                            {timer.rounds ? <span>Rounds: {timer.rounds}</span> : null}
                        </FlexBetween>
                        <Section>
                            <Button
                                type='remove'
                                onClick={() => {
                                    removeItem(index);
                                }} />
                        </Section>
                    </QueueCard>
                ))}
            </QueueSurface>
        </Section>
    );
}

export default Queue;