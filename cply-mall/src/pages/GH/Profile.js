import React, { memo } from 'react';
import styled from 'styled-components';
import { getUserItem } from '../../slices/KH/UserSlice';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";
const ProfileCss = styled.div`
    width: 100%;
    > h1 {
    padding-bottom: 1%;
    border-bottom: 3px solid #ccc;
    }
`;
const Profile = memo(() => {
    //리덕스 초기화
    const dispatch = useDispatch();

    const {data,loading,error} = useSelector((state)=> state.user);

    React.useEffect(()=> {
        dispatch(getUserItem({
            userid: "hisaishijjo11",
            userpw: 123123123,
        }))
    },[dispatch])
    return (
        <ProfileCss>
            <Spinner visible={loading}/>
            {error ? (
                <ErrorView error={error}/>
            ):(
                data && (
                    <>
                        <h1>프로필 정보</h1>
                        <div className='profile-box'>
                            <div></div>
                        </div>
                    </>
                )
            )}
        </ProfileCss>
    );
});

export default Profile;