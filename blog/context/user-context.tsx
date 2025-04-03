"use client";
import { createContext, useContext } from "react";

// User Context
// This context will be used to manage user data across the application
// It will also handle user authentication and other user-related actions
// The context will be used to pass down user data and functions to child components
interface UserContextType {
    name: string;
    email: string;
}
export const UserContext = createContext<UserContextType | null>(null);

// User Providr
// This provider will wrap the application and provide user data to all components
// It will also handle user authentication and other user-related actions
// The provider will use the UserContext to pass down user data and functions to child components
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const name = "John Doe";
    const email = "john@gmail.com";

    // fetch user using useEffect
    return (
        <UserContext.Provider value={{ name, email }}>
            {children}
        </UserContext.Provider>
    );
};

// custom hook for using USerContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

