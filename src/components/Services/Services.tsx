import { useState } from "react";
import "./services.css";
import { Col, Row, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Services() {
  const [ellipsis] = useState(true);
  return (
    <div id="services">
      <div className="container">
        <div className="services_container">
          <div className="title_container">
            <Title className="subTitle" level={3}>
              Services
            </Title>
            <Title className="title poppins-font ">Managed Your</Title>
            <Title className="title poppins-font ">Services</Title>
          </div>
          <div className="services_items">
            <Row gutter={16}>
              <Col className="gutter-row" xs={24} sm={12} >
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img src="/src/assets/services/ct-scan.png" alt="" />
                  </div>
                  <Title level={3}>Advanced Imaging Systems</Title>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? { rows: 3, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    Our advanced imaging systems are at the forefront of medical
                    technology. From state-of-the-art MRI and CT scanners to
                    high-resolution ultrasound machines, we provide healthcare
                    professionals with the tools they need to visualize and
                    diagnose medical conditions with unparalleled precision.
                  </Paragraph>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24} sm={12} >
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img
                      src="/src/assets/services/surgical-instrument.png"
                      alt=""
                    />
                  </div>
                  <Title level={3}>Surgical Instruments</Title>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? { rows: 3, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    Precision and reliability are paramount in the operating
                    room, and our range of surgical instruments is a testament
                    to these principles. We offer an extensive selection of
                    surgical tools and equipment, meticulously designed to
                    ensure the utmost accuracy and safety in surgical
                    procedures.
                  </Paragraph>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24} sm={12} >
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img src="/src/assets/services/diagnostic.png" alt="" />
                  </div>
                  <Title level={3}>Diagnostic Equipments</Title>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? { rows: 3, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    Keeping a vigilant eye on patients' vital signs is integral
                    to effective care. NordMed Trading offers a comprehensive
                    line of patient monitoring devices that are not only
                    reliable but also intuitive, helping healthcare providers
                    monitor and react to patient needs swiftly.
                  </Paragraph>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24} sm={12} >
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img src="/src/assets/services/massage.png" alt="" />
                  </div>
                  <Title level={3}>Rehabilitaion Aids</Title>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? { rows: 3, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    Effective patient rehabilitation is an essential part of the
                    healing process. We provide a range of rehabilitation aids
                    and physiotherapy equipment designed to aid in patient
                    recovery and improve overall quality of life.
                  </Paragraph>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
