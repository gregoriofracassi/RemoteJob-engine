import { initialState } from "../store"

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      }
    case "REMOVE_JOB_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter((j) => j.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default mainReducer
