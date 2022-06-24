import React from 'react'
import './Book.css'
import { Schedule } from '../../components';

const Book = () => {
    return (
        <div className='ike__book section__padding' id='book'>
            <div className='ike__book-content'>
                <div className="ike__book-heading">
                    <h1>Book</h1>
                </div>
            </div>
            <div className="ike__book-calender">
                    <Schedule />
                </div>

        </div>
    );
}


export default Book