
    let timer;
    let timeLeft = 25 * 60;

    function updateDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      document.getElementById('timer').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
      const customMinutes = document.getElementById('minutes').value;
      
      // Only reset timeLeft if the timer is not already running
      if (!timer) {
        timeLeft = customMinutes * 60;
        updateDisplay();
        timer = setInterval(() => {
          if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
          } else {
            clearInterval(timer);
            timer = null;
            alert("⏰ Time's up! Take a break. ☕");
          }
        }, 1000);
      }
    }

    function pauseTimer() {
      clearInterval(timer);
      timer = null;
    }

    function resetTimer() {
      clearInterval(timer);
      timer = null;
      const customMinutes = document.getElementById('minutes').value;
      timeLeft = customMinutes * 60;
      updateDisplay();
    }

    updateDisplay();
  


