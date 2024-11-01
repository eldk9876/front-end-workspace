import { updateMember } from "../../api/member";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import button from "../../components/Button";

const UpDate = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    password: "",
    phone: "",
    email: "",
    file: null, // 파일 초기값을 null로 설정
    memberInfo: "",
  });

  // 정보 수정
  const submit = async () => {
    const formData = new FormData();
    formData.append("password", member.password);
    formData.append("phone", member.phone);
    formData.append("email", member.email);

    formData.append("file", member.file);

    formData.append("memberInfo", member.memberInfo);

    const result = await updateMember(formData);
    alert("정보수정 완료");
    // console.log(result);
    // navigate("/mypage");
  };

  // 취소해서 메인으로 돌아가기
  const cancel = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(member);
  }, [member]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">내 정보</h1>
        <div>
          <Input
            label="비밀번호 : "
            type="password"
            placeholder="비밀번호를 수정해주세요"
            value={member.password}
            onChange={(e) => setMember({ ...member, password: e.target.value })}
          />
          <Input
            label="전화번호 : "
            type="tel"
            placeholder="전화번호를 수정해주세요"
            value={member.phone}
            onChange={(e) => setMember({ ...member, phone: e.target.value })}
          />
          <Input
            label="이메일 : "
            type="email"
            placeholder="이메일을 수정해주세요"
            value={member.email}
            onChange={(e) => setMember({ ...member, email: e.target.value })}
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
            placeholder="자기소개 수정해주세요"
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
            내 정보 수정 완료
          </button>

          <button type="button" onClick={cancel}>
            내 정보 수정 취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpDate;
