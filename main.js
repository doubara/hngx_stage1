const days = [ "Sunday",  "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"]

const currentTime = new Date()

const day = document.querySelector('.day')
day.textContent = days[currentTime.getUTCDay()]
const time = document.querySelector('.time')
time.textContent = currentTime.getTime()