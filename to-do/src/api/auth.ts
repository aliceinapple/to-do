import { AuthState } from "./register";

export const authUser = async (data: AuthState) => {
  const response = await fetch(
    "https://todo-redev.herokuapp.com/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data.token;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};

export const getUser = async () => {
  const response = await fetch(`https://todo-redev.herokuapp.com/api/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    const userData = data.find(
      (item: AuthState) => item.email === localStorage.getItem("email")
    );
    return userData;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};
