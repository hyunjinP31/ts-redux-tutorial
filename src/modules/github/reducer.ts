import { action, createReducer } from "typesafe-actions";
import { GithubState, GithubAction } from "./types";
import { GET_USET_PROFILE, GET_USET_PROFILE_SUCCESS, GET_USET_PROFILE_ERROR } from "./actions";

//초기값 설정
const initialSTate: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
}
const github = createReducer<GithubState, GithubAction>(initialSTate, {
    [GET_USET_PROFILE]: state => ({
        ...state,
        userProfile: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_USET_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_USET_PROFILE_ERROR]: (state,action) => ({
        ...state,
        userProfile: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
})

export default github;