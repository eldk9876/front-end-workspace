import { useState, useEffect, useRef } from "react"; // React의 useEffect와 useRef 훅을 import
import dog from "../assets/RunDog.jpg"; // 마커 이미지로 사용할 이미지 파일 import
import cor from "../assets/cor.png"; // 사용자 정의 커서 이미지 파일 import
import "../assets/dongdong.css";

import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

// KakaoMapApi 컴포넌트 정의
const KakaoMapApiTest = () => {
  const mapRef = useRef(null); // 지도 div를 참조하기 위한 ref 생성
  const roadviewRef = useRef(null); // 로드뷰 div를 참조하기 위한 ref 생성
  const cursorMarkerRef = useRef(null); // 커서 마커를 참조하기 위한 ref 생성
  const mapWalkerRef = useRef(null); // map walker 아이콘을 참조하기 위한 ref 생성

  useEffect(() => {
    // useEffect를 사용하여 컴포넌트가 처음 렌더링될 때 한 번 실행
    const { kakao } = window; // 전역 객체 window에서 kakao 객체를 가져옴 (카카오 지도 API)

    // 지도 옵션 설정: 지도의 중심 좌표 및 기본 옵션 지정
    const mapCenter = new kakao.maps.LatLng(37.499, 127.03291);
    const options = {
      center: mapCenter, // 지도의 중심 좌표 설정
      level: 3, // 지도의 확대 레벨 설정
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도 타입 설정 (일반 지도)
    };

    // 지도 생성
    const map = new kakao.maps.Map(mapRef.current, options); // ref로 가져온 div에 지도 생성

    // 마커를 표시할 위치와 title 객체 배열
    const positions = [
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

    // 마커 이미지의 이미지 주소 및 크기 설정
    const imageSrc = dog; // 마커 이미지 주소 설정
    const imageSize = new kakao.maps.Size(50, 50); // 마커 이미지 크기 설정

    // 각 위치에 대해 마커 생성
    positions.forEach((position) => {
      // 마커 이미지를 생성
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성하여 지도에 표시
      new kakao.maps.Marker({
        map,
        position: position.latlng, // 마커 위치
        title: position.title, // 마커의 타이틀
        image: markerImage, // 마커 이미지
      });
    });

    // 사용자 정의 커서 설정
    const cursorImage = cor; // 사용자 정의 커서 이미지 URL
    const cursorSize = new kakao.maps.Size(32, 32); // 커서 이미지 크기 설정

    // 커서 마커 생성 (지도의 커서 역할을 하는 마커)
    cursorMarkerRef.current = new kakao.maps.Marker({
      image: new kakao.maps.MarkerImage(cursorImage, cursorSize),
      map: map, // 지도를 설정하여 표시
    });

    // 마우스 이벤트를 통해 커서 위치를 업데이트
    kakao.maps.event.addListener(map, "mousemove", (mouseEvent) => {
      // 마우스의 움직임에 따라 마커 위치 업데이트
      cursorMarkerRef.current.setPosition(mouseEvent.latLng);
    });

    // 특정 위치에 인포윈도우를 표시하기 위해 마커 생성
    const marker = new kakao.maps.Marker({
      position: mapCenter, // 마커의 좌표
      map: map, // 마커를 표시할 지도 객체
    });

    // 마커 위에 표시할 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
      content: '<div style="padding:5px;">KH 정보교육원</div>', // 인포윈도우에 표시할 내용
    });

    // 인포윈도우를 마커에 연결하여 표시
    infowindow.open(map, marker);

    // 로드뷰를 표시할 div 참조
    const roadviewContainer = roadviewRef.current;

    // 로드뷰 객체 생성
    const roadview = new kakao.maps.Roadview(roadviewContainer);
    const roadviewClient = new kakao.maps.RoadviewClient(); // 로드뷰 panoId를 가져오기 위한 객체

    // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰 설정
    roadviewClient.getNearestPanoId(mapCenter, 50, (panoId) => {
      roadview.setPanoId(panoId, mapCenter); // panoId와 중심좌표를 사용하여 로드뷰 설정
    });

    //------------------------------------------

    // 지도 위에 MapWalker 아이콘 생성 클래스
    function MapWalker(position) {
      // MapWalker를 구성하는 HTML 요소 생성
      const content = document.createElement("div");
      const figure = document.createElement("div");
      const angleBack = document.createElement("div");

      // 각 요소에 클래스명 부여
      content.className = "MapWalker";
      figure.className = "figure";
      angleBack.className = "angleBack";

      // 요소들을 MapWalker 구성 요소로 결합
      content.appendChild(angleBack);
      content.appendChild(figure);

      // 커스텀 오버레이 객체로 MapWalker 생성
      var walker = new kakao.maps.CustomOverlay({
        position: position, // 표시할 위치
        content: content, // 표시할 HTML 요소
        yAnchor: 1, // 위치 설정
      });

      this.walker = walker; // walker 객체를 저장
      this.content = content; // content 객체를 저장
    }

    // 각도에 따라 MapWalker의 이미지 변경 (pan 값에 따라 아이콘 변경)
    MapWalker.prototype.setAngle = function (angle) {
      const threshold = 22.5; // 각도가 변해야 하는 임계값 설정
      for (let i = 0; i < 16; i++) {
        // 16개의 각도에 따라 아이콘을 변경
        if (angle > threshold * i && angle < threshold * (i + 1)) {
          const className = "m" + i; // 각도에 따라 클래스명 설정
          this.content.className = this.content.className.split(" ")[0]; // 기본 클래스 설정
          this.content.className += " " + className; // 각도에 따른 클래스 추가
          break;
        }
      }
    };

    // 위치를 변경하는 함수
    MapWalker.prototype.setPosition = function (position) {
      this.walker.setPosition(position); // 새로운 위치 설정
    };

    // MapWalker를 지도에 추가하는 함수
    MapWalker.prototype.setMap = function (map) {
      this.walker.setMap(map); // 지도를 설정하여 표시
    };

    // 로드뷰가 초기화되었을 때 MapWalker 생성
    kakao.maps.event.addListener(roadview, "init", function () {
      mapWalkerRef.current = new MapWalker(mapCenter); // MapWalker를 생성
      mapWalkerRef.current.setMap(map); // MapWalker를 지도에 설정

      // 로드뷰의 viewpoint 변경 시 MapWalker의 각도 변경
      kakao.maps.event.addListener(roadview, "viewpoint_changed", function () {
        const viewpoint = roadview.getViewpoint(); // 로드뷰의 현재 viewpoint를 가져옴
        mapWalkerRef.current.setAngle(viewpoint.pan); // 각도에 따라 MapWalker 업데이트
      });

      // 로드뷰 내의 위치 변경 시 MapWalker의 위치 변경
      kakao.maps.event.addListener(roadview, "position_changed", function () {
        const position = roadview.getPosition(); // 로드뷰의 현재 위치를 가져옴
        mapWalkerRef.current.setPosition(position); // 위치에 따라 MapWalker 업데이트
        map.setCenter(position); // 지도의 중심을 로드뷰 위치로 설정
      });
    });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때 한 번만 실행

  return (
    <>
      {/* 지도 div 요소 */}
      <div
        id="map"
        ref={mapRef}
        style={{ width: "500px", height: "500px" }} // 지도 크기 설정
      ></div>
      {/* 로드뷰 div 요소 */}
      <div
        id="roadview"
        ref={roadviewRef}
        style={{ width: "500px", height: "500px" }} // 로드뷰 크기 설정
      ></div>
    </>
  );
};

export default KakaoMapApiTest;
