import * as S from './styles';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <S.ChallengeBoxContainer>
      {hasActiveChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="/icons/body.svg" alt="arm raising a weight" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button type="button">Falhei</button>
            <button type="button">Completei</button>
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
