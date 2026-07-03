import React from 'react'
import Hoc from './Hoc';

const Child2 = (props) => {
    console.log(props);
    
  return (
    <div>Child2</div>
  )
}

export default Hoc(Child2)