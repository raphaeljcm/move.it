import { useEffect, useState } from 'react';
import * as S from './styles';

let countdownTimeout: NodeJS.Timeout;
const INITIAL_TIME = 0.1 * 60;

export function Countdown() {
  const [time, setTime] = useState(INITIAL_TIME); // 25min in seconds
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(INITIAL_TIME);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

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

      {hasFinished ? (
        <S.CountdownButton disabled>Ciclo encerrado</S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButton type="button" onClick={resetCountdown} isActive>
              Abandonar ciclo
            </S.CountdownButton>
          ) : (
            <S.CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
