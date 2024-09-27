import { createBrowserRouter } from "react-router-dom"; // 라우터 기능만 기동   기능만 사용: 소문자      컴포넌트 사용은 대문자
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      // outlet은 children에 있는 정보를 불러들이는것
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
  { path: "/detail/:id", element: <Detail /> },
]);
export default router;
