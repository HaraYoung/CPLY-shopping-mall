import React, { memo } from 'react';
import styled from 'styled-components';

const ProfileCss = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #ff6600;
`;
const Profile = memo(() => {
    return (
        <ProfileCss>
            <h1>프로필 정보</h1>
            <div className='profile-box'>
                 <div></div>
            </div>
        </ProfileCss>
    );
});

export default Profile;