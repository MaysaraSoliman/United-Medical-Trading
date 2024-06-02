import { Col, Row, Typography } from "antd";
import "./whyChooseUs.css";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function WhyChooseUs() {
  return (
    <section id="whyChooseUs">
      <div className="container">
        <div className="whyChooseUs_container">
          <Row gutter={16}>
            <Col className="gutter-row" sm={24} md={12}>
              <div className="col_box info">
                <Title className="subTitle" level={3}>
                  Why Choose Us
                </Title>
                <Title className="title poppins-font ">United Medical</Title>
                <Title className="title poppins-font ">Trading.</Title>
                <div className="text">
                  <Paragraph>
                    we're not just a supplier; we're a partner in your pursuit
                    of better health, fitness, and wellness. Join us in
                    realizing your aspirations for a healthier life and advanced
                    medical services.
                  </Paragraph>
                </div>
                <ul className="items">
                  <li>
                    <CheckOutlined />
                    <Title level={3}>Quality Assurance.</Title>
                  </li>
                  <li>
                    <CheckOutlined />
                    <Title level={3}>Customer-Centric Approach.</Title>
                  </li>
                  <li>
                    <CheckOutlined />
                    <Title level={3}>Healthier Lives.</Title>
                  </li>
                  <li>
                    <CheckOutlined />
                    <Title level={3}>Advanced Medical Services.</Title>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="gutter-row mm" sm={24} md={12}>
              <div className="col_box">
                <div className="image_box">
                  {/* <img src="/src/assets/whyChooseUs/chooseUs.jpg" alt="" /> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
