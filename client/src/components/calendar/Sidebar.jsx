import React from 'react';
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';
import "./sidebar.scss";

const Sidebar = () => {

  return (
    <aside className='sidebar'>
      <CreateEventButton/>
      {/* <SmallCalendar/> */}
    </aside>
  );
}

export default Sidebar;
