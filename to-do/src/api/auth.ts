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
