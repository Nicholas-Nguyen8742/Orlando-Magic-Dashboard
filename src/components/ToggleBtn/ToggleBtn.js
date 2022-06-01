import './ToggleBtn.scss';
import React from 'react';

export default function ToggleBtn({ onClick }) {
    return (
        <div className="switch-button">
            <input className="switch-button-checkbox" type="checkbox" onClick={onClick}></input>
            <label className="switch-button-label" htmlFor=""><span className="switch-button-label-span">RPG</span></label>
        </div>
    );
}

