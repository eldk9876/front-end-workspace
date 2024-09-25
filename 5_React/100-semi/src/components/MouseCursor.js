import React, { useState } from "react";

const MouseCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  const crosshair = {
    cursor: "crosshair",
    padding: "100px",
    border: "1px solid #000",
    backgroundColor: isHovered ? "#f0f0f0" : "#ccc", // 색상 변화
  };

  return (
    <div
      style={crosshair}
      onMouseEnter={() => setIsHovered(true)} // 마우스가 들어올 때
      onMouseLeave={() => setIsHovered(false)} // 마우스가 나갈 때
    >
      {isHovered
        ? "여기에 마우스가 있습니다."
        : "이 영역에서 마우스 커서가 십자 포인터로 바뀝니다."}
    </div>
  );
};

export default MouseCursor;
