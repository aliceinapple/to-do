import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Routing from "./components/Routing";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { getUser } from "./api/auth";
import { setUserData } from "./redux/userDataSlice";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const initValues = async () => {
      const userInfo = await getUser();
      userInfo && dispatch(setUserData(userInfo));
    };
    initValues();
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routing />
      </main>
    </div>
  );
}

export default App;
