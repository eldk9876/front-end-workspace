import MouseCursor from "./components/MouseCursor";

//import KakaoMapApi from "./components/KakaoMapApi";

import KakaoMapApiTest from "./components/KakaoMapApiTest";

import Hologram from "./components/Hologram"; // Hologram 컴포넌트를 임포트합니다.
import HologramTest from "./components/HologramTest";

const App = () => {
  return (
    <>
      <div>
        <h1>1.MouseCursor Test</h1>
        <MouseCursor />
      </div>
      <div>
        <h1>2.Kakao Map Example</h1>
        <KakaoMapApiTest />
      </div>
      <div>
        <h1>3.Kakao Map Example TEST</h1>
        <Hologram />
        {/* <KakaoMapApiTest /> */}
      </div>
      <div style={{ height: "100vh" }}>
        <h1>4.HologramTest</h1>
        <HologramTest />
      </div>
    </>
  );
};

export default App;
