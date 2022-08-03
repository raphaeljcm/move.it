import * as S from './styles';

export function Profile() {
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
          Level 1
        </p>
      </div>
    </S.ProfileContainer>
  );
}
