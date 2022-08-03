import type { NextPage } from 'next';
import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import * as S from '../styles/home/styles';

const Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div />
      </section>
    </S.Container>
  );
};

export default Home;
