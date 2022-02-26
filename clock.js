const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}`;
}

// 처음 페이지가 로드되었을 때에도 시계가 보일 수 있도록 getclock 함수를 호출한 다음
// setInterval로 1초마다 실행시키기.
getClock();
setInterval(getClock, 1000);