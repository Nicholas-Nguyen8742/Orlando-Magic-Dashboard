import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/signup" component={SignUpPage}/>
      </Switch>
    </BrowserRouter>
  );
}

