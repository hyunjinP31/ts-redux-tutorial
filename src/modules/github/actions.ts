import { AxiosError } from 'axios';
import  { createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';


export const GET_USET_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USET_PROFILE_SUCCESS = 'github/GET_USET_PROFILE_SUCCESS';
export const GET_USET_PROFILE_ERROR = 'github/GET_USET_PROFILE_ERROR';

// export const getUserProfile = createStandardAction(GET_USET_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(GET_USET_PROFILE_SUCCESS)<GithubProfile>();
// export const getUserProfileError = createStandardAction(GET_USET_PROFILE_ERROR)<AxiosError>();

export const getUserProfileAsync = createAsyncAction(
    GET_USET_PROFILE,
    GET_USET_PROFILE_SUCCESS,
    GET_USET_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();