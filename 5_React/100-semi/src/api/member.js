import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/member/",
});

// 'multipart/form-data'로 요청 보내기
export const signup = async (formData) => {
  console.log("2 : " + formData);
  return await instance.put("/signup", formData, {
    // <-
    headers: {
      "Content-Type": "multipart/form-data", // Content-Type을 multipart/form-data로 설정
    },
  });
};
// 'multipart/form-data'로 요청 보내기
// export const signupq = async (formData) => {
//   try {
//     const response = await instance.put("/signup", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data", // Content-Type을 multipart/form-data로 설정
//       },
//     });
//     return response;
//   } catch (error) {
//     console.error("Signup error: ", error);
//     throw error; // 오류를 호출한 함수에서 처리할 수 있게 다시 던짐
//   }
// };

// 로그인
export const login = async (data) => {
  try {
    const a = await instance.post("login", data);
    return a;
  } catch {
    alert("로그인 실패!");
  }
};

// 회원 정보 업데이트
export const updateMember = async (data) => {
  try {
    return await instance.put("uptate", data);
  } catch {
    new Error("UPDATE FAIL");
  }
};

// 회원 삭제
export const removeMember = async (no) => {
  try {
    localStorage.clear();
    return await instance.delete(`delete/${no}`);
  } catch {
    new Error("DELETE FAIL");
  }
};

// 마이페이지에 정보 보내기
export const IFMation = async (data) => {
  try {
    const a = await instance.post("mypage", data);
    console.log("초비상" + a);
    return a;
  } catch {
    new Error("MYPAGE FAIL");
  }
};
