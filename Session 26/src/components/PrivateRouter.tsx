import { useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }: { children: React.ReactNode }) {
  const [isAuthenticated] = useState(true);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

export default PrivateRouter;
