import { useState } from "react";
import "./services.css";
import { Col, Row, Space, Typography } from "antd";
import ImagingSystems from "/src/assets/services/ct-scan.png";
import SurgicalInstruments from "/src/assets/services/surgical-instrument.png";
import DiagnosticEquipments from "/src/assets/services/diagnostic.png";
import RehabilitaionAids from "/src/assets/services/massage.png";

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
              <Col className="gutter-row" xs={24} sm={12}>
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img src={ImagingSystems} alt="icon" />
                    {/* <img src="/src/assets/services/ct-scan.png" alt="icon" /> */}
                  </div>
                  <Title level={3}>Advanced Imaging Systems</Title>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? { rows: 3, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    Our cutting-edge imaging systems represent the pinnacle of
                    medical technology, featuring state-of-the-art MRI and CT
                    scanners alongside high-resolution ultrasound machines.
                    These sophisticated tools empower healthcare professionals
                    to visualize and diagnose medical conditions with unmatched
                    accuracy, setting a new standard in patient care.
                  </Paragraph>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img
                      src={SurgicalInstruments}
                      // src="/src/assets/services/surgical-instrument.png"
                      alt="icon"
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
                    In the realm of surgery, where precision and reliability are
                    of utmost importance, our portfolio of surgical instruments
                    exemplifies these core values. Featuring an array of
                    meticulously crafted surgical tools and equipment, our
                    offerings are engineered to guarantee unparalleled accuracy
                    and safety during surgical interventions.
                  </Paragraph>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img src={DiagnosticEquipments} alt="icon" />
                    {/* <img src="/src/assets/services/diagnostic.png" alt="icon" /> */}
                  </div>
                  <Title level={3}>Diagnostic Equipments</Title>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? { rows: 3, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    Monitoring patients' vital signs with keen attention is
                    fundamental to providing effective care. United Trading
                    provides a wide range of patient monitoring devices that are
                    dependable and user-friendly, aiding healthcare
                    professionals in promptly responding to patients'
                    requirements. Our diagnostic apparatus comprises
                    state-of-the-art laboratory analyzers, point-of-care testing
                    gadgets, and imaging diagnostic tools, laying the groundwork
                    for precise medical practices. These tools empower
                    healthcare practitioners to act swiftly based on accurate
                    diagnoses.
                  </Paragraph>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img src={RehabilitaionAids} alt="icon" />
                    {/* <img src="/src/assets/services/massage.png" alt="icon" /> */}
                  </div>
                  <Title level={3}>Rehabilitaion Aids</Title>
                  <Paragraph
                    ellipsis={
                      ellipsis
                        ? { rows: 3, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    A crucial component of the healing journey is the successful
                    rehabilitation of patients. Our collection of rehabilitation
                    aids and physiotherapy gear is meticulously crafted to
                    facilitate patient recuperation and elevate their overall
                    well-being.
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
