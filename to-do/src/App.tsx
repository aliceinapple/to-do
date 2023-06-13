import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Routing from "./components/Routing";
import { AppDispatch } from "./redux/store";
import { useEffect, useState } from "react";
import { getUser } from "./api/auth";
import { setUserData } from "./redux/userDataSlice";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const initValues = async () => {
      const userInfo = await getUser();
      userInfo && dispatch(setUserData(userInfo));
    };
    initValues();
  }, [dispatch]);

  const switchTheme = (checked: boolean) => {
    setIsDark(checked);
  };

  return (
    <div className={!isDark ? "app" : "app-dark"}>
      <Header switchTheme={switchTheme} />
      <main className="main">
        <Routing />
      </main>
    </div>
  );
}

export default App;
