import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
	const [userData, setUserData] = useState(null);
	const [regPath, setResPath] = useState(false);
	
	const AllData = { userData, setUserData, regPath, setResPath };

	return (
		 <AuthContext.Provider value={AllData}>
            {children}
        </AuthContext.Provider>
	);
}
