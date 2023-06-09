// update date 
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.querySelector('.date').textContent = dateString;
}

// update time 
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.querySelector('.time').textContent = timeString;
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// callback functions 
updateDate();
setInterval(updateTime, 1000);
  