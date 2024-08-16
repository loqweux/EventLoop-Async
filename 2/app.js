function Clock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // часовая стрелка: 360 градусов / 12 ч = 30 градусов на ч
  const hourDegree = ((hours % 12) + minutes / 60) * 30; // (ч % 12) - чтобы учесть 12ч формат + мин / 60 - добавляет ч

  // минутная стрелка: 360 градусов / 60 мин = 6 градусов на мин
  const minuteDegree = (minutes + seconds / 60) * 6; // (мин + сек / 60) - добавляет мин

  // секундная стрелка: 360 градусов / 60 сек = 6 градусов на сек
  const secondDegree = seconds * 6;

  document.getElementById(
    "hourHand"
  ).style.transform = `rotate(${hourDegree}deg)`;
  document.getElementById(
    "minuteHand"
  ).style.transform = `rotate(${minuteDegree}deg)`;
  document.getElementById(
    "secondHand"
  ).style.transform = `rotate(${secondDegree}deg)`;

  let formatH;
  if (hours < 10) {
    formatH = "0" + hours;
  } else {
    formatH = String(hours);
  }

  let formatM;
  if (minutes < 10) {
    formatM = "0" + minutes;
  } else {
    formatM = String(minutes);
  }

  document.getElementById("hmClock").innerText = `${formatH}:${formatM}`;
}

setInterval(Clock, 1000);
Clock();
