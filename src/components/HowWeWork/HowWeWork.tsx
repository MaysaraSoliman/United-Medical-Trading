import "./howWeWork.css";
import { Col, Row, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function HowWeWork() {
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
             By Following 3 Steps
            </Title>
          </div>
          <div className="howWeWork_items">
            <Row gutter={16}>
              <Col className="gutter-row" xs={24}  md={8} >
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img
                      src="/src/assets/howWeWork/medical analytical.png"
                      alt=""
                    />
                  </div>
                  <Title level={3}>Medical &amp; Analytical</Title>
                  <div className="text">
                    <Paragraph>
                      Deals with medical/analytical equipment, devices &
                      supplies. Our main activities center on Medical,
                      Physiotherapy, Dermatology, Gynaecology, X—Ray,
                      Ultrasound, Simulation & Emergency products.
                    </Paragraph>
                  </div>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24}  md={8} >
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img
                      src="/src/assets/howWeWork/research.png"
                      alt=""
                    />
                  </div>
                  <Title level={3}>
                    Research &amp; Scientific &amp; Simulation
                  </Title>
                  <div className="text">
                    <Paragraph>
                      Deals with Researches & Scientific projects. Our main
                      customers are Scientists & Researches. We assist them in
                      Supply, Install, Commissioning, Training, and After Sales
                      Support for all the Solutions & Equipment provided by us.
                    </Paragraph>
                  </div>
                </Space>
              </Col>
              <Col className="gutter-row" xs={24}  md={8} >
                <Space
                  className="col_box"
                  direction="vertical"
                  size="middle"
                  align="center"
                >
                  <div className="icon_box">
                    <img
                      src="/src/assets/howWeWork/healthcare.png"
                      alt=""
                    />
                  </div>
                  <Title level={3}>Beauty &amp; Health  </Title>
                  <div className="text">
                    <Paragraph>
                      Started this department to lead the market. We are
                      official distributors for ADWIN KOREA Manufacturer and
                      dermatology consumables.
                    </Paragraph>
                  </div>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}
