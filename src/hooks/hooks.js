import React from 'react';


// Hook created by Dan Abramov in https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// and help from Comment by Danziger https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval

export function useInterval(callback, delay) {
  const intervalRef = React.useRef();
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);
  
  return intervalRef;
}

export default useInterval;