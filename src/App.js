import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashBoardPage from './pages/DashboardPage/DashBoardPage';
import TeamPage from './pages/TeamPage/TeamPage';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signup" exact component={SignUpPage}/>
        <Route path="/dashboard/:id" exact component={DashBoardPage}/>
        <Route path='/dashboard/:id/team' exact component={TeamPage}/>
      </Switch>
    </BrowserRouter>
  );
}

