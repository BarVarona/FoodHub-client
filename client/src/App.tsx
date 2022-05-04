import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useEffect } from "react";
import { dishs } from "./api/dishs";
function App() {
  useEffect(() => {
    const foo = async () => {
      await dishs()

    }
    foo()
  },[])
  return (
    <div>
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
