import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";


const localizer = dayjsLocalizer(dayjs);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={props}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
