import { Form, Input, Button } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
  email: string;
};

const AuthForm = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);
  const [isRegister, setIsRegister] = useState(true);

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      {!isRegister && (
        <Form.Item
          label="Enter username"
          name="username"
          rules={[{ required: true, message: "Enter username" }]}
        >
          <Input />
        </Form.Item>
      )}
      {errors.username && <span>Incorrect value</span>}

      <Form.Item
        label="Enter email"
        name="email"
        rules={[{ required: true, message: "Enter email" }]}
      >
        <Input type="email" />
      </Form.Item>
      {errors.email && <span>Incorrect value</span>}

      <Form.Item
        label="Enter password"
        name="password"
        rules={[{ required: true, message: "Enter password" }]}
      >
        <Input.Password />
      </Form.Item>
      {errors.password && <span>Incorrect value</span>}

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
  );
};

export default AuthForm;
