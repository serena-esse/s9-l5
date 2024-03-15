import React, { Component } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";

class Gallery extends Component {
  state = {
    Saga1: [],
    Saga2: [],
    Saga3: [],
    loading: true,
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response1 = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=76caa3a1&s=harry%20potter");
      const response2 = await fetch("http://www.omdbapi.com/?apikey=76caa3a1&s=Star+Trek");
      const response3 = await fetch("http://www.omdbapi.com/?apikey=76caa3a1&s=Pirates+of+the+Caribbean");

      if (!response1.ok || !response2.ok || !response3.ok) {
        throw new Error("Failed to fetch data");
      }

      const data1 = await response1.json();
      const data2 = await response2.json();
      const data3 = await response3.json();

      this.setState({
        Saga1: data1.Search.slice(0, 6),
        Saga2: data2.Search.slice(0, 6),
        Saga3: data3.Search.slice(0, 6),
        loading: false,
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { Saga1, Saga2, Saga3, loading, error } = this.state;

    if (loading) {
      return (
        <Container fluid className="bg-dark">
          <Spinner animation="border" role="status" className="mt-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      );
    }

    if (error) {
      return (
        <Container fluid className="bg-dark">
          <Alert variant="danger" className="mt-5">
            {error}
          </Alert>
        </Container>
      );
    }

    return (
      <Container fluid className="bg-dark">
        <div className="mt-3">
          <h3 className="text-white">Harry Potter</h3>
          <Row>
            {Saga1.map((e) => (
              <Col className="col-md-2 col-xs-4 mt-2" key={e.imdbID}>
                <Card style={{ width: "14rem" }}>
                  <Card.Img variant="top" src={e.Poster} style={{ height: "20rem" }} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5">
          <h3 className="text-white"> Star Trek</h3>
          <Row>
            {Saga2.map((e) => (
              <Col className="col-md-2 col-xs-4 mt-2" key={e.imdbID}>
                <Card style={{ width: "14rem" }}>
                  <Card.Img variant="top" src={e.Poster} style={{ height: "20rem" }} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5">
          <h3 className="text-white">Pirates of the Caribbean</h3>
          <Row>
            {Saga3.map((e) => (
              <Col className="col-md-2 col-xs-4 mt-2" key={e.imdbID}>
                <Card style={{ width: "14rem" }}>
                  <Card.Img variant="top" src={e.Poster} style={{ height: "20rem" }} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default Gallery;
