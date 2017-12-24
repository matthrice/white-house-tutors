import React from 'react'
import {
    TitleBlock,
    Header,
    CalendarBlock
} from '../components';


const CalendarPage = () => (
    <div class="main">
        <Header />
        <TitleBlock title="Calendar"/>
        <CalendarBlock />
    </div>
);

export default CalendarPage;