import * as S from './styles';

export function Countdown() {
  return (
    <S.CountdownContainer>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </S.CountdownContainer>
  );
}
