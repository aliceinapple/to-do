export interface AuthState {
  username?: string;
  password?: string;
  email?: string;
  gender?: string;
  age?: number;
}

export const registerUser = async (data: AuthState) => {
  try {
    const response = await fetch(
      "https://todo-redev.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
