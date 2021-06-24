import React from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import JobDetail from "./JobDetail"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { removeJobFromFavourites } from "../actions"

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  removeFavourite: (job) => {
    dispatch(removeJobFromFavourites(job))
  },
})

class Favourites extends React.Component {
  state = {}

  render() {
    return (
      <Container>
        <Row>
          <Col xs={8}>
            {this.props.favourites.jobs.map((job) => {
              return (
                <Card key={job.id} className="my-3">
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
                        onClick={() => this.props.removeFavourite(job)}
                      >
                        remove from favourites
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

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
