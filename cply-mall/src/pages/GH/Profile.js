import React, { memo } from 'react';
import styled from 'styled-components';

const ProfileCss = styled.div`
    width: 100%;
    > h1 {
    padding-bottom: 1%;
    border-bottom: 3px solid #ccc;
    }
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