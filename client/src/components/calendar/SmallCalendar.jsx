import { Dayjs } from "dayjs";
import React from "react";
import { useState, useEffect } from "react";
import {getMonth} from "../../pages/calendar/util";
export default function () {
  const [currenMonthInd, setCurrentMonthInd] = useState(Dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currenMonthInd));
  }, [currentMonth]);
  return <div></div>  
}
