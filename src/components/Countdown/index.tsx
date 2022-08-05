import { useEffect, useState } from 'react';
import { useChallenges } from '../../contexts/ChallengeContext';
import * as S from './styles';

let countdownTimeout: NodeJS.Timeout;
const INITIAL_TIME = 20 * 60;

export function Countdown() {
  const { startNewChallenge } = useChallenges();

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
      startNewChallenge();
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
        <S.CountdownButton disabled>
          Ciclo encerrado
          <img src="/icons/done.svg" alt="done icon" />
        </S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButton type="button" onClick={resetCountdown} isActive>
              Abandonar ciclo
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#666666"
                />
              </svg>
            </S.CountdownButton>
          ) : (
            <S.CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
              <img src="/icons/play.svg" alt="play icon" />
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
