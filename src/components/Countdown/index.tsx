import { useEffect, useState } from 'react';
import * as S from './styles';

export function Countdown() {
  const [time, setTime] = useState(25 * 60); // 25min in seconds
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <S.CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.CountdownContainer>

      <S.CountdownButton type="button" onClick={startCountdown}>
        Iniciar um ciclo
      </S.CountdownButton>
    </div>
  );
}
