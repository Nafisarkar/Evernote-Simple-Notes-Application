import { Routes, Route } from "react-router";
import Heropage from "./pages/Heropage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <div className="relative w-screen h-screen bg-retro-surface text-retro-accent overflow-hidden ">
      <div className="grain-overlay pointer-events-none fixed inset-0 z-50" />
      <div className="flex flex-col w-full h-full p-4 mx-auto">
        <Routes>
          <Route path="/" element={<Heropage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/*" element={<Notfoundpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
