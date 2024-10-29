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
    return await instance.post("login", data);
  } catch {
    new Error("LOGIN FAIL");
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
export const removeMember = async (id) => {
  try {
    return await instance.delete(`delete/${id}`);
  } catch {
    new Error("DELETE FAIL");
  }
};

// 마이페이지에 정보 보내기
export const Ifmation = async (data) => {
  try {
    return await instance.post("mypage", data);
  } catch {
    new Error("MYPAGE FAIL");
  }
};
