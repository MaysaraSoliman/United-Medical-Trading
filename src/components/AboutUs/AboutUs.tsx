import "./aboutUs.css";
import { Flex, Typography } from "antd";
import AboutUsImage from "/src/assets/about/about-img.jpg";

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
                United Medical Trading, established in 2019 within the rapidly
                developing healthcare sector of Qatar, was formed to address the
                increasing demands of the Qatari medical marketplace. Guided by
                a team of seasoned professionals with expertise in business
                administration and technological disciplines, the company is
                strategically positioned to offer unparalleled service to its
                clientele across both governmental and private sectors.
              </Paragraph>
              <Paragraph>
                The leadership of United Medical Trading is characterized by its
                deep-rooted knowledge and extensive experience in the Qatari
                healthcare industry, a commitment demonstrated through over four
                years of dedicated service to this market. Their areas of
                expertise encompass Biomedical Engineering, Information
                Technology, Business Administration, and Customer Service,
                thereby granting the company a distinctive competitive edge as
                it endeavors to fulfill its ambitious objectives.
              </Paragraph>
            </div>
          </div>
          <div className="image_container">
            <div className="image_box">
              <img src={AboutUsImage} alt="about-image" />
              {/* <img src="/src/assets/about/about-img.jpg" alt="" /> */}
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
}
