import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the User interface with all necessary fields
interface User {
  name: string;
  dob: Date | null;
  email: string; // Added email property
  yearOfBirth: number; // Added yearOfBirth property
  cycleLength: number; // Added cycleLength property
  breastExamDate: string; // Added breastExamDate property
}

// Define the UserContextType to manage user state
export interface UserContextType {
  user: User | null;
  setUser: (user: Partial<User>) => void; // Allow partial updates
}

// Create the UserContext with an undefined default value
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

// Define a default user state
const defaultUser: User = {
  name: "",
  dob: null,
  email: "", // Initialize email
  yearOfBirth: new Date().getFullYear(), // Default to current year
  cycleLength: 28, // Default cycle length
  breastExamDate: "", // Default or placeholder value
};

// Create the UserProvider component to wrap your application
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(defaultUser); // Initialize state with default user

  // Update user with partial updates
  const updateUser = (updates: Partial<User>) => {
    setUser((prevUser) => {
      if (prevUser) {
        return {
          ...prevUser,
          ...updates,
        };
      }
      return prevUser; // Handle case where prevUser is null
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
