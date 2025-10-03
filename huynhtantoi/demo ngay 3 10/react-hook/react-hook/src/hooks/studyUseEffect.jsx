import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(timer); // cleanup khi unmount
  }, []); // [] = chỉ chạy 1 lần khi mount

  return <p>Đã trôi qua {time} giây</p>;
}
