import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
  height: 100%;

  background-color: ${props => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    line-height: 1.4;
    margin-top: 3rem;
    text-align: left;
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: ${props => props.theme.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme['gray-line']};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-block: 2.375rem;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${props => props.theme.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      color: ${props => props.theme.white};

      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.85);
      }

      &:first-child {
        background-color: ${props => props.theme.red};
      }

      &:last-child {
        background-color: ${props => props.theme.green};
      }
    }
  }
`;
