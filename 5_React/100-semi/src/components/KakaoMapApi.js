import { useEffect, useRef } from "react";
import dog from "../assets/RunDog.jpg";
import cor from "../assets/cor.png";

const KakaoMapApi = () => {
  const mapRef = useRef(null);
  const roadviewRef = useRef(null);
  const { kakao } = window;
  const cursorMarkerRef = useRef(null); // 커서 마커를 위한 ref

  var options = {
    // 지도에 표시할 DIV
    center: new kakao.maps.LatLng(37.499, 127.03291),
    level: 3,
    mapTypeId: kakao.maps.MapTypeId.ROADMAP,
  };

  useEffect(() => {
    // 지도를 생성
    var map = new window.kakao.maps.Map(mapRef.current, options);

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "역삼휘트니스",
        latlng: new kakao.maps.LatLng(37.499134, 127.0331),
      },
      {
        title: "미소병원",
        latlng: new kakao.maps.LatLng(37.50037, 127.034326),
      },
      {
        title: "세븐일레븐역삼은탑점",
        latlng: new kakao.maps.LatLng(37.499077, 127.033204),
      },
      {
        title: "(주)유니윌부설아이씨티연구소",
        latlng: new kakao.maps.LatLng(37.499529, 127.031529),
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = dog;

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(50, 50);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }

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

    // 커서 스타일을 "내가 설정한 이미지(cor)"로 변경한다.
    map.setCursor(cor);

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
