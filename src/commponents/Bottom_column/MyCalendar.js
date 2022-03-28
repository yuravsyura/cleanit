import React, {useState} from "react";
import Calendar from "react-calendar";
import './bottom_column.css'

function MyCalendar(){
    const [calDate, setCalDate] = useState(new Date())

    function onChange(calDate) {
        setCalDate(calDate)
    }

    return (
        <div className="result-calendar">
            <Calendar onChange={onChange} value={calDate} />
        </div>
    )

}

export default MyCalendar;