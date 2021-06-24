import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import favouritesReducer from "../reducers/favourites"
import jobsReducer from "../reducers/jobs"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favourites: {
    jobs: [],
  },
  retrievedJobs: {
    jobs: [],
  },
}

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  retrievedJobs: jobsReducer,
})

const configureStore = () =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )

export default configureStore
