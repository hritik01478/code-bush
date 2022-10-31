import React from "react";
import "./contestList.scss";
// import dayjs from "dayjs";
import "../../global.scss";
const ContestList = ({
  contest,
  id,
  time,
  rated,
  registered,
  day,
  dateVal,
}) => {    
  return (
    <span className={id === 1 ? "codechefbg" : ((id === 2) ? "codeforcesbg" : "default")}>
      <li className={dateVal === day.format("DD/MM/YYYY") ? "contestList" : "inactive"}>
        <span className="data"> {time} <a href = "">{contest}</a></span>
      </li>
    </span>
  );
};
export default ContestList;
