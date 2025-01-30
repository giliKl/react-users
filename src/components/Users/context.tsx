import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Action, User, userReducer } from "../../Types/User";

interface UserContextType {
    state: User;
    dispatch: Dispatch<Action>
}
export const userContext = createContext<UserContextType | undefined>(undefined);

export function ProviderUser({ children }: { children: ReactNode }) {
    const initialState: User = {};
    const [state, dispatch] = useReducer(userReducer, initialState);
        return (
        <>
            <userContext.Provider value={{ state, dispatch }}>
                {children}
            </userContext.Provider>

        </>
    )
}

