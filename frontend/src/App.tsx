import { Routes, Route } from "react-router";
import Heropage from "./pages/Heropage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <div className="bg-retro-surface text-retro-accent w-screen h-screen min-w-2xs min-h-2xs overflow-hidden relative">
      {/* Decorative background elements */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-retro-primary/5 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-retro-secondary/5 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="flex flex-col w-full h-full p-6  mx-auto relative ">
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
