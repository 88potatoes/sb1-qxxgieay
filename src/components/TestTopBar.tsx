import { Bell, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestTopBar() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        return {
          minutes: prevTime.minutes + Math.floor(newSeconds / 60),
          seconds: newSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time to ensure two digits
  const formatTime = (num) => num.toString().padStart(2, "0");

  return (
    <div className="w-full test-top-bar shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold lucas-logo">
              <a href="/" className="px-0 bg-transparent">
                LUCAS
              </a>
            </h1>
            <span className="text-lg font-medium text-white">
              TESTING IN PROGRESS
            </span>
            {/* Timer */}
            <span className="text-lg font-medium text-white">
              {formatTime(time.minutes)}:{formatTime(time.seconds)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 icon hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 icon hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">DR</span>
              </div>
              <span className="text-sm font-medium text-white">
                Dr. Roberts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
