import React, { useContext, useEffect, useState } from 'react'
import { store } from './App'
import './pop.css'


const PopUp = () => {
    const[popup, setpopup,product] = useContext(store)
    const[index, setIndex] =useState(popup[1]-0)
  return (popup[0] === 1)?(

    <div  className="popup">
        <span className='first'>{product[index].category}</span>
        <span></span>
        <span><button className='close' onClick={()=>setpopup(0)}>close</button></span>
        <div className='grid'>
            <span className='pic'><img src={product[index].item_image} alt='image' className='img_popup'></img> </span>
            <span>{product[index].item_name}</span>
        </div>
    </div>
  ):""
}

export default PopUp;
