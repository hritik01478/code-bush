import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import datas from '../companylist.json'
import Each_qn from './Each_qn'
import '../Style/each_qn.css'


// import Question from './Question';


function Questions() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const [question] = datas.filter((qns) => {
      return qns.title === id;
    });

    setData(question.questions);
  }, [id]);

  const gotoQn = (link) => {
    window.open(
      `${link}`);
  }

  let count = 1
  return (
    <div>
      <div style={{ "font-size": "45px" }}>

        <strong>
          {id} Questions
        </strong>

      </div>
      {

        data.length > 0 && data.map((ques, i) => {

          let data = ques.split("\\");
          let qn = data[0];
          let link = data[1];
          let level = data[2];
          let n = 0;
          if (level === 'easy') {
            n = 1
          }

          if (level === 'med') {
            n = 2
          }
          if (level === 'hard') {
            n = 3
          }

          return <div onClick={() => gotoQn(link)} key={i} className='qn_box'>
            <Each_qn qn={qn} sno={count++} level={n} />
          </div>
        })
      }
    </div>
  )
}

export default Questions