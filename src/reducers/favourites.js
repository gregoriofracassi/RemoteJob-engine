import { initialState } from "../store"

const favouritesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAVOURITES":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      }
    case "REMOVE_JOB_FROM_FAVOURITES":
      return {
        ...state,
        jobs: state.jobs.filter((j) => j.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default favouritesReducer
