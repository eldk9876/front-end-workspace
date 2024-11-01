import { IoLogInSharp } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../assets/css/header.css";
import { useState, useEffect } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  // 실험용
  const a = useAuth();
  // console.log(a, "호에엥엑");
  const [num, setNum] = useState({
    id: "",
    pwd: "",
  });
  const [loginCheck, setLoginCheck] = useState(null);

  // 아이디 체크용
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  // 로그인
  const login = () => {
    navigate("/login");
  };

  //로그아웃

  const logout = () => {
    localStorage.removeItem("id");
    setLoginCheck(null);
    // AuthProvider.logout();
  };

  // 마이페이지 이동 네비
  const mypage = () => {
    navigate("/mypage");
  };

  // 시작
  useEffect(() => {
    console.log(loginCheck);
  }, [loginCheck]);
  useEffect(() => {
    setLoginCheck(localStorage.getItem("id"));
  }, []);

  // if(여기에 조건 !== unll) {
  //   setCheck(true);
  // } else {
  //   setCheck(false);
  // }
  // 삼항연산자 = {chekc ? true일때 : false일때}
  return (
    <>
      <main className="img">
        <div className="main">
          <div className="header_left">
            <div className="menu">
              {/* <IoLogInSharp /> <span>로그인</span> */}
              {check ? <></> : null}

              {loginCheck == null ? (
                <div>
                  <IoLogInSharp />
                  <button onClick={login}> 로그인입니다 !!!!!</button>
                </div>
              ) : (
                <div>
                  <button onClick={mypage}>테스트 마이페이지</button>
                  <button onClick={logout}> 로그아웃입니다 !!!!!</button>
                </div>
              )}
            </div>
          </div>
          <div>
            <h1 className="LOGO">CRUD</h1>
          </div>
          <div className="header_right">
            <CiFolderOn /> <span>저장</span>
          </div>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
