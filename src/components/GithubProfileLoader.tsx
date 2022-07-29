import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';
import GithubProfileInfo from './GithubProfileInfo';
import GithubUsernameForm from './GithubUsernameForm';

const GithubProfileLoader = () => {
    const {data, loading, error} = useSelector((state:RootState)=>state.github.userProfile);
    const dispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        dispatch(getUserProfileThunk(username))
    }
    return (
        <div>
            <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
            {loading && <p>로딩중...</p>}
            {error && <p>에러 발생</p>}
            {data && <GithubProfileInfo bio={data.bio} blog={data.blog} name={data.name} thumbnail={data.avatar_url} />}
        </div>
    );
};

export default GithubProfileLoader;