import { useChallenges } from '../../contexts/ChallengesContext';
import { useCountdown } from '../../contexts/CountdownContext';
import * as S from './styles';

export function ChallengeBox() {
  const { activeChallenge, resetActiveChallenge, completeChallenge } =
    useChallenges();
  const { resetCountdown } = useCountdown();

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetActiveChallenge();
    resetCountdown();
  }

  return (
    <S.ChallengeBoxContainer>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`/icons/${activeChallenge.type}.svg`}
              alt="arm raising a weight"
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button type="button" onClick={handleChallengeSucceeded}>
              Completei
            </button>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.ChallengeBoxContainer>
  );
}
