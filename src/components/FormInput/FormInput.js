import './FormInput.scss'
// import error from '../../assets/icons/error-24px.svg';
import React from 'react';


export default function Input({ label, name, type, onChange, value, valid }) {
    return (
            <div className='field'>
                <label className='field__label'>{label}</label>
                <input 
                    placeholder={label} 
                    type={type} 
                    name={name} 
                    value={value}
                    onChange={onChange}
                    className="field__input" /> 
                {/* <span className={`field__group field__group-hide ${valid ? '' : 'field__group--error'}`}>
                    <img className="field__group--error__icon" src={error} alt=""/>
                    <p className="field__group--error__message">This field is required</p>
                </span> */}
            </div>
    );
}

