import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  return <h1>Welcome, {user?.name}!</h1>;
}