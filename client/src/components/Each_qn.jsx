import React from 'react'
import '../Style/each_qn.css'
import icon from '../assets/star-solid.png'


const Each_qn = (props) => {

  const images = [];
  for (let i = 0; i < props.level; i++) {
    images.push(
      <img src={icon} />
    )
  }

  var classs = 'eachqn'


  return (
    // <div>

    <div className={classs} id='eachqn'>

      <div className='sno'>
        {props.sno}
      </div>
      <div className='content'>
        {props.qn}
      </div>

      <div className='rating'>


        {images}


      </div>
    </div>

    // </div>
  )

}

export default Each_qn