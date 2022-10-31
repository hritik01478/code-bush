import React, { useContext } from "react";
import GlobalContext from "../../pages/calendar/context/GlobalContext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import dayjs from "dayjs";
import "./calendarHeader.scss";

const CalendaHeader = () => {
  let now = dayjs();
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  return (
    <div className="monthName">
      <button className="left" onClick={handlePrevMonth}>
        <span>
          <ChevronLeftIcon />
        </span>
      </button>
      <div className="centerMonthName">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </div>
      <button className="right" onClick={handleNextMonth}>
        <span>
          <ChevronRightIcon />
        </span>
      </button>
      <button className="todayButton" onClick={handleReset}>
        <span>Today</span>
      </button>
    </div>
  );
};

export default CalendaHeader;
