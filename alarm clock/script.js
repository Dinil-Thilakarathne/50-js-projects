const alarmForm = document.querySelector('.alarm-form');
const alarmTimeInput = document.getElementById('alarmTime');
const alarmMessageInput = document.getElementById('alarmMessage');
const setAlarmButton = document.getElementById('setAlarmBtn');
const alarmStatus = document.getElementById('alarmStatus');

setAlarmButton.addEventListener('click', () => {
  const alarmTime = alarmTimeInput.value;
  const alarmMessage = alarmMessageInput.value;
  setAlarm(alarmTime, alarmMessage);
});

function setAlarm(time, message) {
  const [hours, minutes] = time.split(':');
  const now = new Date();
  const alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

  if (alarm > now) {
    const timeDiff = alarm - now;
    setTimeout(() => {
      playAlarm(message);
    }, timeDiff);
    
    alarmStatus.textContent = `Alarm set for ${time}`;
  } else {
    alarmStatus.textContent = 'Invalid time. Please choose a future time.';
  }
}

function playAlarm(message) {
  alert(message);
  alarmStatus.textContent = 'Alarm triggered!';
  alarmTimeInput.value = '';
  alarmMessageInput.value = '';
}

