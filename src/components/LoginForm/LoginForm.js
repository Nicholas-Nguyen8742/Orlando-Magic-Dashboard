import './LoginForm.scss';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { emailValidation, isEmptyPassword } from '../../utils/formValidation';
import Input from '../FormInput/FormInput';

export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        success: false,
        user: ''
    }

    // Handles Controlled Change
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <div className='loginForm'>
            <section className='loginForm-wrapper'>
                <form className="loginForm__form" onSubmit={this.handleSubmit}>
                    <h2 className="loginForm__title">Login</h2>
                    <Input type="text" name="email" label="Email" value={this.state.email} onChange={this.handleChange} valid={emailValidation} />
                    <Input type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} valid={isEmptyPassword} />
                    <button className='loginForm__btn' type="submit">Login</button>
                    {this.state.success && <Redirect to={`/dashboard/${this.state.user}`} />}
                    {this.state.error && <p>{this.state.error}</p>}
                    <div className='loginForm__register'>
                        <p className='loginForm__register__body'>Join the Team!</p>
                        <Link to="/signup" className='loginForm__register__link'>Register</Link>
                    </div>
                </form>
            </section>
            </div>
        );
    }
}

