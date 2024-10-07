import React, { useEffect } from "react";
import "./assets/RoadviewGame.css";

const RoadviewGame = () => {
  useEffect(() => {
    initMap();
  }, []);
  const initMap = () => {
    const { kakao } = window;
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    // StreetViewPanorama 생성
    const streetViewContainer = document.getElementById("map"); // 같은 컨테이너를 사용할 경우
    const streetView = new kakao.maps.StreetViewPanorama(streetViewContainer, {
      pov: {
        heading: 165,
        pitch: 0,
      },
      zoom: 1,
    });

    loadQuestion();
  };

  const loadQuestion = () => {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const question = "여기서 무엇을 볼 수 있나요?";
    const options = ["상점", "공원", "학교", "주택"];

    questionElement.innerText = question;
    optionsElement.innerHTML = "";

    options.forEach((option) => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerText = option;
      div.onclick = () => selectOption(option);
      optionsElement.appendChild(div);
    });
  };

  const selectOption = (option) => {
    alert(`당신이 선택한 것은: ${option}`);
    // 추가 로직?
  };

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <div id="question" style={{ marginTop: "20px", fontSize: "24px" }}></div>
      <div id="options"></div>
    </div>
  );
};

export default RoadviewGame;
