import "./visionMission.css";
import { Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function VisionMisson() {
  return (
    <section id="visionMission">
      <div className="container">
        <div className="visionMission_container">
          <Row gutter={16}>
            <Col className="gutter-row main_image" sm={24} lg={12}>
              <div className="col_box">
                <div className="image_box">
                  {/* <img src="/src/assets/visionMission/chooseUs.jpg" alt="" /> */}
                </div>
              </div>
            </Col>
            <Col className="gutter-row" sm={24} lg={12}>
              <div className="col_box info">
                <Title className="subTitle" level={3}>
                  Vision &amp; Mission
                </Title>
                <Title className="title poppins-font ">Keep Going With</Title>
                <Title className="title poppins-font ">Your Passion.</Title>
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
                    <div className="image_box">
                      <img src="/src/assets/vision&mission/eye-2.png" alt="" />
                    </div>
                    <Paragraph>
                      United Medical Trading aims to be the foremost and largest
                      purveyor of medical, fitness, and sports equipment in the
                      Middle East, addressing the needs of healthcare
                      organizations and personal users alike. Our goal is to
                      attain global recognition as a brand emblematic of
                      fostering a healthy lifestyle. Committed to quality,
                      innovation, and customer fulfillment, we seek to pioneer
                      new heights in the industry, catalyzing health and
                      wellness initiatives beyond geographical boundaries.
                    </Paragraph>
                  </li>
                  <li>
                    <div className="image_box">
                      <img
                        src="/src/assets/vision&mission/mission-2.png"
                        alt=""
                      />
                    </div>
                    <Paragraph>
                      Our mission is to provide top-tier medical, sports, and
                      fitness equipment, demonstrating exceptional therapeutic
                      benefits to our customers. We are dedicated to empowering
                      individuals who aspire to live healthier lives and support
                      the delivery of cutting-edge, impactful medical care.
                    </Paragraph>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
