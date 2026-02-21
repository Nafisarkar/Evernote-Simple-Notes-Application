import { Link } from "react-router";

function Heropage() {
  return (
    <div>
      - Heropage
      <Link to="/login"> login</Link>
      <Link to="/register"> register</Link>
    </div>
  );
}

export default Heropage;
