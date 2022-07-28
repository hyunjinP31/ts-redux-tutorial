import { combineReducers } from "redux";
import counter from "./counter";
import todo from "./todo";

const rootReducer = combineReducers({ counter, todo });
export default rootReducer;

//나중에 해당 타입을 컨테이너 컴포넌트에서 불러와서 사용해야함으로 내보내줌
export type RootState = ReturnType<typeof rootReducer>;