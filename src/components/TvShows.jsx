import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TvShows() {
  return (
    <Container fluid className="bg-dark">
      <Row className="bg-dark">
        <Col>
          <div className="d-flex">
            <h2 className="mb-4 text-white ">TV Shows</h2>
            <div className="dropdown">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#212529" }}
              >
                Genres &nbsp;
              </button>
              <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item text-white bg-dark" href="#">
                  Comedy
                </a>
                <a className="dropdown-item text-white bg-dark" href="#">
                  Drama
                </a>
                <a className="dropdown-item text-white bg-dark" href="#">
                  Thriller
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TvShows;
