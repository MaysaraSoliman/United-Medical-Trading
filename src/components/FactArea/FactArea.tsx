import "./factArea.css";
import { Typography } from "antd";

const { Title } = Typography;

export default function FactArea() {
  return (
    <section id="factArea">
      <div className="container">
        <div className="fact_container">
          <Title className="subTitle" level={3}>
            Health Care Services
          </Title>
          <Title className="title poppins-font ">Don’t Hesitate, Contact Us For Better  </Title>
          <Title className="title poppins-font ">Help &amp; Services.</Title>
        </div>
      </div>
    </section>
  );
}
