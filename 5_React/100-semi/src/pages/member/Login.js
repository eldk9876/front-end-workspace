import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import { login } from "../../api/member";
import { useAuth } from "../../contexts/AuthContext";
import styled from "../../assets/css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth(); // login이 다른 함수명으로 있어서 이름을 변경
  const [member, setMember] = useState({
    id: "",
    password: "",
  });

  const submit = async () => {
    const result = await login(member);
    if (result != null) {
      authLogin(result.data);
      alert("로그인 성공!");
      navigate("/");
    }
  };

  const signup = () => {
    navigate("/signup");
  };

  const index = () => {
    navigate("/");
  };

  const google = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };
  return (
    <div className="Z-indexTest">
      <div className="divLoginMain">
        <div className="divLoginBody">
          <div>
            <h1 className="divLogin">로그인</h1>
            <div className="LoginLabel">
              <Input
                label="아이디 : "
                type="text"
                placeholder="아이디를 입력해주세요"
                value={member.id}
                onChange={(e) => setMember({ ...member, id: e.target.value })}
              />
              <Input
                label="비밀번호 : "
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={member.password}
                onChange={(e) =>
                  setMember({ ...member, password: e.target.value })
                }
              />
              <div className="loginbutton">
                <button type="button" onClick={submit}>
                  <h1 className="h1-1">로그인</h1>
                </button>
              </div>
              {/* <p className="or">or</p> */}
              {/* <button
            type="button"
            className="bg-blue-500 text-white w-full py-3 mt-4 font-bold rounded hover:bg-blue-600"
            onClick={google}
          >
            Login with Google
          </button> */}

              <p className="Sign">계정이 없으신가요? 그렇다면 회원가입!</p>
              <div className="SignButton">
                <div className="SignButton1">
                  <button type="button" onClick={signup}>
                    <h1 className="h1-2">회원가입</h1>
                  </button>
                </div>
                <div className="SignButton2">
                  <button type="button" onClick={index}>
                    <h1 className="h1-2">가입취소 </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
