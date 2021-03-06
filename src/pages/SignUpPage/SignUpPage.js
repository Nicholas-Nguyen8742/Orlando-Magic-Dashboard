import './SignUpPage.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
    return (
        <>
            <Header />
            <main className='signUpPage'>
                <SignUpForm />
            </main>
        </>
    );
}
