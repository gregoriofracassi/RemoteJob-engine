import React from "react"
import "./App.css"
import Header from "./components/Header"
import SearchPage from "./components/SearchPage"
import JobDetail from "./components/JobDetail"
import Favourites from "./components/Favourites"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends React.Component {
  state = {
    selectedJob: {},
  }

  selectJob = (job) => {
    this.setState({ selectedJob: job })
  }

  // detail
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
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
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
