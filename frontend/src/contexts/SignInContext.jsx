import { createContext, useContext, useState } from "react";

const SignInContext = createContext();

export const useSignIn = () => useContext(SignInContext);

export const SignInProvider = ({ children }) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const updateSignInStatus = (status) => {
    setIsUserSignedIn(status);
  };

  return (
    <SignInContext.Provider value={{ isUserSignedIn, updateSignInStatus }}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInProvider;
