import React from 'react'
import {useEstate} from 'react'
import { FaStar } from "react-icons/fa";
function estrela() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
    
  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    setClicked(clickStates);
  }
  return (
    <>
    
    


    </>

  )
}

export default estrela