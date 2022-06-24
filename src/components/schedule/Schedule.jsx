import React from 'react'
import './Schedule.css'
import { InlineWidget } from "react-calendly";

const Schedule = () => {
    return (
        <div className='ike__schedule'>
            <div className='ike__schedule-content'>
                <InlineWidget url="https://calendly.com/dev-jtorres/hair-cut" />
            </div>

        </div>
    );
}


export default Schedule