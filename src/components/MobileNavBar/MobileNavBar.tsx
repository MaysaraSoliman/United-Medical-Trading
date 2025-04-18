import { Drawer, Flex, Menu } from "antd";
import "./mobileNavBar.css";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function MobileNavBar({
  navItems,
  selectedKey,
  logo,
  setSelectedKey
}: {
  navItems: { label: JSX.Element | string; key: string }[];
  selectedKey: string;
  logo: string;
  setSelectedKey: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const showDrawer = () => {
    setIsOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setIsOpenDrawer(false);
  };
  return (
    <div id="mobile_navBar">
      <div className="container">
        <Flex align="center" justify="space-between">
          <Link to={"/"} className="logo">
            <img src={logo} alt="logo" onClick={()=>{setSelectedKey("")}} />
          </Link>
          <div className="menu_icon">
            <MenuOutlined onClick={showDrawer} />
          </div>
          <Drawer onClose={onCloseDrawer} open={isOpenDrawer}>
            <nav className="navBar">
              <Menu
                mode="vertical"
                selectedKeys={[selectedKey]}
                items={navItems.map(item => ({
                  key: item.key,
                  label: item.label,
                  onClick: () => onCloseDrawer(),
                }))}
              />
            </nav>
          </Drawer>
        </Flex>
      </div>
    </div>
  );
}
