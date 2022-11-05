import React from 'react';
import BigModel from '../components/BigModel/BigModel';

import model from '../assets/model.jpg';

const Filter = () => {

    return (
        <section className='filter-section '>
            <div className="filter-menu">
                <div className="filter-menu-item">
                    <input type="number" placeholder='Age' />
                    <input type="text" placeholder='Eye Color' />
                    <select name="" id="" placeholder='Skin Color'>
                        <option value="select">Skin Color</option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                        <option value="black">Black</option>
                    </select>
                    <select name="" id="" placeholder='Hair Color'>
                        <option value="select">Hair Color</option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                        <option value="black">Black</option>
                    </select>
                    <input type="number" placeholder='Chest Sie' />
                    <input type="number" placeholder='Bicep Sie' />
                    <input type="number" placeholder='Hip Sie' />
                    <input type="number" placeholder='Shoe Sie' />
                    <input type="number" placeholder='Weight (kgs)' />
                </div>
                <p>Height</p>
                <div className="filter-menu-item">
                    <input type="number" placeholder='Min. Height' />
                    <input type="number" placeholder='Max. Height' />
                </div>
                <p>Rate</p>
                <div className="filter-menu-item">
                    <input type="number" placeholder='Min. Rate' />
                    <input type="number" placeholder='Max. Rate' />
                </div>
                <p>Calender</p>
                <div className="filter-menu-item">
                    <input type="date" placeholder='Date' />
                    <select name="" id="" placeholder='Day'>
                        <option value="select">Day</option>
                        <option value="mon">Monday</option>
                        <option value="tue">Tuesday</option>
                        <option value="wed">Wednesday</option>
                        <option value="thu">Thursday</option>
                        <option value="fri">Friday</option>
                        <option value="sat">Saturday</option>
                        <option value="sun">Sunday</option>
                    </select>
                    <input type="time" placeholder='Time' />
                </div>
            </div>
            <div className='model-menu'>
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
                <BigModel imagepath={model} name='Christine' level='6' rate='6000' />
            </div>
        </section>
    )
}

export default Filter