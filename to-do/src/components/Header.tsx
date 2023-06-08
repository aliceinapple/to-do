import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Switch } from "antd";

const Header = () => {
  return (
    <header className="header">
      <Switch />
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Button type="primary" htmlType="submit" danger>
          Sign out
        </Button>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </header>
  );
};

export default Header;
