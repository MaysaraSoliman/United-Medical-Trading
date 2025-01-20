import { useState } from "react";
import "./howWeWork.css";
import { Col, Row, Space, Typography } from "antd";
import MedicalAnalytical from "/src/assets/howWeWork/medical analytical.png";
import Research from "/src/assets/howWeWork/research.png";
import Healthcare from "/src/assets/howWeWork/healthcare.png";
import Hospital from "/src/assets/howWeWork/hospital-svgrepo-com.png";
import Consumer from "/src/assets/howWeWork/consumer-svgrepo-com.png";
import Dental from "/src/assets/howWeWork/chair-tooth-svgrepo-com.png";
import Laboratory from "/src/assets/howWeWork/laboratory-microscope-svgrepo-com.png";

const { Title, Paragraph } = Typography;

export default function HowWeWork() {
  const [ellipsis] = useState(true);
  const items = [
    {
      title: `Medical & Analytical`,
      imageSrc: { MedicalAnalytical },
      // imageSrc: "/src/assets/howWeWork/medical analytical.png",
      content:
        "Focuses on distributing medical/analytical equipment,devices, and supplies. Our range covers Medical,Physiotherapy, Dermatology, Gynaecology, Radiography(X-Ray), Ultrasound, Simulation, and Emergency care products. We provide detailed training to customers on using and maintaining supplied equipment, and participate in regional medical events to highlight our products and connect with industry peers.",
    },
    {
      title: `Research & Scientific & Simulation`,
      imageSrc: { Research },
      // imageSrc: "/src/assets/howWeWork/research.png",
      content:
        "Engages in research and scientific projects, primarily serving scientists and researchers. We provide comprehensive support, including supply, installation, commissioning, training, and post-sale support, for all solutions and equipment offered by our department.",
    },
    {
      title: `Beauty & Health`,
      imageSrc: { Healthcare },
      // imageSrc: "/src/assets/howWeWork/healthcare.png",
      content:
        "Launched to spearhead the beauty and health market, this division serves as the official distributor for ADWIN KOREA, specializing in dermatological consumables.",
    },
    {
      title: `Hospital Furniture`,
      imageSrc: { Hospital },
      // imageSrc: "/src/assets/howWeWork/hospital-svgrepo-com.png",
      content:
        "Providing high-quality hospital furniture solutions tailored to meet the evolving needs of healthcare facilities in Qatar. Our extensive range of products includes everything from examination tables and chairs to surgical instruments and medical equipment, all sourced from reputable manufacturers around the globe.",
    },
    {
      title: `Consumer Products`,
      imageSrc: { Consumer },
      // imageSrc: "/src/assets/howWeWork/consumer-svgrepo-com.png",
      content:
        "At United Medical Trading, we believe in empowering individuals with the tools necessary to manage their health effectively, making us the go-to choice for consumers seeking reliable and affordable medical products. From everyday essentials like first aid kits and thermometers to specialized products such as blood pressure monitors and portable oxygen concentrators, our curated collection caters to a broad spectrum of health and wellness needs.",
    },
    {
      title: `Dental Products`,
      imageSrc: { Dental },
      // imageSrc: "/src/assets/howWeWork/chair-tooth-svgrepo-com.png",
      content:
        "As a trusted partner in the medical trading sector, United Medical Trading prides itself on providing dental professionals with the tools they need to thrive, backed by unparalleled service and expertise. Explore our dental product range today and discover how we're setting new benchmarks in dental supply and innovation in Qatar.",
    },
    {
      title: `Laboratory Products`,
      imageSrc: { Laboratory },
      // imageSrc: "/src/assets/howWeWork/laboratory-microscope-svgrepo-com.png",
      content:
        "United Medical Trading brings to Qatar a comprehensive range of laboratory products, ensuring that medical laboratories have access to the most advanced and reliable equipment and supplies needed for accurate diagnostics and research. Our selection includes state-of-the-art lab instruments, reagents, and consumables, carefully chosen from renowned global manufacturers to meet the stringent requirements of modern pathology and biomedical research.",
    },
  ];
  return (
    <section id="how_we_work">
      <div className="container">
        <div className="howWeWork_container">
          <div className="howWeWork_Title">
            <Title className="subTitle" level={3}>
              How We Work
            </Title>
            <Title className="title poppins-font ">
              You Will Be Able To Access
            </Title>
            <Title className="title poppins-font ">
              By Following Our Departments
            </Title>
          </div>
          <div className="howWeWork_items">
            <Row gutter={16}>
              {items.map((item) => (
                <Col key={item.title} className="gutter-row" xs={24} md={8}>
                  <Space
                    className="col_box"
                    direction="vertical"
                    size="middle"
                    align="center"
                  >
                    <div className="icon_box">
                      <img src={item.imageSrc} alt="" />
                    </div>
                    <Title level={3}>{item.title} </Title>
                    <div className="text">
                      <Paragraph
                        ellipsis={
                          ellipsis
                            ? { rows: 3, expandable: true, symbol: "more" }
                            : false
                        }
                      >
                        {item.content}
                      </Paragraph>
                    </div>
                  </Space>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}
