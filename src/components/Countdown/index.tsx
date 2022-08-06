import { useCountdown } from '../../contexts/CountdownContext';
import * as S from './styles';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useCountdown();

  // this two right here are exclusive, they will only be used here in this component
  // because of that that i didn't put them in the countdown context, it would't make sense
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
