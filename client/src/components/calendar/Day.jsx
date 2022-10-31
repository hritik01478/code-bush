import React from "react";
import "./day.scss";
import dayjs from "dayjs";
import ContestList from "./ContestList";
// import {useEffect} from "react";

const Day = ({ day }) => {
  let now = dayjs();
  let today = now.format("DD/MM/YYYY");
  let month = now.format("MM");
  // console.log(month === day.format("MM"));
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
  return (
    <div
      className={
        month === day.format("MM") ? "dateCell" : "dateCell lessOpacity"
      }
    >
      <div
        className={
          (today === day.format("DD/MM/YYYY")) ? "dateHeader today" : "dateHeader"
        }
      >
        {day.format("DD")}
      </div>
      <div className="list">
        <ul className="contestsul">
          {list.map((item) => (
            <span className={item.contests.id === 1 ? "codechefbg" : ((item.contests.id === 2) ? "codeforcesbg" : "default")}>
            <li className={(item.date.day+"/"+item.date.month+"/"+item.date.year) === day.format("DD/MM/YYYY") ? "contestList" : "inactive"}>
              <span className="data"> {item.contests.contestlist.start}-{item.contests.contestlist.end} <a href = {item.contests.contestlist.link}>{item.contests.contestlist.name}</a></span>
            </li>
          </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Day;
