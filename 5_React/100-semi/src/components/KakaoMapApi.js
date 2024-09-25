import { useEffect, useRef } from "react";
import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import { useState } from "react";

const KakaoMapApi = () => {
  useKakaoLoader();
  const [result, setResult] = useState("");

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          setResult(
            `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`
          );
        }}
      />
      <p>
        <em>지도를 클릭해주세요!</em>
      </p>
      <p id="result">{result}</p>
    </>
  );
};

/*
const KakaoMapApi = () => {
  const mapRef = useRef(null);

  var options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  useEffect(() => {
    var map = new window.kakao.maps.Map(mapRef.current, options);
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{ width: "500px", height: "400px" }}
    ></div>
  );
};*/
export default KakaoMapApi;
