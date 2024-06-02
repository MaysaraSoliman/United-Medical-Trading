import { Link } from "react-router-dom";
import "./desktopNavBar.css";
import { Flex, Menu, MenuProps } from "antd";

export default function DesktopNavBar({
  navItems,
  selectedKey,
  handleNavBarSelectedKey,
  logo,
  setSelectedKey
}: {
  navItems: { label: JSX.Element | string; key: string }[];
  selectedKey: string;
  handleNavBarSelectedKey: MenuProps["onClick"];
  logo: string;
  setSelectedKey: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div id="desktop_navBar">
      <div className="container">
        <Flex align="center" justify="space-between">
          <Link to={"/"} className="logo" >
            <img src={logo} alt="logo" onClick={()=>{setSelectedKey("")}} />
          </Link >
          <nav className="navBar">
            <Menu
              onClick={handleNavBarSelectedKey}
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={navItems}
            />
          </nav>
        </Flex>
      </div>
    </div>
  );
}
