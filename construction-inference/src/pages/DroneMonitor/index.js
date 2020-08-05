import React from 'react';
import Menu from '../../components/Header'
import DroneMonitoring from '../../components/DroneMonitoring';

function DroneMonitorPage() {
    return (
        <div style={{ background: "#d0efff" }}>
            <Menu />
            <DroneMonitoring />
        </div>
    );
}

export default DroneMonitorPage;