"use strict";

class CountdownTimer {
  constructor(timeObj) {
    this.selector = timeObj.selector;
    this.targetDate = timeObj.targetDate;
  }

  updateTimer() {
    setInterval(() => {
      let time = Date.parse(this.targetDate) - Date.now();
      if (time < 0) {
        time = 0;
      }
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      document.querySelector('span[data-value="secs"]').textContent = `${secs}`;
      document.querySelector('span[data-value="mins"]').textContent = `${mins}`;
      document.querySelector(
        'span[data-value="hours"]'
      ).textContent = `${hours}`;
      document.querySelector('span[data-value="days"]').textContent = `${days}`;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("June 03, 2020")
});

timer.updateTimer();
