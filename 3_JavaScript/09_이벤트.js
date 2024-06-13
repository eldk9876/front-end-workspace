//DOMContentLoaded : Dom 구조가 로드되고 실행!
window.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  console.log(h1);
  h1.onmouseenter = function () {
    h1.style.backgroundColor = "purple";
  };
  h1.onmouseleave = function () {
    h1.style.backgroundColor = "pink";
  };
  //h1.addEventListener(이벤트명, 이벤트가 발생했을 때 일어날 함수(이벤트 객체));
  // addEventListener만 기억해도 괜찮아요!
  h1.addEventListener("click", function () {
    h1.style.backgroundColor = "skyblue";
  });
});

/*
  window.addEventListener("DOMContent", function () {

    const container = document.querySelector("container");
    console.log(container);
    container.onmouseenter = function () {
        container.style.backgroundColor = "purple";
      };
      container.onfullscreenchange

  });
*/

// 이미지마다 이벤트 걸려면 반복문 필요!
/*

const img = document.querySelectorAll(".container img");
console.log(img);

for (const item of img) {

  item.addEventListener("click", function (e) {
  e.currentTarget.style.display = "none";
  
    });
  }
*/

/*img[0].addEventListener("click", function () {
   /* img[0].style.display = "none"; */

/*for (img[0]; img[0] <= img[4]; img++) {
  if (img[0] == img[4]) {
    break;
  }
  if (
    img[0].addEventListener("click", function () {
      img[0].style.display = "none";
    })
  ) {
    break;
  }
  if (
    img[1].addEventListener("click", function () {
      img[1].style.display = "none";
    })
  ) {
    break;
  }
  if (
    img[2].addEventListener("click", function () {
      img[2].style.display = "none";
    })
  ) {
    break;
  }
  if (
    img[3].addEventListener("click", function () {
      img[3].style.display = "none";
    })
  ) {
    break;
  }
  if (
    img[4].addEventListener("click", function () {
      img[4].style.display = "none";
    })
  ) {
    break;
  }
}
*/
/*});*/

const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}
container.addEventListener("click", removeHandler);
