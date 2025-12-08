import { useCallback, useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const secondTimer = useRef(null);

  const getTimeDifference = (countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);

    if (timeDiffrence < 0) {
      if (secondTimer.current) {
        secondTimer.current.className = "relative top-2";
      }
      setCountDownTIme({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval();
    } else {
      if (secondTimer.current) {
        secondTimer.current.className = "animate-timer";
      }
      setCountDownTIme({ days, hours, minutes, seconds });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 4,
      customDate.getHours() + 18,
      customDate.getMinutes() + 25,
      customDate.getSeconds() + 8
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex flex-wrap justify-center gap-4 bg-linear-to-r from-[#ffffff] to-[#cccdd0] shadow-2xl mx-6 py-4 lg:py-8 rounded-3xl">
      {/* Banner */}
      <div className="flex flex-nowrap justify-center items-center gap-2 bg-[#cdcccc] shadow-md mx-4 sm:mx-0 px-3 py-2 rounded-full w-full md:w-auto font-bold text-xs sm:text-sm text-center uppercase">
        <div className="bg-green-500 px-2 py-1 rounded-full text-white text-xs sm:text-sm md:text-base">50%</div>
        <span className="text-xs">off until the end of the</span>
        <p className="bg-green-500 px-2 py-1 rounded-full text-white text-xs sm:text-sm md:text-base">month</p>
      </div>

      {/* Days */}
      <div className="flex flex-col bg-[#cdcccc] shadow-lg rounded-2xl w-12 sm:w-20 lg:w-24 hover:scale-105 transition-transform">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 font-bold text-slate-700 text-sm sm:text-base md:text-lg">
          {countDownTime?.days}
        </div>
        <div className="flex justify-center">
          <span className="text-[10px] text-slate-700 sm:text-xs md:text-sm text-center uppercase tracking-wide">
            {countDownTime?.days === 1 ? "Day" : "Days"}
          </span>
        </div>
      </div>

      {/* Hours */}
      <div className="flex flex-col bg-[#cdcccc] shadow-lg rounded-2xl w-12 sm:w-20 lg:w-24 hover:scale-105 transition-transform">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 font-bold text-slate-700 text-sm sm:text-base md:text-lg">
          {countDownTime?.hours}
        </div>
        <div className="flex justify-center">
          <span className="text-[10px] text-slate-700 sm:text-xs md:text-sm text-center uppercase tracking-wide">
            {countDownTime?.hours === 1 ? "Hour" : "Hours"}
          </span>
        </div>
      </div>

      {/* Minutes */}
      <div className="flex flex-col bg-[#cdcccc] shadow-lg rounded-2xl w-12 sm:w-20 lg:w-24 hover:scale-105 transition-transform">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 font-bold text-slate-700 text-sm sm:text-base md:text-lg">
          {countDownTime?.minutes}
        </div>
        <div className="flex justify-center">
          <span className="text-[10px] text-slate-700 sm:text-xs md:text-sm text-center uppercase tracking-wide">
            {countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
          </span>
        </div>
      </div>

      {/* Seconds */}
      <div className="flex flex-col bg-[#cdcccc] shadow-lg rounded-2xl w-12 sm:w-20 lg:w-24 hover:scale-105 transition-transform">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 font-bold text-slate-700 text-sm sm:text-base md:text-lg">
          <div ref={secondTimer}>{countDownTime?.seconds}</div>
        </div>
        <div className="flex justify-center">
          <span className="text-[10px] text-slate-700 sm:text-xs md:text-sm text-center uppercase tracking-wide">
            {countDownTime?.seconds === 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;