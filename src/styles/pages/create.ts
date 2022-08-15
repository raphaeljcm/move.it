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
        top: 1.75rem;
      }

      input[type='file'] {
        color: transparent;
        width: ${pxToRem(120)};
        height: ${pxToRem(120)};
        background-color: ${props => props.theme['blue-dark']};

        &::-webkit-file-upload-button {
          visibility: hidden;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
