import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

BigCalendar.momentLocalizer(moment);

const CalendarBlock = () => (
    <div class="calendar-block">
        <BigCalendar class="big-calendar" events={[]} />
    </div>
);

export default CalendarBlock;