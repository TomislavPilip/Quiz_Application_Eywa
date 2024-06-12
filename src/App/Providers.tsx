import { FC, useEffect, useState, ReactNode } from "react";
import { setAuthToken } from "../utils/gql";
import { Api } from "../utils/login";
import { UserProvider, UserState } from "../context/userContext";
import { Loader } from "../components/ui/Loader";



interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  const [isLoading, setLoading] = useState(() => true);
  const [initialUser, setInitialUser] = useState<UserState>({
    token: "",
    userData: null,
  });

  // initial auth
  useEffect(() => {
    const token = localStorage.getItem("token");

    async function getUserData() {
      try {
        const data = await Api.whoami(token);
        setAuthToken(token);
        setInitialUser({ token, userData: data });
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    }

    if (token) {
      getUserData().catch(() => null);
      return;
    }

    setLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader fullscreen />
      ) : (
          <UserProvider initialState={initialUser}>
           {children}
          </UserProvider>
      )}
    </>
  );
};
