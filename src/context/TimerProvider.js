import React, { useReducer, useState, createContext, useEffect } from 'react';
import useSound from 'use-sound';
import singleBeep from '../audio/singleBeep.mp3';
import done from '../audio/done.mp3';
import convertToMs from '../utils/helpers';
import { totalTimeXY, totalTimeTabata } from '../utils/helpers';
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";


export const TimerContext = createContext({});

const routes = {
    HOME: '/',
    ADD: '/add',
    DOCS: '/docs',
};

const TimerProvider = ({ children }) => {
   
    
    const [play] = useSound(singleBeep);
    const [doneStop] = useSound(done);

    const initialState = {
        isRunning: false,
        time: 0,
        rounds: 1,
    };
    

    function StateReducer(state, action) {
        switch (action.type) {
            case 'start':
                return { ...state, isRunning: true };
            case 'stop':
                return { ...state, isRunning: false };
            case 'reset':
                return {
                    isRunning: false,
                    time: 0,
                    rounds: 1,
                };
            case 'lap': {
                return { time: state.time + 1 }
            }
            case 'fastForward': {
                if (state.rounds <= 1) {
                    return { ...state, isRunning: true, rounds: 1 }
                } else {
                    return { ...state, isRunning: true, rounds: state.rounds - 1 };
                }
            }
            
            case 'countUp':
                return { ...state, time: state.time + 1, currentRound: state.currentRound };
            case 'countDown':
                return { ...state, time: state.time - 1, currentRound: state.currentRound };
            case 'incrementRounds':
                return { ...state, rounds: state.rounds + 1 };
            case 'decrementRounds':
                if (state.rounds <= 1) {
                    return { ...state, rounds: 1 }
                } else {
                    return { ...state, rounds: state.rounds - 1 };
                }
            default:
                throw new Error();
        }
    }
        
   

    // function timerState() {
    //     if (timer.selected) {
    //         set
    //     }
    // }

   
    // useEffect(() => {
        
    //   }, );


    // if (timer.selected == isRunning ) {
    //     if(timer.selected == done) {
    //          }   remove from queue,
    // }
    // when queue == 0 and timer.done
    // {
    //     workout == done.
    // }

    const [state, setState] = useReducer(StateReducer, initialState);
    
    const {
        isRunning,
        isFinished,
        inQueue,
        rounds,
    } = state;

    const [selected, setSelected] = useState({ Stopwatch: true, Countdown: false, XY: false, Tabata: false });
    
    const [totalTime, setTotalTime] = React.useState(0);
    const [time, setTime] = useState(0);

    const [hh, setHH] = React.useState(0);
    const [mm, setMM] = React.useState(0);
    const [ss, setSS] = React.useState(0);
    const [restMM, setRestMM] = useState(0);
    const [restSS, setRestSS] = useState(0);
  
    const [roundTime, setRoundTime] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [currentRound, setCurrentRound] = useState(1);
    const [resting, setResting] = useState(false);

    const [myQueue, setQueue] = useState([]);

    const [count, setCount] = useState(0);
    const [laps, setLaps] = useState([]);
    const [currentLap, setCurrentLap] = useState(0);
    const [sets, setSets] = useState(0);
   
    const [value, setValue] = useState(0);
  
    let getMs = Number(convertToMs(hh, mm, ss));
    let getRestMs = Number(convertToMs(0, mm, ss));

    const totalXY = parseInt(totalTimeXY(hh, mm, ss, state.rounds));
    const totalTabata = parseInt(totalTimeTabata(hh, mm, ss, restMM, restSS, state.rounds));

    function incrementRounds() {
        setState({ type: 'incrementRounds' });
    }
    function decrementRounds() {
        setState({ type: 'decrementRounds' });
    }

    function countUp() {
        setTime(time + 1);
        // setState({ type: 'countUp' });
        return time;
    }

    function countDown() {
        setTime(time - 1);
        // setState({ type: 'countDown' });
        return Number(time);
    }
    
    function timerDone() {
        doneStop();
        countReset();
    }

    function roundDone() {
        play();
    }

  
    function countReset() {
        setState({ type: 'reset' });
        setTime(0);
        setSS(0);
        setMM(0);
        setHH(0);
        setRestSS(0);
        setRestMM(0);
        setCurrentRound(1);
        setTotalTime(0);
        laps.splice(0, laps.length + 1);
   }
    
    function fastForward() {
        if (selected.XY) {
            if (totalTime < 1) {
                countReset();
                timerDone();
                setState({ type: 'stop' });
            } else {
                setState({ type: 'fastForward' });
                setTotalTime(totalTime - roundTime);
                setTime(roundTime - 1);
            }
        } else {
            if (totalTime < 1) {
                countReset();
                timerDone();
                setState({ type: 'stop' });
            } else {
                setState({ type: 'fastForward' });
                setTotalTime(totalTime - roundTime - restTime);
                setTime(roundTime - 1);
                setResting(false);
            }
        } 
    }

    const queue = [];

    const timers =
    {
        stopwatch: {
            title: 'Stopwatch',
            timer: <Stopwatch></Stopwatch>

        },
        countdown: {
            title: 'Countdown',
            timer: <Countdown></Countdown>
        },
        xy: {
            title: 'XY',
            timer: <XY></XY>
        },
        tabata: {
            title: 'Tabata',
            timer: <Tabata></Tabata>
        }
    };


    return (
        <TimerContext.Provider
            value={{
                myQueue,
                setQueue,
                timers,
                queue,
                selected,
                setSelected,
                count,
                setCount,
                initialState,
                totalXY,
                totalTabata,
                laps,
                setLaps,
                sets,
                setSets,
                rounds,
                currentRound,
                setCurrentRound,
                incrementRounds,
                decrementRounds,
                isRunning,
                state,
                setState,
                time,
                setTime,
                setTotalTime,
                totalTime,
                value,
                setValue,
                ss, setSS,
                mm, setMM,
                hh,setHH,
                restSS, setRestSS,
                restMM, setRestMM,
                countReset,
                fastForward,
                countUp,
                countDown,
                timerDone,
                play,
                doneStop,
                roundDone,
                getMs,
                getRestMs,
                roundTime,
                setRoundTime,
                restTime,
                setRestTime,
                currentLap,
                setCurrentLap,
                resting,
                setResting,
                
            }}
        >
            
            {children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;