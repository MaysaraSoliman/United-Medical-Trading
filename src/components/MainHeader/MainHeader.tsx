import { useMediaQuery } from "react-responsive";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import DesktopNavBar from "../DesktopNavBar/DesktopNavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuProps } from "antd";

export default function MainHeader() {
  const isMobile = useMediaQuery({ query: "(min-width: 600px)" });
  const logo = "/src/assets/logo/logo.jpg";
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "",
    },
    {
      label: "About Us",
      key: "about us",
    },
    {
      label: "Services",
      key: "services",
    },
    {
      label: "Team",
      key: "team",
    },
    {
      label: "Contact Us",
      key: "contact us",
    },
  ];

  const [selectedKey, setSelectedKey] = useState<string>("");
  const handleNavBarSelectedKey: MenuProps["onClick"] = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <div className="main_header">
      {isMobile ? (
        <DesktopNavBar
          logo={logo}
          navItems={items}
          selectedKey={selectedKey}
          handleNavBarSelectedKey={handleNavBarSelectedKey}
          setSelectedKey= {setSelectedKey}
        />
      ) : (
        <MobileNavBar
          logo={logo}
          navItems={items}
          selectedKey={selectedKey}
          handleNavBarSelectedKey={handleNavBarSelectedKey}
          setSelectedKey= {setSelectedKey}
        />
      )}
    </div>
  );
}
