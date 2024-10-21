import React, { useEffect } from "react";
import "./assets/RoadviewGame.css";

const RoadviewGame = () => {
  const { kakao } = window;

  useEffect(() => {
    if (window.kakao) {
      setTimeout(initMap(), 3000);
    } else {
      console.error("Kakao Maps API is not loaded.");
    }
  }, []);

  // 지도 생성 로직
  const initMap = () => {
    const mapContainer = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.499, 127.03291),
      level: 3,
    };
    new kakao.maps.Map(mapContainer, options);

    loadQuestion();
  };

  const street = () => {
    // StreetViewPanorama를 위한 별도 컨테이너 생성
    const streetViewContainer = document.getElementById("street");
    const streetView = new kakao.maps.StreetViewPanorama(streetViewContainer, {
      pov: {
        heading: 165,
        pitch: 0,
      },
      zoom: 1,
    });
  };

  const loadQuestion = () => {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const question = "여기서 어느 곳으로 갈까요?";
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
    // 추가 로직? 눌렀을때 그곳으로 지도와 거리뷰 이동
  };

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <div
        id="streetView"
        style={{ width: "100%", height: "400px", marginTop: "20px" }}
      ></div>
      <div id="question" style={{ marginTop: "20px", fontSize: "24px" }}></div>
      <div id="options"></div>
    </div>
  );
};

export default RoadviewGame;
