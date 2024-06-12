import React,{ FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useUser } from "../context/userContext";

interface Props {
  children: ReactElement<any, any>;
}

export const RequiresAuth: FC<Props> = ({ children }) => {
  const { token } = useUser();
  const isAuthenticated = Boolean(token);
  if (!isAuthenticated) {
    return <Navigate to={`${import.meta.env.BASE_URL}`} />;
  }
  return children;
};
