import React from 'react';
import Profile from '../../components/Profile'
import Menu from '../../components/Header';

function ProfilePage() {
    return (
        <div style={{ background: "#d0efff" }}>
            <Menu />
            <Profile />
        </div>
    );
}

export default ProfilePage;