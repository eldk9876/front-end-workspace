import { IoLogInSharp } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../assets/css/header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const mypage = () => {
    navigate("/mypage");
  };
  const [num, setNum] = useState(0);

  const [check, setCheck] = useState(false);
  setNum(5);
  console.log(check + "++++++check확인용!!!!!!");

  localStorage.getItem("id");

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
              <IoLogInSharp /> <span>로그인</span>
              {check ? <></> : null}
              <button onClick={login}> 로그인입니다 !!!!!</button>
              <button onClick={mypage}>테스트 마이페이지</button>
            </div>
          </div>
          <div>
            <h1 className="LOGO">미정</h1>
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
