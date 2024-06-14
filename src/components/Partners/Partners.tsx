import "./partners.css";
import { Typography } from "antd";
import Slider from "react-slick";

const { Title } = Typography;

export default function Partners() {
  const settings = {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brands = [
    { logo: "/src/assets/partners/1.jpg" },
    { logo: "/src/assets/partners/2.jpg" },
    { logo: "/src/assets/partners/3.jpg" },
    { logo: "/src/assets/partners/4.jpg" },
    { logo: "/src/assets/partners/5.jpg" },
    { logo: "/src/assets/partners/6.jpg" },
    { logo: "/src/assets/partners/7.jpg" },
    { logo: "/src/assets/partners/8.jpg" },
    { logo: "/src/assets/partners/9.jpg" },
    { logo: "/src/assets/partners/10.jpg" },
    { logo: "/src/assets/partners/11.jpg" },
    { logo: "/src/assets/partners/12.jpg" },
    { logo: "/src/assets/partners/13.jpg" },
    { logo: "/src/assets/partners/14.jpg" },
    { logo: "/src/assets/partners/15.jpg" },
    { logo: "/src/assets/partners/16.jpg" },
    { logo: "/src/assets/partners/17.jpg" },
    { logo: "/src/assets/partners/18.jpg" },
    { logo: "/src/assets/partners/19.jpg" },
    { logo: "/src/assets/partners/20.jpg" },
    { logo: "/src/assets/partners/21.jpg" },
    { logo: "/src/assets/partners/22.jpg" },
    { logo: "/src/assets/partners/23.jpg" },
    { logo: "/src/assets/partners/24.jpg" },
    { logo: "/src/assets/partners/25.jpg" },
    { logo: "/src/assets/partners/26.jpg" },
  ];

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
              {brands.map((brand) => (
                <div>
                  <div className="image_box">
                    <img src={brand?.logo} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
