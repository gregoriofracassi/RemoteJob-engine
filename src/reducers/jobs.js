import { initialState } from "../store"

const jobsReducer = (state = initialState.retrievedJobs, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      }

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}

export default jobsReducer
