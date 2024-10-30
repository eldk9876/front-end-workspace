import { createBrowserRouter } from "react-router-dom";
// import Test from "./pages/Test";
// import KakaoMapApiTest from "./components/KakaoMapApiTest";
// import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/member/Login";
import Signup from "./pages/member/Signup";
import Layout from "./components/Layout";
import MyPage from "./pages/member/Mypage";
import UpDate from "./pages/member/UpDate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 기본 요소로 Main 컴포넌트를 설정
    children: [
      {
        index: true, // 기본 경로에 대한 인덱스 설정
        element: <Main />, // 기본 경로에 KakaoMapApiTest 추가
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/update",
    element: <UpDate />,
  },
  // {
  //   path: "/kakaoMapApiTest",
  //   element: <KakaoMapApiTest />,
  // },
]);

export default router;
