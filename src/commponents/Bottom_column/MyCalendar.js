import { useState } from 'react';
import Calendar from 'react-calendar';
import './mycalendar.css';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
    const [date, setDate] = useState(new Date());
    return (
        <div className='app'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
                <p className='text-center'>
                    <span className='bold'>Selected Date: {date.toDateString()}</span>

                </p>
            </div>

        </div>
    );
}
export default MyCalendar;