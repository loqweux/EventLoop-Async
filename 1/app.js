function globalLogic() {
  let count = 1; // счётчик

  const interval = setInterval(() => {
    console.log(`Сообщение номер ${count}`);
    count++;
    if (count > 5) {
      clearInterval(interval); //остановка
    }
  }, 2000);
}
globalLogic();
