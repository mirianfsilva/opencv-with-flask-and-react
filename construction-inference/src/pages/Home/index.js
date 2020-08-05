import React from 'react';
import Menu from '../../components/Header'
import Dashboard from '../../components/Dashboard';

function Home() {
    return (
        <div style={{ background: "#d0efff" }}>
            <Menu />
            <Dashboard />
        </div>
    );
}

export default Home;