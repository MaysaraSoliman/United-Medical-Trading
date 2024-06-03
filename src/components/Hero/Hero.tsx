import { Button, Carousel } from "antd";
import "./hero.css";
import { Typography } from "antd";

const { Title } = Typography;

export default function Hero() {
  return (
    <section id="hero">
      <Carousel autoplay speed={1200} effect="fade">
        <div className="carousel carousel1">
          <div className="info container">
            <Title level={4}>UNITED</Title>
            <Title>Your Medical Needs </Title>
            <Title>Solved</Title>
            <div className="button">
              <a
                href="https://wa.me/1234567890?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Let's Talk</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="carousel carousel2">
          <div className="info container">
            <Title level={4}>UNITED</Title>
            <Title>Quality Care</Title>
            <Title>Delivered</Title>
            <div className="button">
              <a
                href="https://wa.me/1234567890?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Let's Talk</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="carousel carousel3">
          <div className="info container">
            <Title level={4}>UNITED</Title>
            <Title>Cost-Effective</Title>
            <Title>Medical Supplies</Title>
            <div className="button">
              <a
                href="https://wa.me/1234567890?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Let's Talk</Button>
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
