import React from "react";
import dayjs from "dayjs";
import "./shortCalendar.scss";
import ShortDay from "./ShortDay";  

function ShortCalendar() {  
  let now = dayjs();
  let previousDay = now.subtract(1, 'day');
  let nextDay = now.add(1, 'day');  
  return (
    <div className="shortCalendar">
      <div className="past">
        <ShortDay day={previousDay.subtract(1, 'day')} />
      </div>
      <div className="past">
        <ShortDay day={previousDay} />
      </div>
      <div className="today">
        <ShortDay day={now} />
      </div>
      <div className="next">
        <ShortDay day={nextDay} />
      </div>
      <div className="next">
        <ShortDay day={nextDay.add(1, 'day')} />
      </div>
    </div>
  );
}
export default ShortCalendar;
