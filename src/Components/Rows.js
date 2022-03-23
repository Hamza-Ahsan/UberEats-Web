import React from 'react';
import './Rows.css';

function Rows({image, title, link}) {
    return (
        <div className='rows'> 
            <div className="rows__card">
                <img src={image} />
                <div className="rows__title">
                    <h2>{title}</h2>
                </div>
                <div className="rows__link">
                    <h4>{link}</h4>
                </div>
            </div>
        </div>
    )
}

export default Rows;
