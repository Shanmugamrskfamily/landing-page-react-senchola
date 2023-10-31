import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col className='text-center'>
          <h1>Welcome to RSK Tours and Travels Website</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block h-100 w-100"
                src="https://media.gq-magazine.co.uk/photos/5d13a9c2976fa37177f3b040/16:9/w_1920,c_limit/hp-gq-6dec18_istock_.jpg"
                alt="New York"
              />
              <Carousel.Caption style={{ color: '#fff', textShadow: '1px 1px 2px #000' }}>
                <h3>New York</h3>
                <p>New York City (NYC) is the largest city in the United States and one of the most important cities in the world.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block h-100 w-100"
                src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/travel-with-visa/paris/marquee-travel-paris-1920x720.jpg"
                alt="Paris"
              />
              <Carousel.Caption style={{ color: '#fff', textShadow: '1px 1px 2px #000' }}>
                <h3>Paris</h3>
                <p>Paris is the capital and largest city of France. It's located in the north-central part of the country.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block h-100 w-100"
                src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/travel-with-visa/sydney/marquee-travel-sydney-1920x720.jpg"
                alt="Sydney"
              />
              <Carousel.Caption style={{ color: '#fff', textShadow: '1px 1px 2px #000' }}>
                <h3>Sydney</h3>
                <p>Sydney is the capital of New South Wales and the largest city in Australia.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      {/* Other content */}
    </Container>
  );
};

export default Home;
