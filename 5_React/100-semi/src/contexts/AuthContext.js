/* 
    Context : 문맥이라는 뜻. 리액트에서 같은 문맥 아래 있는 컴포넌트 그룹에 데이터를 공급하는 기능. Context를 이용한면 Props를 전달하지 않고도 컴포넌트 전역에 데이터를 공급할 수 있다.
    ContextAPI : Context를 만들고 다루는 리액트 기능
*/
import { createContext, useState, useContext, useEffect } from "react";

// 1. 새로운 Context 생성
const AuthContext = createContext();

// 2. Context.Provider 기능을 사용해야 한다.
// Provider를 통해 로그인 상태와 로그인/로그아웃 기능 제공

export const AuthProvider = ({ children }) => {
  // 로그인 상태
  const [no, setId] = useState(localStorage.getItem("no"));

  // 로그인 기능
  const login = (data) => {
    localStorage.setItem("no", data.no);
    console.log("로그인 기능 확인 1 ", data);
    console.log("로그인 기능 확인 2  ", data.no);
    console.log("로그인 기능 확인 3  ", no);
    setId(no);
  };

  // 로그아웃 기능
  const logout = () => {
    localStorage.removeItem("no");
    setId(null);
  };

  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem("no");
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ no, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//3. Context의 상태와 기능을 쉽게 사용할 수 있도록 커스텀 훅 만들기

export const useAuth = () => useContext(AuthContext);
