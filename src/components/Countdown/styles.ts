import styled, { css } from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.title};

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${props => props.theme.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`;

interface CountdownButtonProps {
  isActive?: boolean;
}

export const CountdownButton = styled.button<CountdownButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background-color: ${props => props.theme['blue-dark']};
  }

  &:disabled {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.text};
    cursor: not-allowed;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: ${props => props.theme.white};
      color: ${props => props.theme.title};

      &:not(:disabled):hover {
        background-color: ${props => props.theme.red};
        color: ${props => props.theme.white};
      }
    `}
`;
