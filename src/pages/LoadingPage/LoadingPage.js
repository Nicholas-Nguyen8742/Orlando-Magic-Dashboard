import './LoadingPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';


export default function LoadingPage({ text, link }) {
    return (
        <>
            <Header />
            <main className="dashboardFailed">
                <article className='dashboardFailed__card'>
                    <h1 className='dashboardFailed__card__text'>{text}</h1>
                    <Link className='dashboardFailed__card__link' to="/">{link}</Link>
                    <div className='dashboardFailed__loader'>
                        <span className='dashboardFailed__loader-spin'></span>
                        <span className='dashboardFailed__loader-bounce'></span>
                    </div>
                </article>
            </main>
        </>
    );
}

