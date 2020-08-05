import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';


function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/profile" component={ProfilePage} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
