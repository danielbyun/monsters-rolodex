import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: false,
  success: false,
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        success: true,
        isPending: false,
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
