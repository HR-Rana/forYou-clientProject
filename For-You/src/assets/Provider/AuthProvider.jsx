import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
	const [userData, setUserData] = useState(true);

	// for login and registration switch
	const [login, setLogin] = useState(true);
	const [regPath, setResPath] = useState(false);

	const AllData = {
		userData,
		setUserData,
		regPath,
		setResPath,
		login,
		setLogin,
	};

	return (
		<AuthContext.Provider value={AllData}>{children}</AuthContext.Provider>
	);
}
