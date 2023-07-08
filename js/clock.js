function updateClock() {
    var date = new Date();
    var options = {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    var timeString = date.toLocaleTimeString('de-DE', options);
    document.getElementById('clock').textContent = timeString;
  }

  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);