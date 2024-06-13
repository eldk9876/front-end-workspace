click.addEventListener("click", function () {
  click.style.backgroundColor = "skyblue";

  const click = Math.floor(Math.random(imges));
  console.log(click);

  count.innerHTML = 45;

  result.innerHTML = 45;
});

if (imges) {
}

/* function clickHandler() {
        count 
        for(let i = 0; i < images.length; i++){
            images[i].setAttribute("span", `../resources/family${random[i]}.jpg`);

    }
*/

<input type="reset" value="초기화" />;

function restartHandler() {
  /* alert("restart!"); */
  //이미지 처음에 셋팅했던 이미지로 변경
  for (let i = 0; i < images.length; i++) {
    images[0].setAttribute("src", `../resources/family1.jpg`);
    images[1].setAttribute("src", `../resources/family2.jpg`);
    images[2].setAttribute("src", `../resources/family3.jpg`);

    // 숫자는 다시 0으로 셋팅하고 span 태그 값 비우기
    span.innerHTML = 0;

    //아래 텍스트도 비우기
    result.removeAttribute("disabled", "disabled");
    // 버튼의 disabled 삭제 -> 속성 삭제는 removeAttribute
    click.removeAttribute("disabled", "disabled");
  }
}

click.addEventListener("click", clickHandler);
restart.addEventListener("click", restartHandler);
