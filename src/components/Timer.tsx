import { useEffect, useState } from 'react';

export function Timer() {
  const [start, setStart] = useState<number | null>(null);
  const [hh, setHH] = useState<number>(0);
  const [mm, setMM] = useState<number>(0);
  const [ss, setSS] = useState<number>(0);

  useEffect(() => {
    if (start === null) return;

    const timer = setInterval(() => {
      const timeElapsed = start + 1;
      setStart(timeElapsed);
      const hh = Math.floor(timeElapsed / 3600);
      setHH(hh);
      const mm = Math.floor((timeElapsed % 3600) / 60);
      setMM(mm);
      const ss = timeElapsed - (hh * 3600 + mm * 60);
      setSS(ss);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [start]);

  const startTimer = () => setStart(0);

  const stopTimer = () => setStart(null);

  return (
    <div>
      <p>
        {hh < 10 ? `0${hh}` : hh} : {mm < 10 ? `0${mm}` : mm} : {ss < 10 ? `0${ss}` : ss}
      </p>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
    </div>
  );
}
