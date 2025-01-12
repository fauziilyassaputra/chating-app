import "./App.css";
import Home from "./pages/home/home";
import { Login } from "./pages/login/login";
import SignUp from "./pages/singup/signup";
import signUp from "./pages/singup/signup";
function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
