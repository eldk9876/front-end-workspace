// 글을 쓰는중에 이벤트가 있어야한다
// 입력값이 틀리면 빨간색으로
/*

사용자가 입력했을때 해당 조건이 틀릴경우 빨간색으로 표시 
                                맞는경우 녹색 표시와 OK!
*/

const userId = document.querySelector("#userId");
/*const userIdSpan = document.querySelector("#userId+span");*/
const userIdSpan = document.querySelector("#userIdSpan");

const userPwd = document.querySelector("#userPwd");
const userPwdSpan = document.querySelector("#userPwdSpan");

const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckSpan = document.querySelector("#userPwdCheckSpan");

const userName = document.querySelector("#userName");
const userNameSpan = document.querySelector("#userNameSpan");

const email = document.querySelector("#email");
const emailSpan = document.querySelector("#emailSpan");

userId.addEventListener("input", function () {
  //첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4 ~ 12자로 입력하시오.
  const regExp = /^[a-zA-z][a-zA-z0-9]{3,11}$/; //정규표현식
  const check = regExp.test(userId.value);

  /*console.log(userId.value);*/
  /*console.log(check);*/
  if (check) {
    /* e.target.nextElementSibling.style.color= "green";
    e.target.nextElementSibling.innerHTML= "OK!";*/
    userIdSpan.style.color = "green";
    userIdSpan.innerHTML = "OK!";
  } else {
    userIdSpan.style.color = "red";
    userIdSpan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4 ~ 12자로 입력하시오";
  }
});
// 영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오
// [!-~]{여기는 여러분들이 채워주세요}

userPwd.addEventListener("input", function () {
  /*const regExp=/^(a-z[A-Z0-9!-~]|A-Z[a-z0-9!-~]|0-9[a-zA-Z!-~]|!-~[a-zA-Z0-9])[!-~]{5,12}$/;*/
  const regExp = /^[!-~]{8,15}$/; //정규표현식
  const check = regExp.test(userPwd.value);

  if (check) {
    userPwdSpan.style.color = "green";
    userPwdSpan.innerHTML = "OK!";
  } else {
    userPwdSpan.style.color = "red";
    userPwdSpan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오";
  }
});

// 위의 비밀번호와 일치하게 입력하시오.
// 정규표현식 필요 X, 위에 입력한 비밀번호 값이랑 비교!
// userPwd.value === userPwdcheck.value
userPwdCheck.addEventListener("input", function (e) {
  /*const regExp=/^(a-z[A-Z0-9!-~]|A-Z[a-z0-9!-~]|0-9[a-zA-Z!-~]|!-~[a-zA-Z0-9])[!-~]{5,12}$/;*/
  /*const regExp = /^[!-~]{8,15}$/; //정규표현식*/

  /*const check = regExp.test(userPwdCheck.value);*/

  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckSpan.style.color = "green";
    userPwdCheckSpan.innerHTML = "OK!";
  } else {
    userPwdCheckSpan.style.color = "red";
    userPwdCheckSpan.innerHTML = "위의 비밀번호와 일치하게 입력하시오";
  }
});

// 한글로만 이루어져야되며 2글자 이상으로 입력하시오.
// [가-힣]{여기도 여러분들이 채워주세요!}

userName.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/; //정규표현식
  const check = regExp.test(userName.value);

  if (check) {
    userNameSpan.style.color = "green";
    userNameSpan.innerHTML = "OK!";
  } else {
    userNameSpan.style.color = "red";
    userNameSpan.innerHTML =
      "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});

// 이메일 형식에 맟춰서 입력하시오
//abc123!@gmail.com
// -> (영어나숫자여러문자상관없이 길이도 상관없이 : +)@(앞이랑 마찬가지)

email.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+([.com]|[.net])+$/; //정규표현식
  const check = regExp.test(email.value);

  if (check) {
    emailSpan.style.color = "green";
    emailSpan.innerHTML = "OK!";
  } else {
    emailSpan.style.color = "red";
    emailSpan.innerHTML = "이메일 형식에 맟춰서 입력하시오.";
  }
});
/*
change
HashChangeEvent
IDBVersionChangeEvent
RTCDTMFToneChangeEvent
PaymentMethodChangeEvent
*/
/*
const userId2 = document.querySelector("#userId2"); // 값이 input 될 해당 Id 뽑아오기
const userId2Span = document.querySelector("#userId2Span"); // 색을 변화시킬 글자의 해당 Id 뽑아오기

userId2.addEventListener("input",function(){ // input이 될때마다 동작시키게 하기위해여 이벤트를 더하고 (AddEvent) 그 안에 기능을 추가한다
    const regExp = /^[0-9][!-~]{3,11}$/;     // regExp로 글자의 조건을 더하고 [0-9]는 숫자만 [가-힣]은 한글만 [a-z]는 영문소문자     
                                            //[A-Z]는 영문대문자 []
                                        
    const check = regExp.test(userId2.value);

    if (check) {
        userId2Span.style.color = "skyblue"
        userId2Span.innerHTML = "맞아 !"
    } else {
        userId2Span.style.color = "red"
        userId2Span.innerHTML = "첫글자는 반드시 숫자로, 그리고 영문자, 숫자, 특수문자 포함하여 총 4 ~ 12자로 입력하시오. !"
    }
});*/

const userId2 = document.querySelector("#userId2");
const userId2Span = document.querySelector("#userId2Span");

userId2.addEventListener("input", function () {
  const regExp = /^[0-9][!-~]{3,11}$/;
  const check = regExp.test(userId2.value);

  if (check) {
    userId2Span.style.color = "purple";
    userId2Span.innerHTML = "성공이야!";
  } else {
    userId2Span.style.color = "red";
    userId2Span.innerHTML =
      "첫글자는 반드시 숫자로, 그리고 영문자, 숫자, 특수문자 포함하여 총 4 ~ 12자로 입력하시오.";
  }
});
