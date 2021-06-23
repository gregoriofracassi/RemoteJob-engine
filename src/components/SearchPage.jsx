import React from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import JobDetail from "./JobDetail"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addJobToFavourites } from "../actions"

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (job) => {
    dispatch(addJobToFavourites(job))
  },
})

class SearchPage extends React.Component {
  state = {
    query: this.props.match.params.query,
    jobs: [],
  }

  componentDidMount = () => {
    this.getDetails()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.query === this.props.match.params.query) return

    this.getDetails()
  }

  getDetails = async () => {
    try {
      let response = await fetch(
        `https://remotive.io/api/remote-jobs?search=${this.state.query}`
      )
      if (response.ok) {
        let jobs = await response.json()
        console.log(jobs.jobs)
        this.setState({ jobs: jobs.jobs })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={8}>
            {this.state.jobs.map((job) => {
              return (
                <Card
                  key={job.id}
                  className="my-3"
                  onClick={() => {
                    this.props.selectJob(job)
                  }}
                >
                  <Card.Body>
                    <Link to="/detail">
                      <div className="d-flex justify-content-between">
                        <Card.Title>{job.title}</Card.Title>
                        <div className="textmd">{job.publication_date}</div>
                      </div>
                      <Card.Subtitle className="mb-2 text-muted">
                        {job.company_name} -{" "}
                        <span className="textmd">{job.job_type}</span>
                      </Card.Subtitle>
                      <Card.Text
                      //   dangerouslySetInnerHTML={{ __html: job.description }}
                      />
                    </Link>
                    <div className="d-flex justify-content-between">
                      <Card.Link className="textmd" href={job.url}>
                        Remotive Link
                      </Card.Link>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => this.props.addToFavourites(job)}
                      >
                        {this.props.favourites.some((j) => j.id === job.id)
                          ? "saved in favourites"
                          : "add to favourites"}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )
            })}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
