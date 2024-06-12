import { User } from "../assets/Interfaces/User";
import { isNonNullObject } from "@apollo/client/utilities";
import React, {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  ReactNode,
} from "react";

interface Action {
  type: string;
  value?: any;
}

export interface UserState {
  token?: string | null;
  userData?: any;
}

interface Props {
  children?: ReactNode;
  initialState?: UserState;
  // any props that come into the component
}

interface UserContextType {
  token?: string | null;
  userData?: any;

}

const defaultState: UserState = {
  token: "",
  userData: null,
};

const reducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "setToken": {
      return { ...state, token: action.value };
    }
    case "setUserData": {
      return { ...state, userData: action.value };
    }
    case "login": {
      const { userData, token } = action.value;
      return { ...state, userData, token };
    }
    case "logout": {
      localStorage.removeItem("token");
      return { ...state, userData: null, token: "" };
    }
    default:
      return state;
  }
};
const UserContext = createContext<UserContextType>({
  token: "",
  userData: null,
 
});
const UserDispatchContext = createContext<Dispatch<Action>>(isNonNullObject);

export function UserProvider({ children, initialState = defaultState }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("User Provider State: ", state);

  return (
    <UserContext.Provider
      value={{ userData: state.userData, token: state.token}}
    >
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}
