const userId = document.querySelector("#userId");
const userIdSpan = document.querySelector("#userIdSpan");

userId.addEventListener("input", function () {
  const regExp = /^[a-zA-Z]{4,19}$/;
  const Start = regExp.test();
});
