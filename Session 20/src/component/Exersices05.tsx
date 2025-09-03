import { useState, useEffect } from "react";

export default function Exersices05() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Thời gian: {count} giây</p>
    </div>
  );
}
