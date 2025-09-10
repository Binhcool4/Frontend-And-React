import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const CustomLink = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/home-page") {
      navigate("/NotFound", { replace: true });
    }
  }, [location, navigate]);

  return <Link to="/HomePage">Go to HomePage</Link>;
};

export default CustomLink;
