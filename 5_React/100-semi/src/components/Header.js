import { IoLogInSharp } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../assets/css/header.css";

const Header = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <main className="img">
      <div className="main">
        <div className="header_left">
          <div className="menu">
            <IoLogInSharp /> <span>로그인</span>
            <button onClick={login}> 로그인입니다 !!!!!</button>
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
  );
};

export default Header;
