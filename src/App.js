import React from "react"
import "./App.css"
import Header from "./components/Header"
import SearchPage from "./components/SearchPage"
import JobDetail from "./components/JobDetail"
import Favourites from "./components/Favourites"
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {
  state = {
    selectedJob: {},
  }

  selectJob = (job) => {
    this.setState({ selectedJob: job })
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Route
            path="/search/:query"
            render={(props) => (
              <SearchPage selectJob={this.selectJob} {...props} />
            )}
          />
          <Route
            path="/detail"
            render={(props) => (
              <JobDetail job={this.state.selectedJob} {...props} />
            )}
          />
          <Route path="/favourites" component={Favourites} />
        </Router>
      </>
    )
  }
}

export default App
