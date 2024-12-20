import { useNavigate } from "react-router-dom";
import { removeMember } from "../../api/member";
import { useState, useEffect } from "react";

const Delete = () => {
  const navigate = useNavigate();
  const [userNo, setUserNo] = useState("");

  const ifdelete = async () => {
    await removeMember(userNo);
  };
  useEffect(() => {
    setUserNo(localStorage.getItem("no"));
  }, []);

  const Delete = () => {
    if (userNo) {
      ifdelete();
    }
    navigate("/");
  };

  const re = () => {
    navigate("/mypage");
  };

  return (
    <>
      <main>
        <h1>한번 더 생각해보세요. 정말 삭제하시겠습니까??? </h1>
        <div>
          <span>
            <button onClick={Delete}>확인</button>
            <button onClick={re}>취소</button>
          </span>
        </div>
      </main>
    </>
  );
};

export default Delete;
