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
            <Col className="gutter-row" sm={24} lg={12}>
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
                    <Title level={3}>Quality and Care.</Title>
                  </li>
                  <li>
                    <CheckOutlined />
                    <Title level={3}>Healthcare Excellence.</Title>
                  </li>
                  <li>
                    <CheckOutlined />
                    <Title level={3}>Customer Orientation.</Title>
                  </li>
                  <li>
                    <CheckOutlined />
                    <Title level={3}>Advanced Medical Solutions.</Title>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="gutter-row main_image" sm={24} lg={12}>
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
