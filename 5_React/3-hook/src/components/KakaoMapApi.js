import React, { useEffect } from "react";

const KakaoMapApi = () => {
  useEffect(() => {
    // Kakao 지도 API를 로드합니다.
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=026b00a146f92fb6c993f2709b36eee0&autoload=false";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Kakao 지도 API가 로드된 후에 실행
      const { kakao } = window; // 구조 분해 할당

      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new kakao.maps.Map(container, options);
      });
    };

    // 컴포넌트가 언마운트될 때 스크립트 제거
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
};

export default KakaoMapApi;
