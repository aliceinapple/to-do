import { Form, Input, Button, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { authUser } from "../api/auth";
import { AuthState, registerUser } from "../api/register";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userDataSlice";
import { useNavigate } from "react-router-dom";

interface ErrorState {
  param: string;
  msg: string;
}

const AuthForm = () => {
  const [errors, setErrors] = useState<AuthState>({});
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: AuthState) => {
    if (isRegister) {
      const data = await authUser({
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", data);
      localStorage.getItem("token") && navigate("/main");
    } else {
      const data = await registerUser({
        email: values.email,
        password: values.password,
        username: values.username,
        age: values.age,
        gender: values.gender ?? "female",
      });
      const err = data?.errors?.reduce((acc: AuthState, item: ErrorState) => {
        return { ...acc, [item.param]: item.msg };
      }, {});
      setErrors(err);
      setMessage(data.message);
      if (!err && !data.message) {
        setIsRegister(true);
        dispatch(setUserData(data));
      }
    }
  };

  const switchForm = (e: RadioChangeEvent) => {
    e.target.value === "sign up" ? setIsRegister(false) : setIsRegister(true);
  };

  return (
    <>
      <Radio.Group defaultValue="sign up" onChange={switchForm}>
        <Radio.Button value="sign in">Sign in</Radio.Button>
        <Radio.Button value="sign up">Sign up</Radio.Button>
      </Radio.Group>
      <Form onFinish={onSubmit}>
        {message}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Enter email" }]}
          validateStatus={errors?.email && "error"}
          help={errors?.email}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Enter password" }]}
          validateStatus={errors?.password && "error"}
          help={errors?.password}
        >
          <Input.Password />
        </Form.Item>

        {!isRegister && (
          <>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Enter username" }]}
              validateStatus={errors?.username && "error"}
              help={errors?.username}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Gender" name="gender">
              <Radio.Group defaultValue="female">
                <Radio.Button value="female">Female</Radio.Button>
                <Radio.Button value="male">Male</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "Enter your age" }]}
              validateStatus={errors?.age?.toString() && "error"}
              help={errors?.age}
            >
              <Input />
            </Form.Item>
          </>
        )}

        <Form.Item>
          {!isRegister ? (
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          ) : (
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default AuthForm;
