import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Switch } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isSignedIn = localStorage.getItem("token");

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const redirectToAuthPage = () => {
    navigate("/auth");
  };

  return (
    <header className="header">
      <Switch />
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {isSignedIn ? (
          <Button type="primary" htmlType="submit" onClick={signOut} danger>
            Sign out
          </Button>
        ) : (
          <Button type="primary" htmlType="submit" onClick={redirectToAuthPage}>
            Sign up / Sign in
          </Button>
        )}
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </header>
  );
};

export default Header;
