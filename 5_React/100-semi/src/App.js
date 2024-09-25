import MouseCursor from "./components/MouseCursor";
import KakaoMapApi from "./components/KakaoMapApi";
// import KakaoMapApiTest from "./components/KakaoMapApiTest";
const App = () => {
  return (
    <>
      <div>
        <h1>1.MouseCursor Test</h1>
        <MouseCursor />
      </div>
      <div>
        <h1>2.Kakao Map Example</h1>
        <KakaoMapApi />
      </div>
      <div>
        <h1>3.Kakao Map Example TEST</h1>
        {/* <KakaoMapApiTest /> */}
      </div>
    </>
  );
};

export default App;
