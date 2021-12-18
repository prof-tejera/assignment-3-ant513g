import React, { useReducer, useState, createContext, useEffect } from 'react';
import useSound from 'use-sound';
import singleBeep from '../audio/singleBeep.mp3';
import done from '../audio/done.mp3';
import convertToMs from '../utils/helpers';
import { totalTimeXY, totalTimeTabata } from '../utils/helpers';
import { formatTime } from '../utils/helpers';
import useInterval from '../hooks/hooks';
import Stopwatch from '../components/timers/Stopwatch';
import Countdown from '../components/timers/Countdown';
import XY from '../components/timers/XY';
import Tabata from '../components/timers/Tabata';

export const TimerContext = createContext({});

const TimerProvider = ({ children }) => {
    
    //Sounds
    const [play] = useSound(singleBeep);
    const [doneStop] = useSound(done);

    //Get Input
    const [timeVal, setTimeVal] = useState({
        hh: Math.abs(0),
        mm: Math.abs(0),
        ss: Math.abs(0),
    });

   
    const [time, setTime] = useState(0);
    const getMs = Number(convertToMs(timeVal.hh, timeVal.mm, timeVal.ss));
    const [timer, setTimer] = useState(getMs);
    const getRestMs = Number(convertToMs(0, timeVal.mm, timeVal.ss));

    const initialQueue = {
        initialTime: ''
    };

    const [queue, setQueue] = useState([], initialQueue);

   function removeItem(index) {
        if (queue.length > 0) {
            setQueue(queue =>
                queue.filter((value, i) => i !== index));
        }
    };

    var sum = 0;

    queue.forEach(timer => {
        sum += Number(timer.totalTime);
    });

    
    const initialState = {
        hasStarted: false,
        isRunning: queue.isRunning,
        isFinished: false,
        inQueue: false,
        initialTime: 0,
        totalTime: 0,
        totalRoundTime: 0,
        rounds: 1,
        timer: '',
    };

    function StateReducer(state, action) {
        switch (action.type) {
            case 'start': {
                
                if(!state.hasStarted && queue.length !== 0) {
                    setTime(queue[0].initialTime);
                }
                return { ...state, hasStarted: true, isRunning: true, initialTime: time};
            }
            case 'stop':
                return { ...state, isRunning: false};
            case 'done':
                if (queue.length === 1) {
                    removeItem(0);
                    return {...state, isRunning: false}
                } else if (queue.length > 1) {
                    removeItem(0);
                    setTime(queue[1].initialTime);
                     return { ...state, isRunning: true};
                }
                break;
            case 'reset':
                return {
                    isRunning: false,
                    rounds: 1,
                    setQueue: [],
                    totalTime: 0,
                };
            case 'lap': {
                return { time: state.time + 1 }
            }
            case 'fastForward': {
                if (rounds <= 1) {
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
                if (rounds <= 1) {
                    return { ...state, rounds: 1 }
                } else {
                    return { ...state, rounds: state.rounds - 1 };
                }
            case 'running':
                return { ...state, isRunning: true, };
            case 'inQueue':
               
                return {...state, isRunning: false, isFinished: false, inQueue: true, time: state.initialTime};
            
            default:
                throw new Error();
        }
    }

    const [state, setState] = useReducer(StateReducer, initialState);

    const {
        isRunning,
        totalTime,
        rounds,
    } = state;

    const [selected, setSelected] = useState({ Stopwatch: true, Countdown: false, XY: false, Tabata: false });
    const [restMM, setRestMM] = useState(0);
    const [restSS, setRestSS] = useState(0);
    const totalXY = parseInt(totalTimeXY(timeVal.hh, timeVal.mm, timeVal.ss, state.rounds));
    const totalTabata = parseInt(totalTimeTabata(timeVal.hh, timeVal.mm, timeVal.ss, restMM, restSS, state.rounds));
    const [timeElapsed, setTimeElapsed] = useState(0);
 
    const [roundTime, setRoundTime] = useState(0);

    const [restTime, setRestTime] = useState(getRestMs);
    const [currentRound, setCurrentRound] = useState(1);
    const [resting, setResting] = useState(false);

    const [count, setCount] = useState(0);
    const [laps, setLaps] = useState([]);
    const [currentLap, setCurrentLap] = useState(0);
    const [sets, setSets] = useState(0);

    function incrementRounds() {
        setState({ type: 'incrementRounds' });
    }

    function decrementRounds() {
        setState({ type: 'decrementRounds' });
    }

    function countUp() {
        setTime(Math.abs(time + 1));
        return Number(time);
    }

    function countDown() {
        setTime(Math.abs(time - 1));
        return Number(time);
    }
    
    function timerDone() {
        setTime(0);
        countReset();
        setState({ type: 'stop' });
        doneStop();
    }

    function roundDone() {
        play();
    }
  
    function countReset() {
        setState({ type: 'reset' });
        setTime(0);
        setRestSS(0);
        setRestMM(0);
        setCurrentRound(1);
        laps.splice(0, laps.length + 1);
        queue.splice(0, queue.length);
        setTimeElapsed(0);
    }
    
    function fastForward() {
        if (selected.XY) {
            if (totalTime < 1) {
                countReset();
                timerDone();
                setState({ type: 'stop' });
            } else {
                setState({ type: 'fastForward' });
                setTime(roundTime - 1);
            }
        } else {
            if (totalTime < 1) {
                countReset();
                timerDone();
                setState({ type: 'stop' });
            } else {
                setState({ type: 'fastForward' });
                setTime(roundTime - 1);
                setResting(false);
            }
        }
    }
    
     
const [currentTimer, setCurrentTimer] = useState('');

    useEffect(() => {
       
            if (!state.hasStarted && state.isRunning) {
                if (currentTimer === 'XY') { 
                    if(time === 0 && queue.length !== 0){
                        removeItem(0); 
                    } else if (time === 0 && currentRound <= state.rounds) {
                        setCurrentRound(currentRound + 1);
                        setTime(queue[0].totalRoundTime);
                    }
                }
            } else if (state.hasStarted && state.isRunning && time === 0) {
                if (currentTimer === 'XY') {
                    if (currentRound < state.rounds) {
                        if(queue.length === 1) { // LAST TIMER
                            setCurrentRound(currentRound + 1);
                            setTime(queue[0].initialTime); 
                            roundDone(); 
                        } else {
                            setCurrentRound(currentRound + 1);
                            setTime(queue[0].initialTime); 
                        }
                    } else if (currentRound === state.rounds) {
                        if(queue.length > 1) {
                            removeItem(0);
                            setCurrentRound(1);
                            setTime(queue[1].initialTime); 
                        } else if(queue.length === 1){ //Done
                            removeItem(0);
                            countReset();
                            timerDone();
                            setState({ type: 'stop' });
                        }
                    }   
                }
                if(currentTimer === 'Tabata') {
                    if(!resting){
                        setResting(true);
                        setTime(queue[0].restTime);
                    } else {
                    setResting(false);
                    }
                    if (currentRound < state.rounds && resting) {
                        if(queue.length === 1) { 
                            setCurrentRound(currentRound + 1);
                            setTime(queue[0].initialTime); 
                            roundDone(); 
                        } else {
                            setCurrentRound(currentRound + 1);
                            setTime(queue[0].initialTime); 
                            roundDone(); 
                        }
                    } else if (currentRound === state.rounds && resting) {
                        if(queue.length > 1) {
                            removeItem(0);
                            setCurrentRound(1);
                            setTime(queue[1].initialTime); 
                        } else if(queue.length === 1){ 
                            removeItem(0);
                            countReset();
                            timerDone();
                            setState({ type: 'stop' });
                        }
                    }
                }
            }
    

        if (!state.hasStarted && state.isRunning && time === 0 && queue.length !== 0 && currentTimer === 'Countdown') {
                removeItem(0); 
        } else if (state.hasStarted && state.isRunning && time === 0 && queue.length > 1 && currentTimer === 'Countdown') {
                removeItem(0);
                setTime(queue[1].initialTime); 
        } else if (state.hasStarted && state.isRunning && time === 0 && queue.length === 1 && currentTimer === 'Countdown') {
                removeItem(0);
                countReset();
                timerDone();
                setState({ type: 'stop' });
        } 
    },[time]);




    const intervalRef = useInterval(() => {
        setTimeElapsed(Number(timeElapsed + 1));
        if (state.hasStarted && state.isRunning && queue > 0) {
            setTime(queue[0].initialTime);
        } 
        if(state.isRunning) {
            if (queue[0].title === 'Stopwatch') {
                setCurrentTimer('Stopwatch');
                setTime(countUp);
            } else if (queue[0].title === 'Countdown') {
                setCurrentTimer('Countdown');
                setTime(queue[0].initialTime);
                setTime(countDown);
            } else if (queue[0].title === 'XY') {
                setCurrentTimer('XY');
                setTime(queue[0].initialTime);
                setTime(countDown);
            } else if (queue[0].title === 'Tabata') {
                setCurrentTimer('Tabata');
                setTime(queue[0].initialTime);
                setTime(countDown);
            } 
        } else {
          window.clearInterval(intervalRef.current);
        } 
    }, state.isRunning ? 1000 : null);
   
    const TimeDisplay = () => {
        if (queue.length < 0) {
          return formatTime(time);
        } else {
          return formatTime(time);
        }
    }
    const times = {
        stopwatch: {
            title: 'Stopwatch',
            timer: <Stopwatch />,
            initialTime: 0,
            isRunning: state.isRunning,
            isFinished: false,
            inQueue: true,
            totalTime: 0,
        },
        countdown: {
            title: 'Countdown',
            timer: <Countdown/>,
            initialTime: getMs,
            isRunning: state.isRunning,
            isFinished: false,
            inQueue: true,
            totalTime: getMs,
            totalRoundTime: 0,
        },
        xy: {
            title: 'XY',
            timer: <XY />,
            initialTime: getMs,
            isRunning: state.isRunning,
            isFinished: false,
            inQueue: true,
            totalTime: (getMs * state.rounds),
            totalRoundTime: getMs,
            rounds: state.rounds,
        },
        tabata: {
            title: 'Tabata',
            timer: <Tabata />,
            initialTime: getMs,
            isRunning: state.isRunning,
            isFinished: false,
            inQueue: true,
            totalTime: ((getMs + getRestMs) * state.rounds),
            totalRoundTime: getMs,
            rounds: state.rounds,
            restTime: getRestMs,
        }
    };
    
   var total = sum - Number(timeElapsed);

    return (
        <TimerContext.Provider
            value={{
                timeElapsed,
                sum,
                TimeDisplay,
                timeVal,
                setTimeVal,
                removeItem,
                getMs,
                setTime,
                time,
                timer,
                setTimer,
                queue,
                setQueue,
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
                totalTime,
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
                getRestMs,
                roundTime,
                setRoundTime,
                restTime,
                setRestTime,
                currentLap,
                setCurrentLap,
                resting,
                setResting,
                 times
            }}
        >
            
            {children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;