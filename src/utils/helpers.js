// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.


export function formatTime(time) {
   
    let seconds = Math.floor(time % 60 );
    let minutes = Math.floor((time / 60) % 60);
    let hours = Math.floor((time/3600));
   
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}

export function format(hh,mm,ss) {
    
    let seconds = ss;
    let minutes = mm;
    let hours = hh;
    
    // if (hours < 10) {
    //   hours = `0${hours}`;
    // }
    // if (minutes < 10) {
    //     minutes = `0${minutes}`;
    // }
    // if (seconds < 10) {
    //     seconds = `0${seconds}`;
    // }
    return `${hours}:${minutes}:${seconds}`;
}

export default function convertToMs(hh, mm, ss) {
    let minutes = mm * 60;
    let hour = hh * 3600;
    let seconds = ss * 1;
    let milliseconds = minutes + hour + seconds;
    return Number(milliseconds);
}


export function totalTimeXY(hh, mm, ss, rounds) {
    let seconds = Number(ss * 1);
    let minutes = Number(mm * 60);
    let hour = Number(hh * 3600);
    let time = seconds + minutes + hour;
    let total = Number(time * rounds);
    
    return total;
}

export function totalTimeTabata(hh, mm, ss, restMM, restSS, rounds) {
    let seconds = Number(ss * 1);
    let minutes = Number(mm * 60);
    let hour = Number(hh * 3600);
    let time = seconds + minutes + hour;

    let restSec = Number(restSS * 1);
    let restMin = Number(restMM * 60);
    let rest = restSec + restMin;
    
    let total = Number((time + rest) * rounds);
    
    return total;
}
