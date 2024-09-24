import React, { useEffect } from "react";

const KakaoMapApi = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
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
        const imageSrc = "URL_TO_YOUR_CUSTOM_MARKER_IMAGE.png"; // 사용자 정의 마커 이미지 URL
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
        const cursorImage = "URL_TO_YOUR_CUSTOM_CURSOR_IMAGE.png"; // 사용자 정의 커서 이미지 URL
        const cursorSize = new kakao.maps.Size(32, 32); // 커서 이미지 크기

        // 마우스 이벤트를 통해 커서 변경
        kakao.maps.event.addListener(map, "mousemove", (mouseEvent) => {
          const cursor = new kakao.maps.Marker({
            position: mouseEvent.latLng,
            image: new kakao.maps.MarkerImage(cursorImage, cursorSize), // 사용자 정의 커서 이미지
            map: map, // 지도에 표시
          });
          // 커서가 움직일 때마다 새로운 마커로 업데이트
          cursor.setMap(map);
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
};

export default KakaoMapApi;
