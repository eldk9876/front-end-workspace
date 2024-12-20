import Input from "../../components/Input";
import { signup } from "../../api/member";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import button from "../../components/Button";
import "../../assets/css/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    id: "", //변경 불가
    password: "",
    phone: "",
    email: "",
    name: "",
    age: 0, // 기본 0 //변경 불가
    gender: "", //변경 불가
    nickname: "",
    file: null, // 파일 초기값을 null로 설정
    memberInfo: "",
  });

  // 회원가입
  const submit = async () => {
    const formData = new FormData();
    formData.append("id", member.id);
    formData.append("password", member.password);
    formData.append("phone", member.phone);
    formData.append("email", member.email);
    formData.append("name", member.name);
    formData.append("age", member.age);
    formData.append("gender", member.gender);
    formData.append("nickname", member.nickname);
    if (member.file != null) {
      formData.append("mfile", member.file);
    }

    formData.append("memberInfo", member.memberInfo);

    const result = await signup(formData); //<-
    if (result.status === 200) {
      alert(
        "회원가입 성공! 아이디와 닉네임은 변경 불가능 하오니 쾌적한 인터넷문화 부탁드립니다!!"
      );
      navigate("/login");
    }
  };
  // 취소해서 메인으로 돌아가기
  const cancel = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(member);
  }, [member]);

  return (
    <div className="divBody">
      <div className="bg-white p-8 shadow-md max-w-md w-full">
        <h1 className="h1-SignUp">회원가입</h1>
        <div className="inPutTest">
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
          <div id="gender">
            <Input
              label="성별 : "
              id={button.btnMan}
              type="button"
              value={"남"}
              onClick={() => setMember({ ...member, gender: "남" })} // 수정
            />
            <Input
              id={button.btnWomon}
              type="button"
              value={"여"}
              onClick={() => setMember({ ...member, gender: "여" })} // 수정
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
            onChange={(e) => {
              const file = e.target.files[0];
              console.log(file); // 파일 정보 출력
              setMember({ ...member, file: file });
            }}
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
          <div className="signupbutton">
            <button type="button" className="button1" onClick={submit}>
              회원가입 완료
            </button>

            <button type="button" onClick={cancel}>
              회원가입 취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
