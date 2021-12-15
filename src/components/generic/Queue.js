import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { TimerContext } from "../../context/TimerProvider";
import { Section } from "../../utils/containers";
import Button from "./Button";



const TimerWrapper = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.3rem;
  text-align: center;
`;


const Queue = () => {

    const {
        queue,
        setQueue,
        timers,
        removeItem,
        time
    } = useContext(TimerContext);
    
   
    return (
        <>
            {queue.map((timer, index) => (
                <TimerWrapper key={index.id, timer.id}>
                    <h1 key={index.id, timer.id}>{index} - {timer.title}</h1>
                
                    
                    {timer.timer}
                    
                    <Section>
                    <Button
                        key={index.id, timer.id}
                        onClick={() => {
                            removeItem(index);
                            console.log(queue);
                        }}>Remove</Button>
                        </Section>
                </TimerWrapper>
            ))}
        </>
    );
}
export default Queue;