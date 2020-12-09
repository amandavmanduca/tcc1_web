import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard';
import Box from './pages/Box';
import Athlete from './pages/Athlete';
import Competitions from './pages/Competitions';

const Routes = () => {
    return (
        <BrowserRouter >
            <Route component={Leaderboard} path="/" exact={true} />
            <Route component={Competitions} path="/competitions" />
            <Route component={Box} path="/box" />
            <Route component={Athlete} path="/athlete" />
        </BrowserRouter>
    );
}

export default Routes;
