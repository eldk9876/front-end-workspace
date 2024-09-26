import React, { useEffect, useRef } from "react";
import dog from "../assets/RunDog.jpg";
import cor from "../assets/cor.png";
const KakaoMapApiTest = () => {
  const cursorMarkerRef = useRef(null); // 커서 마커를 위한 ref

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=026b00a146f92fb6c993f2709b36eee0";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.499, 127.03291),
          level: 3,
        };

        const map = new kakao.maps.Map(container, options);

        // 사용자 정의 마커 이미지 설정
        const imageSrc = dog; // 사용자 정의 마커 이미지 URL
        const imageSize = new kakao.maps.Size(64, 69);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커 위치 설정
        const markerPosition = new kakao.maps.LatLng(37.499, 127.03291);

        // 마커 객체 생성
        const marker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map); // 지도에 마커 추가

        // 사용자 정의 커서 설정
        const cursorImage = cor; // 사용자 정의 커서 이미지 URL
        const cursorSize = new kakao.maps.Size(32, 32); // 커서 이미지 크기

        // 커서 마커 생성
        cursorMarkerRef.current = new kakao.maps.Marker({
          image: new kakao.maps.MarkerImage(cursorImage, cursorSize),
          map: map,
        });

        // 마우스 이벤트를 통해 커서 변경
        kakao.maps.event.addListener(map, "mousemove", (mouseEvent) => {
          cursorMarkerRef.current.setPosition(mouseEvent.latLng); // 위치 업데이트
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "500px", height: "400px", border: "1px solid black" }}
    ></div>
  );
};

export default KakaoMapApiTest;
