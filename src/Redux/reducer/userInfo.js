import { AnyAction } from "redux";
import { FETCH_USER_INFO_ON_SUCCESS } from "redux/actions/userInfo";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_ON_SUCCESS:
      return action.userInfo;
    default:
      return state;
  }
};