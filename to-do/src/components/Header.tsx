import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Switch } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface HeaderState {
  switchTheme: (checked: boolean) => void;
}

const Header: React.FC<HeaderState> = ({ switchTheme }) => {
  const navigate = useNavigate();
  const isSignedIn = localStorage.getItem("token");
  const userData = useSelector((state: RootState) => state.userData);
  const isAuthPage = window.location.pathname === "/auth";

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };

  const redirectToAuthPage = () => {
    navigate("/auth");
  };

  const goToWelcomePage = () => {
    navigate("/welcome");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span>
          <b>Username:</b> {userData.username}
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <b>Email:</b> {userData.email}
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <b>Gender:</b> {userData.gender}
        </span>
      ),
    },
    {
      key: "4",
      label: (
        <span>
          <b>Age:</b> {userData.age}
        </span>
      ),
    },
  ];

  const onChange = (checked: boolean) => {
    switchTheme(checked);
  };

  return (
    <header className="header">
      <Switch onChange={onChange} />
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Button
          type="default"
          htmlType="submit"
          onClick={
            isAuthPage
              ? goToWelcomePage
              : isSignedIn
              ? signOut
              : redirectToAuthPage
          }
          ghost
        >
          {isAuthPage
            ? "Welcome page"
            : isSignedIn
            ? "Sign out"
            : "Sign up | Sign in"}
        </Button>

        <Avatar
          size="large"
          icon={
            isSignedIn ? (
              <Dropdown menu={{ items }} placement="bottomRight">
                <span style={{ cursor: "pointer" }}>
                  {userData.username[0]?.toUpperCase()}
                </span>
              </Dropdown>
            ) : (
              <UserOutlined />
            )
          }
        />
      </div>
    </header>
  );
};

export default Header;
