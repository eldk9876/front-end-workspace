import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import { login } from "../../api/member";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/css/login.css";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">로그인</h1>
        <div>
          <Input
            htmlFor="아이디 : "
            type="text"
            placeholder="아이디를 입력해주세요"
            value={member.id}
            onChange={(e) => setMember({ ...member, id: e.target.value })}
          />
          <Input
            htmlFor="비밀번호 : "
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={member.password}
            onChange={(e) => setMember({ ...member, password: e.target.value })}
          />
          <button
            type="button"
            className="bg-black text-white w-full py-3 font-bold rounded hover:bg-red-600 padding: 10px"
            onClick={submit}
          >
            <h1>로그인</h1>
          </button>
          <p className="text-center mt-4">or</p>
          <button
            type="button"
            className="bg-blue-500 text-white w-full py-3 mt-4 font-bold rounded hover:bg-blue-600"
            onClick={google}
          >
            Login with Google
          </button>
          <p className="text-center mt-4">
            계정이 없으신가요? 그렇다면 회원가입!
          </p>
          <button
            type="button"
            className="bg-gray-500 text-white w-full py-3 mt-2 font-bold rounded hover:bg-gray-600"
            onClick={signup}
          >
            회원가입
          </button>

          <button onClick={index}>가입취소 </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
