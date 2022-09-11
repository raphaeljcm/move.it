import styled from 'styled-components';
import { pxToRem } from '../functions/func';

export const LoginContainer = styled.div`
  background-color: ${props => props.theme.blue};
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;

  main > div {
    margin-top: ${pxToRem(96)};

    h1 {
      font-size: ${pxToRem(36)};
      line-height: ${pxToRem(46)};
      font-weight: 600;
      color: ${props => props.theme.white};
      margin-bottom: 1.5rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      div {
        width: ${pxToRem(254)};

        p {
          color: ${props => props.theme['text-highlight']};
        }
      }
    }

    > form {
      margin-top: ${pxToRem(40)};
      display: flex;

      input {
        padding: 1.5rem;
        background: linear-gradient(
          90deg,
          #4953b8 0%,
          rgba(73, 83, 184, 0.2) 100%
        );
        border: 0;
        border-radius: 5px 0px 0px 5px;
        color: ${props => props.theme.white};
        outline: 0;

        ::placeholder {
          color: ${props => props.theme['text-highlight']};
          font-size: 1rem;
        }

        :focus {
          outline: 1.5px solid #414aa3;
        }
      }

      button {
        padding: 1.5rem;
        background: url('/icons/arrow.svg') no-repeat center;
        background-size: 1.25rem;
        background-color: ${props => props.theme['blue-dark']};
        border: 0;
        width: ${pxToRem(68)};
        border-radius: 0px 5px 5px 0px;

        &.active {
          background-color: ${({ theme }) => theme.green};
        }
      }
    }
  }
`;
