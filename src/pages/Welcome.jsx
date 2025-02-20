import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); // Runs when `user` or `navigate` changes

  if (!user) {
    return null; // Prevent rendering if redirecting
  }

  return <h1>Welcome, {user.name}!</h1>;
}
