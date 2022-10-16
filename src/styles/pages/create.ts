import styled from 'styled-components';
import { pxToRem } from '../functions/func';

export const CreateUserContainer = styled.div`
  background-color: ${props => props.theme.blue};
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;

  main {
    justify-self: center;

    > section {
      margin-top: ${pxToRem(96)};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      position: relative;

      label {
        background: url('/icons/plus.svg') no-repeat center;
        width: ${pxToRem(55)};
        height: ${pxToRem(55)};
        cursor: pointer;

        position: absolute;
        top: 2rem;
      }

      input[type='file'] {
        color: transparent;
        width: ${pxToRem(120)};
        height: ${pxToRem(120)};
        background-color: transparent;
        position: absolute;

        &::-webkit-file-upload-button {
          visibility: hidden;
        }

        &:hover {
          cursor: pointer;
        }
      }

      input[type='text'] {
        width: 80%;
        padding: 1rem;
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
        width: 80%;
        height: 3rem;
        border: 0;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;

        background-color: ${props => props.theme.green};
        color: ${props => props.theme.white};
      }

      img {
        width: ${pxToRem(120)};
        height: ${pxToRem(120)};
        border-radius: 100%;
      }

      > div {
        width: ${pxToRem(120)};
        height: ${pxToRem(120)};
        background-color: ${props => props.theme['blue-dark']};
      }
    }
  }
`;
