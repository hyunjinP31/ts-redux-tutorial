import React from "react";
import { createReducer, deprecated, ActionType } from "typesafe-actions";

const { createAction, createStandardAction } = deprecated;

//1.액션타입
//2.액션을 리턴해주는 함수
//3.초기값
//4.리듀서 만들기

//액션타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";


//액션생성함수
export const increase =createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

//state의 타입을 지정
type CounterState = {
    count: number;
}
//초기상태 생성
const initialState = {
    count: 0
}

//리듀서 액션 타입 지정
// ReturnType<typeof ---> 특정함수의 반화값을 추론

const actions = { increase, decrease, increaseBy }
type CounterAction = ActionType<typeof actions>

//리듀서 만들기
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({count: state.count - 1}),
    [INCREASE_BY]: (state, action) => ({count: state.count + action.payload})
})
export default counter;