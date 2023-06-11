import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Routing from "./components/Routing";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { getTodos } from "./redux/todoThunk";
import { getUser } from "./api/auth";
import { setUserData } from "./redux/userDataSlice";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const initValues = async () => {
      const userInfo = await getUser();
      userInfo && dispatch(setUserData(userInfo));
      dispatch(getTodos());
    };
    initValues();
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="main">
        <Routing />
      </main>
    </>
  );
}

export default App;
