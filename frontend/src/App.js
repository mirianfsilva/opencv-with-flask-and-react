import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import DroneMonitorPage from './pages/DroneMonitor';
import TeamMembersPage from './pages/TeamMembers';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/profile" component={ProfilePage} exact />
                <Route path="/droneMonitoring" component={DroneMonitorPage} exact />
                <Route path="/teamMembers" component={TeamMembersPage} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
