import "./partners.css";
import { Typography } from "antd";
import Slider from "react-slick";

const { Title } = Typography;

export default function Partners() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <section id="partners">
      <div className="container">
        <div className="partners_container">
          <div className="title_container">
            <Title className="subTitle" level={3}>
              Partners
            </Title>
            <Title className="title poppins-font ">Our Some Popular</Title>
            <Title className="title poppins-font ">Partners</Title>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="image_box">
                  <img src="/src/assets/partners/brand1.png" alt="" />
                </div>
              </div>
              <div>
                <div className="image_box">
                  <img src="/src/assets/partners/brand2.png" alt="" />
                </div>
              </div>
              <div>
                <div className="image_box">
                  <img src="/src/assets/partners/brand3.png" alt="" />
                </div>
              </div>
              <div>
                <div className="image_box">
                  <img src="/src/assets/partners/brand4.png" alt="" />
                </div>
              </div>
              <div>
                <div className="image_box">
                  <img src="/src/assets/partners/brand5.png" alt="" />
                </div>
              </div>
              {/* <div>
                <div className="image_box">
                  <img src="/src/assets/partners/brand1.png" alt="" />
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
