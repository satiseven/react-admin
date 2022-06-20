import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import {
  dashboard,
  teams,
  signture,
  support,
  getmore,
  logout,
  inbox,
  pings,
  settings,
} from "../utils/sidebarIcons";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        <img src={logo} alt="MAILTAG" />
       </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/tables">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {inbox}
            </span>
            <span className="label">Inbox</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/billing">
            <span
              className="icon"
              style={{
                background: page === "billing" ? color : "",
              }}
            >
              {pings}
            </span>
            <span className="label">Pings</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/signture">
            <span
              className="icon"
              style={{
                background: page === "signture" ? color : "",
              }}
            >
              {signture}
            </span>
            <span className="label"> Signature Generator</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/rtl">
            <span
              className="icon"
              style={{
                background: page === "rtl" ? color : "",
              }}
            >
              {teams}
            </span>
            <span className="label">Team</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item className="menu-item-header" key="5">
          Get More Pro
        </Menu.Item> */}
        <Menu.Item key="7">
          <NavLink to="/sign-in">
            <span className="icon">{}</span>
            <span className="label">Get More Pro</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              {settings}
            </span>
            <span className="label">Settings</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="8">
          <NavLink to="/sign-up">
            <span className="icon">{support}</span>
            <span className="label">Support</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/sign-up">
            <span className="icon">{logout}</span>
            <span className="label">Log out</span>
          </NavLink>
        </Menu.Item>
      </Menu>
      <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            {dashboard}
          </span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            DOCUMENTATION
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
