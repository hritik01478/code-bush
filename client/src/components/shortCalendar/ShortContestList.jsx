import React from "react";
import "./shortContestList.scss";
import "../../global.scss";
const ShortContestList = ({
  contest,
  id,
  time,
  rated,
  registered,
  day,
  dateVal,
}) => {
  const getClass = () => {
    if (dateVal === day.format("DD/MM/YYYY")) {
      if (id === 1) {
        return "codechef";
      }
      else if (id === 2) {
        return "codeforces";
      }
    }
    else
      return "inactive";
  };
  return (
    <div className={getClass()}></div>
  );
};
export default ShortContestList;
