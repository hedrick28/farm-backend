import React from "react";
import grains from "../../assets/products/grains.jpg";
import vegetables from "../../assets/products/vegetables.jpg";
import crops from "../../assets/products/crops.jpg";
import farm from "../../assets/products/farm.png";
import farm1 from "../../assets/products/farm2.png";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div className="banner-container  mt-4">
      <div className="banner-wrapper d-flex container">
        <div className="banner-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={crops}
                alt="First slide"
                height="300"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={grains}
                alt="Second slide"
                height="300"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={vegetables}
                alt="Third slide"
                height="300"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="banner-image">
          <div className="top-image">
            <img src={farm} />
          </div>
          <div className=" bottom-image">
            <img src={farm1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
