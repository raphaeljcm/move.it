import { useChallenges } from '../../contexts/ChallengeContext';
import * as S from './style';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <S.ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <S.CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </S.CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </S.ExperienceBarContainer>
  );
}
