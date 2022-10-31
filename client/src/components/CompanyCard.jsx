// import React from 'react'
import '../Style/CompanyCard.css'
import Questions from './Comp_qns'
import { Link , useNavigate} from "react-router-dom";
import React, { useState,useEffect } from 'react'

function CompanyCard(props) {
  const [data, setData] = useState();
 const navigate = useNavigate();

 const handle=async()=>{
    setData(props.data.questions)
    navigate(`/questions/${props.name}`)
    console.log(props.data.questions)
  }
  return (

<div>

    <div className='compcard' onClick={handle} >


      <span className='compTitle'>{props.name}</span>
    </div>
</div>
  )
}

export default CompanyCard