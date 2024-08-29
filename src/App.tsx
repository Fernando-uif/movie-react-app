import { useState } from "react";
import { Auth } from "./components/auth/Auth";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Auth isLogin={isLogin} setIsLogin={setIsLogin} />
    </>
  );
}

export default App;
