import styled from 'styled-components';

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: ${props => props.theme['gray-line']};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background-color: ${props => props.theme.green};

      transition: width 1s;
    }
  }
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;

  transition: all 1s;
  transform: translateX(-50%);
`;
