import React, { useState, useEffect, useContext } from "react";
import Day from "./Day";
import "./month.scss";
import dayjs from "dayjs";

const Month = ({ month }) => {  

  return (
    <div className="month">      
      <div className="weekHead">
        {month[0].map((day) => (
          <div className="week">{day.format("ddd").toUpperCase()}</div>
        ))}
      </div>
      {month.map((row) => (
        <div className="row">
          {row.map((day, idx) => (
            <div className="week">
              <div className="dayCell">
                <Day day={day} key={idx} />
              </div>
            </div>
          ))}
        </div>        
      ))}
    </div>
  );
};

export default Month;
