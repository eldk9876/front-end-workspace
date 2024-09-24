import Counter from "./components/Counter";
import InputText from "./components/InputText";
import Converter from "./components/Converter";
import MouseCursor from "./components/MouseCursor";
import KakaoMapApi from "./components/KakaoMapApi";

const App = () => {
  return (
    <>
      <div>
        <Converter />
      </div>
      <div>
        <InputText />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <MouseCursor />
      </div>
      <div>
        <KakaoMapApi />
      </div>
    </>
  );
};

export default App;
