import React from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import JobDetail from "./JobDetail"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addJobToFavourites, getJobsAction } from "../actions"

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (job) => {
    dispatch(addJobToFavourites(job))
  },
  getJobs: (query) => {
    dispatch(getJobsAction(query))
  },
})

class SearchPage extends React.Component {
  state = {
    query: "",
    jobs: [],
  }

  componentDidMount = () => {
    this.getDetails()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.query === this.props.match.params.query) return

    this.getDetails()
  }

  getDetails = () => {
    this.props.getJobs(this.props.match.params.query)
  }

  render() {
    return (
      <>
        {this.props.retrievedJobs.isLoading ? (
          <>
            <Container className="mt-5">
              <Row>
                <Col className="mt-5" xs={{ offset: 5, span: 2 }}>
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          <Container>
            <Row>
              <Col xs={8}>
                {this.props.retrievedJobs.jobs.map((job) => {
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
                            {this.props.favourites.jobs.some(
                              (j) => j.id === job.id
                            )
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
        )}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
