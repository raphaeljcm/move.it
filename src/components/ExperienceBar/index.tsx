import * as S from './style';

export function ExperienceBar() {
  return (
    <S.ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <S.CurrentExperience style={{ left: '50%' }}>
          300 xp
        </S.CurrentExperience>
      </div>
      <span>600 xp</span>
    </S.ExperienceBarContainer>
  );
}