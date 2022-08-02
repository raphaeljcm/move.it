import type { NextPage } from 'next';
import { ExperienceBar } from '../components/ExperienceBar';

const Home: NextPage = () => {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
};

export default Home;
