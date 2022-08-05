import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import challenges from '../../challenges.json';

type Challenge = {
  type: string;
  description: string;
  amount: number;
};

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge | null;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );

  const levelUp = useCallback(() => {
    setLevel(prev => prev + 1);
  }, []);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        challengesCompleted,
        currentExperience,
        startNewChallenge,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export const useChallenges = () => useContext(ChallengesContext);
