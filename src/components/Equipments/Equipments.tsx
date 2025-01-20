import "./equipments.css";
import { Typography } from "antd";
import Slider from "react-slick";

const { Title } = Typography;

import Moji from "/src/assets/equipments/moji.png";
import ComprehensiveSkin from "/src/assets/equipments/comprehensive skin management.png";
import OxygenHydra from "/src/assets/equipments/oxygen hydra microdermabrasion.png";
import BodyAnalyzer from "/src/assets/equipments/body analyzer.png";
import Cryomed from "/src/assets/equipments/cryomed.png";

export default function Equipments() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="Equipments">
      <div className="container">
        <div className="equipments_container">
          <div className="equipments_Title">
            <Title className="subTitle" level={3}>
              Our Projects
            </Title>
            <Title className="title poppins-font ">
              Where Engineering Meets
            </Title>
            <Title className="title poppins-font ">Medicine</Title>
          </div>
          <div className="equipments_items">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="card_box">
                  <div className="image_box">
                    <img src={Moji} alt="moji" />
                    {/* <img src="/src/assets/equipments/moji.png" alt="moji" /> */}
                  </div>
                  <div className="info_box">
                    <div className="equipment_title">
                      <Title level={4}>Moji AI Skin Tester</Title>
                      <Title level={4}>Max Version</Title>
                    </div>
                    <ul className="equipment_list">
                      <li>eight spectrum imaging</li>
                      <li>cloud computing and cloud storage</li>
                      <li>ai automatic face recognition</li>
                      <li>28 million high-definition pixels</li>
                      <li>deep self learning</li>
                      <li>3d simulation technology</li>
                    </ul>
                  </div>
                </div>

                <div className="card_box">
                  <div className="image_box">
                    <img
                      src={ComprehensiveSkin}
                      // src="/src/assets/equipments/comprehensive skin management.png"
                      alt="comprehensive skin management"
                    />
                  </div>
                  <div className="info_box">
                    <div className="equipment_title">
                      <Title level={4}>Comprehensive</Title>
                      <Title level={4}>Skin Management Instrument</Title>
                    </div>
                    <ul className="equipment_list">
                      <li>deep clean, penetrate skin dirt.</li>
                      <li>import products, lighten dark circles. </li>
                      <li>
                        double the absorption of nutrients, dilute fine lines.
                      </li>
                      <li>cell activaation, accelerate skin metabolism</li>
                    </ul>
                  </div>
                </div>

                <div className="card_box">
                  <div className="image_box">
                    <img
                      src={OxygenHydra}
                      // src="/src/assets/equipments/oxygen hydra microdermabrasion.png"
                      alt="ocygen hyrda microdermabrasion"
                    />
                  </div>
                  <div className="info_box">
                    <div className="equipment_title">
                      <Title level={4}>Oxygen Hydra Microdermabrasion</Title>
                      <Title level={4}>Facial Machine</Title>
                    </div>
                    <ul className="equipment_list">
                      <li>skin lifting</li>
                      <li>pore shrinking </li>
                      <li>blackhead removal</li>
                      <li>wrinkle reducing</li>
                      <li>skin deep cleaning</li>
                      <li>skin moisturizing</li>
                    </ul>
                  </div>
                </div>

                <div className="card_box">
                  <div className="image_box">
                    <img
                      src={BodyAnalyzer}
                      // src="/src/assets/equipments/body analyzer.png"
                      alt="body analyzer"
                    />
                  </div>
                  <div className="info_box">
                    <div className="equipment_title">
                      <Title level={4}>Body Analyzer</Title>
                    </div>
                    <ul className="equipment_list">
                      <li>providing accurate, human body data services</li>
                      <li>used in commercial fitness and health fields </li>
                    </ul>
                  </div>
                </div>

                <div className="card_box">
                  <div className="image_box">
                    <img
                      src={Cryomed}
                      // src="/src/assets/equipments/cryomed.png"
                      alt="cryomed basic"
                    />
                  </div>
                  <div className="info_box">
                    <div className="equipment_title">
                      <Title level={4}>Cyromed Basic</Title>
                    </div>
                    <ul className="equipment_list">
                      <li>pre-cooling to -100C : 2.87 liters </li>
                      <li>3 minute session : 4.05 liters </li>
                    </ul>
                    <div className="equipment_title">
                      <Title level={4}>Nitrogen Feed</Title>
                    </div>
                    <ul className="equipment_list">
                      <li>pressurized tank </li>
                      <li>non pressurized dewar </li>
                    </ul>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
