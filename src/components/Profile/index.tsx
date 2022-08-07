import { useChallenges } from '../../contexts/ChallengesContext';
import * as S from './styles';

export function Profile() {
  const { level } = useChallenges();

  return (
    <S.ProfileContainer>
      <img
        src="https://github.com/raphaeljcm.png"
        alt="Raphael Marques github profile"
      />
      <div>
        <strong>Raphael Marques</strong>
        <p>
          <img src="/icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </S.ProfileContainer>
  );
}
