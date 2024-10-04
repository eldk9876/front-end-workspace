import MouseCursor from "./components/MouseCursor";

//import KakaoMapApi from "./components/KakaoMapApi";

import KakaoMapApiTest from "./components/KakaoMapApiTest";

import HologramCar from "./components/HologramCar"; // Hologram 컴포넌트를 임포트합니다.

import HologramBicycle from "./components/HologramBicycle";

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
      <div style={{ marginRight: "100px" }}>
        <h1>3.Kakao Map Example TEST</h1>
        <HologramCar />
      </div>
      <div style={{ margin: "20px" }}>
        <HologramBicycle />
        {/* <KakaoMapApiTest /> */}
      </div>

      {/* <div style={{ height: "100vh" }}>
        <h1>4.HologramTexi</h1>
        <HologramTexi />
      </div> */}
    </>
  );
};

export default App;
