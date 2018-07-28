import {combineReducers} from "redux";
import EmployeeReduce from "./employeeReducer";
import RequestReducer from "./requestReducer";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    employees: EmployeeReduce,
    requests:  RequestReducer
});

export default allReducers
