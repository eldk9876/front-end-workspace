import Input from "../../components/Input";
import { signup } from "../../api/member";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import button from "../../components/Button";
import "../../assets/css/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    id: "",
    password: "",
    phone: "",
    email: "",
    name: "",
    age: "",
    gender: "",
    nickname: "",
    memberImg: "",
    memberInfo: "",
  });
  // 회원가입
  const submit = async () => {
    const result = await signup(member);
    if (result.status === 200) {
      alert("회원가입 성공!");
      navigate("/login");
    }
  };

  const cansel = () => {
    navigate("/");
  };

  // const gender = () => {
  //   if ((label = "남")) {
  //   }
  // };

  useEffect(() => {
    console.log(member);
  }, [member]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">회원가입</h1>
        <div>
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
            onChange={(e) => setMember({ ...member, password: e.target.value })}
          />
          <Input
            label="전화번호 : "
            type="tel"
            placeholder="전화번호를 입력해주세요"
            value={member.phone}
            onChange={(e) => setMember({ ...member, phone: e.target.value })}
          />
          <Input
            label="이메일 : "
            type="email"
            placeholder="이메일을 입력해주세요"
            value={member.email}
            onChange={(e) => setMember({ ...member, email: e.target.value })}
          />
          <Input
            label="이름 : "
            type="text"
            placeholder="이름을 입력해주세요"
            value={member.name}
            onChange={(e) => setMember({ ...member, name: e.target.value })}
          />
          <Input
            label="나이 : "
            type="number"
            placeholder="나이를 입력해주세요"
            value={member.age}
            onChange={(e) => setMember({ ...member, age: e.target.value })}
          />
          <div>성별 :</div>
          <div id="gender">
            <Input
              id={button.btnMan}
              type="button"
              value={"남"}
              onClick={(e) => setMember({ ...member, gender: e.target.value })}
            />

            <Input
              id={button.btnWomon}
              type="button"
              value={"여"}
              onClick={(e) => setMember({ ...member, gender: e.target.value })}
            />
          </div>
          <Input
            label="닉네임 : "
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={member.nickname}
            onChange={(e) => setMember({ ...member, nickname: e.target.value })}
          />
          <Input
            label="유저 프로필 사진 : "
            type="file"
            placeholder="프로필 사진이 변경가능합니다"
            value={member.memberImg}
            onChange={(e) =>
              setMember({ ...member, memberImg: e.target.value })
            }
          />
          <Input
            label="자기소개 : "
            type="text"
            placeholder="한줄 소개"
            value={member.memberInfo}
            onChange={(e) =>
              setMember({ ...member, memberInfo: e.target.value })
            }
          />
          <button
            type="button"
            className="bg-black text-white w-full py-3 font-bold rounded hover:bg-red-600"
            onClick={submit}
          >
            회원가입
          </button>

          <button type="button" onClick={cansel}>
            회원가입 취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;