import Sidebar from "../components/Sidebar";
import Viewport from "../components/Viewport";

function Homepage() {
  return (
    <div className="flex flex-row h-full w-full gap-8">
      <Sidebar />
      <Viewport />
    </div>
  );
}

export default Homepage;
