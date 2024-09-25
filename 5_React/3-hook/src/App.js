import Counter from "./components/Counter";
import InputText from "./components/InputText";
import Converter from "./components/Converter";
import MouseCursor from "./components/MouseCursor";
import KakaoMapApi from "./components/KakaoMapApi";

const App = () => {
  return (
    <>
      <div>
        <h1>1.Converter</h1>
        <Converter />
      </div>
      <div>
        <h1>2.InputText</h1>
        <InputText />
      </div>
      <div>
        <h1>3.Counter</h1>
        <Counter />
      </div>
      <div>
        <h1>4.MouseCursor Test</h1>
        <MouseCursor />
      </div>
      <div>
        <h1>5.Kakao Map Example</h1>
        <KakaoMapApi />
      </div>
    </>
  );
};

export default App;
