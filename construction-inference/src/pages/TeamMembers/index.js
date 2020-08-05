import React from 'react';
import Menu from '../../components/Header';
import TeamMembers from '../../components/TeamMembers';


function TeamMembersPage() {
    return (
        <div style={{ background: "#d0efff" }}>
            <Menu />
            <TeamMembers />
        </div>
    );
}

export default TeamMembersPage;