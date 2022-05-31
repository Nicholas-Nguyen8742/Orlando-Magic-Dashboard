import './HomePage.scss';
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm.js';
import Header from '../../components/Header/Header';

export default function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <LoginForm />
            </main>
        </div>
    );
}

