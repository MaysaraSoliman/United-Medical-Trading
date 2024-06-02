import "./aboutUs.css";
import { Flex, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  return (
    <div id="aboutUs">
      <div className="container">
        <Flex align="center" justify="center" gap={"20px"}>
          <div className="info_container">
            <Title className="subTitle" level={3}>
              About Us
            </Title>
            <div className="info_title">
              <Title className="poppins-font ">Short Story</Title>
              <Title className="poppins-font ">About United </Title>
            </div>
            <div className="info_paragraph">
              <Paragraph>
                United Medical Suppliers Trading was founded in 2020 in the
                State of Qatar in response to the Qatari robust and ever—growing
                medical field market needs. Conceived through the efforts of
                seasoned business administration and technical professionals, we
                are well equipped to provide excellent unsurpassed services to
                our clients in both the governmental and private sectors.
              </Paragraph>
              <Paragraph>
                United Medical Suppliers principals are specifically well versed
                in the Qatari medical field market, as they have already been
                providing their services to it for more than 3 years. Their
                expertise extends to the Biomedical Engineering, Information
                Technology, Business Administration, and Customer Service
                fields, which gives us on edge that will help us reach our goal
                of becoming.
              </Paragraph>
            </div>
          </div>
          <div className="image_container">
            <div className="image_box">
              <img src="/src/assets/about/about-img.jpg" alt="" />
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
}
