import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Action, UserReducer } from "./UserReducer";
import { User } from "../Types/UserType";

interface UserContextType {
    state: User;
    dispatch: Dispatch<Action>
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function ProviderUser({ children }: { children: ReactNode }) {
    const initialState: User = {};
    const [state, dispatch] = useReducer(UserReducer, initialState);
    return (
        <>
            <UserContext value={{ state, dispatch }}>
                {children}
            </UserContext>
        </>
    )
}

