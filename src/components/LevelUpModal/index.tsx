import { useChallenges } from '../../contexts/ChallengesContext';
import * as S from './styles';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <S.Overlay>
      <S.LevelUpModalContainer>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </S.LevelUpModalContainer>
    </S.Overlay>
  );
}
