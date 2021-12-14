import {
  Row,
  Card,
  Col,
  Form,
  Button,
  Image,
  Container,
} from "react-bootstrap";
import pic from "../dog.jpg";
import WaykiLogo from "../logoH.png";
import Map from "../Components/Map";
import credentials from "../Components/credentials";

export default function Home() {
  const posts = Array.from(Array(12).keys());
  return (
    <Container className="text-center" fluid>
      <Row>
        <Col
          style={{ marginTop: "-56px" }}
          className="d-flex flex-column justify-content-center align-items-center vh-100"
        >
          <Col xs={10} sm={8}>
            <Image src={WaykiLogo} alt="logo" fluid />
          </Col>
          <p className="h4 fw-light">
            Search and find missing pets around your area
          </p>
          <Form className="col-12 col-sm-10">
            <Form.Group className="input-group mb-3">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Search by name, location, color, etc"
                aria-label="Search bar"
                aria-describedby="basic-addon2"
              />
            </Form.Group>
            <Button variant="primary">Search now</Button>
          </Form>
        </Col>
        <Col className="col-12 col-md-6">
          <Map
            googleMapURL={credentials.mapsKey}
            containerElement={<div style={{ height: "94vh" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<div style={{ height: "100%" }} />}
          />
        </Col>
      </Row>
      <Row className="row d-flex justify-content-center py-3">
        <h2>Publications</h2>
        <Row className="d-flex justify-content-center row-cols-auto">
          {posts.map(function (_, i) {
            return (
              <Col key={i} className="py-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={pic} />
                  <Card.Body>
                    <Card.Title>Post Title</Card.Title>
                    <Card.Text>
                      Hace 10 minutos
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Row>
      <Row className="container mx-auto py-5">
        <Col>
          <h2 id="about">About Wayki</h2>
          <Row>
            <Col>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae quam a lacus blandit interdum ac congue nulla. Curabitur
              luctus laoreet congue. Integer at nisi malesuada, lacinia massa a,
              luctus ligula. In et fermentum nibh. Aliquam erat volutpat.
              Pellentesque euismod urna at facilisis porta. Praesent a laoreet
              erat. Ut id volutpat arcu. Quisque porttitor tortor mauris,
              posuere tempus elit semper vel. Duis elementum ac nibh sed
              vulputate. Morbi libero tortor, scelerisque non nunc ac,
              pellentesque varius metus. Praesent eu velit turpis. Pellentesque
              rutrum purus eget massa condimentum venenatis.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
