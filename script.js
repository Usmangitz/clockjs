function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
  
    let hourHand = document.querySelector(".hour-hand");
    let minuteHand = document.querySelector(".minute-hand");
    let secondHand = document.querySelector(".second-hand");
  
    let hourDeg = (hour * 30) + (minute / 2);
    let minuteDeg = (minute * 6);
    let secondDeg = (second * 6);
  
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  
    setTimeout(update)
}