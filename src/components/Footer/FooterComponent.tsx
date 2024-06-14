import { Typography, Row, Col } from "antd";
import "./footer.css";

const { Title, Text } = Typography;
export default function FooterComponent() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer_container">
          <Row className="gutter_box" gutter={16}>
            <Col className="message_container" xs={24} lg={8}>
              <div className="col_box">
                <Title level={3}>About Us</Title>
                <Text>
                  United Medical Suppliers Trading was founded in 2020 in the
                  State of Qatar in response to the Qatari robust and
                  ever—growing medical field market needs. Conceived through the
                  efforts of seasoned business administration and technical
                  professionals, we are well equipped to provide excellent
                  unsurpassed services to our clients in both the governmental
                  and private sectors.
                </Text>
                <ul className="links">
                  <li>
                    <div className="image_box">
                      <a href="https://www.facebook.com/" target="_blank">
                        <img src="/src/assets/linksIcons/facebook.png" alt="" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="image_box">
                      <a href="https://www.twitter.com/" target="_blank">
                        <img src="/src/assets/linksIcons/twitter.png" alt="" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="image_box">
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/src/assets/linksIcons/instagram.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="image_box">
                      <a href="https://www.linkedin.com/" target="_blank">
                        <img src="/src/assets/linksIcons/linkedin.png" alt="" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="call_container" xs={24} lg={8}>
              <div className="col_box">
                <div className="title_container">
                  <div className="image_box">
                    <img src="/src/assets/linksIcons/contact-mail.png" alt="" />
                  </div>
                  <div className="title_box">
                    <Title level={3}>Contact & Support</Title>
                    <Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </Text>
                  </div>
                </div>
                <ul className="contact_icons">
                  <li>
                    <div className="image_box">
                      <img src="/src/assets/linksIcons/call.png" alt="" />
                    </div>
                    <a href="tel:+97452009991" title="Call us">
                      +97452009991
                    </a>
                  </li>
                  <li>
                    <div className="image_box">
                      <img src="/src/assets/linksIcons/mail.png" alt="" />
                    </div>
                    <a
                      href="mailto: info@unitedmedicaltrading.com"
                      target="_blank"
                      title="Contact us"
                    >
                      info@unitedmedicaltrading.com
                    </a>
                  </li>
                  <li>
                    <div className="image_box">
                      <img
                        src="/src/assets/linksIcons/world-wide-web.png"
                        alt=""
                      />
                    </div>
                    <a
                      href="https://unitedmedicaltrading.com/"
                      target="_blank"
                      title="Website"
                    >
                      www.unitedmedicaltrading.com
                    </a>
                  </li>
                  <li>
                    <div className="image_box">
                      <img src="/src/assets/linksIcons/location.png" alt="" />
                    </div>
                    <a
                      href="https://maps.app.goo.gl/4SuQZfdy7pz2fNHB6"
                      target="_blank"
                      title="Location"
                    >
                      Lusail, Qatar
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="schedule_container" xs={24} lg={8}>
              <div className="col_box opening_hours">
                <div className="title_container">
                  <div className="image_box">
                    <img
                      src="/src/assets/linksIcons/clock-icon-red.png"
                      alt=""
                    />
                  </div>
                  <div className="title_box">
                    <Title level={3}>Opening Hours</Title>
                    <Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </Text>
                  </div>
                </div>
                <ul className="contact_icons">
                  <li>
                    <Title level={4}>Saturday to Thursday</Title>
                    <Title level={4}>8:00 - 16:00</Title>
                  </li>
                  <li>
                    <Title level={4}>Friday</Title>
                    <Title level={4}>Closed</Title>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="copyRights">
          <Title level={4}>
            &copy;2024 • All Rights Reserved | MADE BY EXPANDA WITH{" "}
            <span className="heart">❤</span>{" "}
          </Title>
        </div>
      </div>
    </div>
  );
}
