import type { NextPage } from 'next';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import * as S from './styles';

const Home: NextPage = () => {
  return (
    <S.Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div />
      </section>
    </S.Container>
  );
};

export default Home;
