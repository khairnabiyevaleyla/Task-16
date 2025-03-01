import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const formatNumber = (num) => String(num).padStart(2, "0");

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-center text-[#141718] text-[34px]">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col items-center bg-[#F3F5F7] p-2 "
        >
          <span>{value}</span>
          <span className="text-xs text-[#6C7275]">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
