const last = new Date("2025-01-01 00:00:00");

function count() {
  // 지금 현재 날짜와 비교해야 할 날짜
  const now = new Date();

  // 1000 // 1초 = 밀리세컨드/1000,
  // 60초 = 1분, 60분 = 1시간 24시간 = 1일
  /*
  const second = Math.floor(((last - now) / 1000) % 60);
  const minute = Math.floor((((last - now) / 1000) / 60) % 60);
  const Hour = Math.floor(((((last - now) / 1000) / 60) / 60)% 24);
  const day = Math.floor(((((last - now) / 1000) / 60) / 60)% 24);

  clock.innerHTML = `${day}시간 ${Hour}시간 ${minute}분 ${second}초`;
*/

  const second = Math.floor((last - now) / 1000);
  const minute = Math.floor(second / 60);
  const Hour = Math.floor(minute / 60);
  const day = Math.floor(Hour / 24);

  /* clock2.innerHTML = `${day}일${Hour % 24}시간 ${minute % 60}분 ${second % 60}초`;*/

  clock3.innerHTML = `${String(day).padStart(2, "0")}일
 ${String(Hour % 24).padStart(2, "0")}시간 
 ${String(minute % 60).padStart(2, "0")}분 
${String(second % 60).padStart(2, "0")}초`;
}

count();

setInterval(count, 1000);
console.log(`---------------`);

/*
    const a = (((((last - now) / 1000) % 60) % 60) % 24);
    const b = ((((last - now) / 1000) / 60) / 60);
    const c = (((last - now) / 1000) / 60);
    const d = ((last - now) / 1000);

    const date = 1000*60*60*24;
    const Hour = 1000*60*60;
    const Minute = 1000*60;
    const Second = 1000;

    const addDate = (last - now)/date;
    const addHour = Hour /addDate ;

    console.log(`date 테스트 ${date}`);
    console.log(`Hour 테스트 ${Hour}`);
    console.log(`Minute 테스트 ${Minute}`);
    console.log(`Second 테스트 ${Second}`);

    console.log(`date 테스트 ${addDate}`);
    console.log(`Hour 테스트 ${addHour}`);
    console.log(`Minute 테스트 ${Minute}`);
    console.log(`Second 테스트 ${Second}`);


console.log((last - now) / 1000);
console.log(((last - now) / 1000) % 60);
console.log((((last - now) / 1000) % 60) % 60);
console.log(((((last - now) / 1000) % 60) % 60) % 24);


*/
