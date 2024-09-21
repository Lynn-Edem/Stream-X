import React, { useEffect, useRef, useState } from "react";
import "./timer.css";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef(null);

  const startTimer = () => {
    const countDownDate = new Date("2024-12-21T00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      console.log(distance);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
        console.log("Time ended");
      } else {
        // Update our timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      console.log("Cleaning up time");
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="timer">
      <div className="timer_writeUp">
        <p className="description">
          Explore the hottest events, exclusive VIP access, and everything you
          need for the ultimate night out. Join the party, discover the vibe,
          and get ready to dance the night away
        </p>

        <div className="timer-section">
          <h2 className="launch">Lauching soon...</h2>
          <section className="time-set">
            <div className="timeFn">
              <p className="setTime">{timerDays}</p>
              <span>Days</span>
            </div>
            <div className="timeFn">
              <p className="setTime">{timerHours}</p>
              <span>Hours</span>
            </div>
            <div className="timeFn">
              <p className="setTime">{timerMinutes}</p>
              <span>Minutes</span>
            </div>
            <div className="timeFn">
              <p className="setTime">{timerSeconds}</p>
              <span>Seconds</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timer;
