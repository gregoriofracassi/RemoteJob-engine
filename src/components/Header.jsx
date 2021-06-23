import React from "react"
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap"
import { withRouter } from "react-router-dom"

class Header extends React.Component {
  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={() => this.props.history.push("/")}>
            Home
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link
              href=""
              onClick={() => this.props.history.push("/favourites")}
            >
              Favourites
            </Nav.Link>
          </Nav>
          <Form
            inline
            onSubmit={() =>
              this.props.history.push(`/search/${this.state.query}`)
            }
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Form>
        </Navbar>
      </>
    )
  }
}

export default withRouter(Header)
