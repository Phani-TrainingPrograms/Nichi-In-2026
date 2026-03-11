import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
      <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
      {token && (
        <>
          <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}