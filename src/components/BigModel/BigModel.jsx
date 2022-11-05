import React from 'react';
import './BigModel.css';

const BigModel = ({ imagepath, name, level, rate }) => {
    return (
        <div className="model-item">
            <img src={imagepath} alt="Model" />
            <p className='model-name'><b>{name}</b></p>
            <label className='model-level' for="file">
                <p>Level {level}</p>
                <p>{level}/10</p>
            </label>
            <progress id="file" value="6" max="10"></progress>
            <p className='model'>₹{rate}/-</p>
        </div >
    )
}

export default BigModel