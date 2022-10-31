import React from "react";
import "./shortDay.scss";
import dayjs from "dayjs";
import ShortContestList from "./ShortContestList";

const ShortDay = ({ day }) => {
  let now = dayjs();
  let today = now.format("DD/MM/YYYY");  
  const list = [
    {
      date: {
        day: 12,
        month: 11,
        year: 2022
      },
      contests: {
        id: 2,
        platform: "codeforces",
        contestlist: {
          start: "20:05",
          end: "22:20",
          name: "Codeforces Round 900",
          link: "#"
        }
      }

    }
  ];

  const generateClass = (today) => {
    if (today === day.format("DD/MM/YYYY")) {
      return "shortDay todayShortDay";
    } else {
      return "shortDay";
    }
  };
  const getClass = (item) => {
    if ((item.date.day+"/"+item.date.month+"/"+item.date.year) === day.format("DD/MM/YYYY")) {
      if (item.contests.id === 1) {
        return "codechef";
      }
      else if (item.contests.id === 2) {
        return "codeforces";
      }
    }
    else
      return "inactive";
  };
  return (
    <div className={generateClass(today)}>
      
      <div className="listShortDay">
      <div className={"dateHeader"}>{day.format("DD")}</div>
        <div className="contestsdiv">
          {list.map((item) => (
            <div className={getClass(item)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortDay;
