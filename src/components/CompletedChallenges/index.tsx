import { useChallenges } from '../../contexts/ChallengeContext';
import * as S from './styles';

export function CompletedChallenges() {
  const { challengesCompleted } = useChallenges();

  return (
    <S.CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.CompletedChallengesContainer>
  );
}
