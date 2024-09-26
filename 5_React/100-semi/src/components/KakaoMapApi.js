import { useEffect, useRef } from "react";

const KakaoMapApi = () => {
  const mapRef = useRef(null);
  const roadviewRef = useRef(null);
  const { kakao } = window;

  var options = {
    // 지도에 표시할 DIV
    center: new window.kakao.maps.LatLng(37.499, 127.03291),
    level: 3,
    mapTypeId: kakao.maps.MapTypeId.ROADMAP,
  };

  useEffect(() => {
    // 지도를 생성
    var map = new window.kakao.maps.Map(mapRef.current, options);

    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.499, 127.03291), // 마커의 좌표
      map: map, // 마커를 표시할 지도 객체
    });

    // 마커 위에 표시할 인포윈도우를 생성한다
    var infowindow = new kakao.maps.InfoWindow({
      content: '<div style="padding:5px;">KH 정보교육원</div>', // 인포윈도우에 표시할 내용
    });
    // 인포윈도우를 마커에 연결
    infowindow.open(map, marker);

    //로드뷰를 표시할 div
    var roadviewContainer = document.getElementById("roadview");

    //로드뷰 객체
    var roadview = new kakao.maps.Roadview(roadviewContainer);

    //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
    var roadviewClient = new kakao.maps.RoadviewClient();

    // 로드뷰 위치
    var position = new kakao.maps.LatLng(37.499, 127.03291);

    // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
    roadviewClient.getNearestPanoId(position, 50, function (panoId) {
      roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
    });

    // 로드뷰의 위치를 설정
    roadview.setViewpoint(position);
  }, []);

  return (
    <>
      {/* 지도 스타일 */}
      <div
        id="map"
        ref={mapRef}
        style={{ width: "500px", height: "500px" }}
      ></div>
      {/* 로드뷰 스타일 */}
      <div
        id="roadview"
        ref={roadviewRef}
        style={{ width: "1000px", height: "1000px" }}
      ></div>
    </>
  );
};
export default KakaoMapApi;
