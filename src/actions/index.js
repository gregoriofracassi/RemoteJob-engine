export const addJobToFavourites = (job) => ({
  type: "ADD_JOB_TO_FAVOURITES",
  payload: job,
})

export const removeJobFromFavourites = (job) => ({
  type: "REMOVE_JOB_FROM_FAVOURITES",
  payload: job,
})
