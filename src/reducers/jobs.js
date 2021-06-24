import { initialState } from "../store"

const jobsReducer = (state = initialState.retrievedJobs, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      }

    default:
      return state
  }
}

export default jobsReducer
