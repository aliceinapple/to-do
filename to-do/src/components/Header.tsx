import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Switch } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.getItem("token") ?? navigate("/");
  };

  return (
    <header className="header">
      <Switch />
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Button type="primary" htmlType="submit" onClick={handleClick} danger>
          Sign out
        </Button>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </header>
  );
};

export default Header;
