import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../../utils/containers';
import TimerProvider from '../../context/TimerProvider';


export const DisplayTime = ({children}) => {

  return (
    <React.Fragment>
      <Display>
        {children}
      </Display>
    </React.Fragment>
  );
}

ReactDOM.render(
  <TimerProvider>
    <DisplayTime />
    </TimerProvider>,
  document.getElementById('root')
);
  
export default DisplayTime;