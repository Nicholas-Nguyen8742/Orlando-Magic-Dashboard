import './SignUpForm.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../FormInput/FormInput';

export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        position: '',
        password: "",
        confirmPassword: "",
        error: "",
        success: false,
        redirect: false
    };

    // Handles Controlled Change
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    render() {
        return (
            <div className='signUp'>
            <section className='signUp-wrapper'>
                <form className='signUp__form' onSubmit={this.handleSubmit}>
                    <h2 className='signUp__title'>Join the Team</h2>
                    <Input type="text" name="name" label="Name" value={this.state.firstName} onChange={this.handleChange} />
                    <Input type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
                    <Input type="text" name="position" label="Position" value={this.state.position} onChange={this.handleChange} />
                    <Input type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
                    <Input type="password" name="confirmPassword" label="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} />
                    <button className='signUp__btn' type="submit">Register</button>
                    {this.state.success && <span className="signUp__message">Signed up!</span>}
                    {this.state.error && <span className="signUp__message">{this.state.error}</span>}
                    <div className='signUp__login'>
                        <p className='signUp__login__body'>Already have an account?</p>
                        <Link to="/" className='signUp__login__link'>Login</Link>
                    </div>
                </form>
            </section>
            </div>
        );
    }
}