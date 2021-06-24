export const addJobToFavourites = (job) => ({
  type: "ADD_JOB_TO_FAVOURITES",
  payload: job,
})

export const removeJobFromFavourites = (job) => ({
  type: "REMOVE_JOB_FROM_FAVOURITES",
  payload: job,
})

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://remotive.io/api/remote-jobs?search=${query}`
      )
      if (response.ok) {
        let jobs = await response.json()
        //  this.setState({ jobs: jobs.jobs })
        dispatch({
          type: "GET_JOBS",
          payload: jobs.jobs,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
