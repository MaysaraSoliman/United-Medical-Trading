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
                      We intend to be the most reliable leader and biggest
                      provider of medical, fitness and sport devices for
                      healthcare facilities and individuals in Middle East
                      region as we also aim to become a worldwide recognized
                      brand which will associate with healthy lifestyle.
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
                      We supply medical, sports & fitness equipment of the
                      highest quality and proven physio therapeutical results to
                      every customer who wish to live a healthy life,
                      provide advanced and effective medical service.
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
