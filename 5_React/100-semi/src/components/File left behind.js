import { useEffect, useRef, useState } from "react";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

const KakaoMapApi = () => {
  const mapRef = useRef(null);
  const [result, setResult] = useState("");

  const options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  useEffect(() => {
    // 카카오 지도 API를 사용하여 지도 초기화
    const map = new window.kakao.maps.Map(mapRef.current, options);
  }, []);

  return (
    <>
      <KakaoMap // react-kakao-maps-sdk를 사용한 지도
        id="map"
        center={{
          lat: 37.499,
          lng: 127.03291,
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
      >
        {/* 클릭한 위치에 마커 추가 */}
        <MapMarker
          position={{ lat: 37.499, lng: 127.03291 }} // 초기 마커 위치
        />
      </KakaoMap>

      <div
        id="map"
        ref={mapRef}
        Roadview // 로드뷰를 표시할 Container
        position={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
          radius: 50,
        }}
        style={{ width: "500px", height: "400px" }} // 숨김 처리
      ></div>
      <p>
        <em>지도를 클릭해주세요!</em>
      </p>
      <p id="result">{result}</p>
    </>
  );
};

export default KakaoMapApi;
