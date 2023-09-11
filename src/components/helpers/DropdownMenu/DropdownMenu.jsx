import "./dropdownmenu.css";
import { Dropdown } from "antd";
import { Turn as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

function DropdownMenu() {

  const items = [
    {
      label: <Link to="/">Inicio</Link>,
      key: "0",
    },
    {
      label: <Link to="/docs">Docs</Link>,
      key: "1",
    },
    {
      label: <Link to="/">Github</Link>,
      key: "2",
    },
  ];
  return (
    <div className="mainContainerDropdownMenu">
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a>
            <Hamburger />
        </a>
      </Dropdown>
    </div>
  );
}

export default DropdownMenu;
