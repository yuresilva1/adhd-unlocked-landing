import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const difference = midnight.getTime() - now.getTime();

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4">
      <div className="container max-w-7xl mx-auto text-center">
        <p className="text-sm md:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span>⏰ LIMITED TIME OFFER ENDS IN:</span>
          <span className="inline-flex gap-1 md:gap-2 font-mono text-base md:text-lg">
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, "0")}</span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, "0")}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
