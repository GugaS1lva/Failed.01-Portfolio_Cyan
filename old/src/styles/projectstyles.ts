import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > main {
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;

    display: grid;
    gird-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) {
      gird-template-columns: 1fr 1fr;
    }

    @media (max-width: 550px) {
      gird-template-columns: 1fr;
    }
  }
`;
