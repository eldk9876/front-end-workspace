// 1. 이벤트 연결
//one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// on
// $("#area2").on("mouseenter", (event) => {
//   $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
// });

// // 마우스가 내려갈 때(mouseleave)
// // -> 배경 색상 : beige, 텍스트 : 마우스가 내려감

// $("#area2").on("mouseleave", (event) => {
//   $(event.target).css("background-color", "beige").text("마우스가 내려감");
// });

/*
$("#area2").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  } else if (event.type === "mouseleave") {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  }
});

$("#area2").on("click", (event) => {
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트 제거
});
*/
$("#area2").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트 제거
  },
});

// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    // 키보드가 눌려질때
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    // 글자가 입력되는 순간
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    // 키보드가 떼어질 때
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

// 글자수세기
// val().length <-- 글자수!
// substr(시작인덱스, 길이) <-- 문자열 자르기
$("#textarea2").keyup((e) => {
  let target = $(e.target);
  let length = target.val().length;

  let maxLength = $("#maxLength").text();
  if (length > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(length);
  }
});

$("#userId").keyup((e) => {
  let id = $(e.target).val(); // 제이쿼리 방식
  //id = e.target.value; // 자바스크립트 방식

  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  if (regExp.test(id)) {
    $("#idchack").text("사용 가능한 아이디 입니다").css("color", "green");
  } else if (id === "") {
    $("#idchack").text("");
  } else {
    $("#idchack").text("사용 불가능한 아이디 입니다").css("color", "red");
  }
});
// 3. trigger() 메서드
$("#area3").click((event) => {
  let counter = $("#counter2");
  let current = parseInt(counter.text());
  counter.text(++current);
});
$("#btn").click(() => {
  $("#area3").trigger("click");
});
