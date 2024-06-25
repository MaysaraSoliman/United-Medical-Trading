import { useMediaQuery } from "react-responsive";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import DesktopNavBar from "../DesktopNavBar/DesktopNavBar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainHeader() {
  const isMobile = useMediaQuery({ query: "(min-width: 600px)" });
  const logo = "/src/assets/logo/logo.jpg";
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "",
    },
    {
      label: <a href="#aboutUs">About Us</a>,
      key: "about us",
    },
    {
      label: <a href="#services">Services</a>,
      key: "services",
    },
    {
      label:  <a href="#partners">Partners</a>,
      key: "partners",
    },
    {
      label: <a href="#footer">Contact Us</a>,
      key: "contact us",
    },
  ];

  const [selectedKey, setSelectedKey] = useState<string>("");


  return (
    <div className="main_header">
      {isMobile ? (
        <DesktopNavBar
          logo={logo}
          navItems={items}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
      ) : (
        <MobileNavBar
          logo={logo}
          navItems={items}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
      )}
    </div>
  );
}
