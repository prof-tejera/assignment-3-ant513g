import React from 'react';
import Display from '../../utils/containers';


export const DisplayTime = ({children}) => {

  return (
    <Display>
      {children}
    </Display>
  );
}
  
export default DisplayTime;