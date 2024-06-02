import "./counting.css";
import type { StatisticProps } from "antd";
import { Col, Row, Statistic } from "antd";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Counting() {
  const [isInView, setIsInView] = useState(false);
  const formatter: StatisticProps["formatter"] = (value) =>
    isInView ? <CountUp end={value as number} separator="," /> : value;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the target is visible
      }
    );

    const target = document.getElementById("counting");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div id="counting">
      <div className="container">
        <div className="counting_container">
          <Row gutter={16}>
            <Col xs={12} md={6}>
              <Statistic title="Partners" value={12} formatter={formatter} />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Clients"
                value={60}
                precision={2}
                formatter={formatter}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Team"
                value={10}
                precision={2}
                formatter={formatter}
              />
            </Col>
            <Col xs={12} md={6}>
              <Statistic
                title="Projects"
                value={100}
                precision={2}
                formatter={formatter}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
