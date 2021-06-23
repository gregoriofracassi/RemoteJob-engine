import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import "../App.css"

class JobDetail extends React.Component {
  state = {}

  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Card className="my-3">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title>{this.props.job.title}</Card.Title>
                  <div className="textmd">
                    {this.props.job.publication_date}
                  </div>
                </div>
                <Card.Subtitle className="mb-5 text-muted textxl">
                  {this.props.job.company_name}
                </Card.Subtitle>
                <Card.Text
                  dangerouslySetInnerHTML={{
                    __html: this.props.job.description,
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default JobDetail
