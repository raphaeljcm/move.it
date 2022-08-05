import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = useCallback(() => {
    setLevel(prev => prev + 1);
  }, []);

  const startNewChallenge = useCallback(() => {
    console.log('New Challenge');
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        challengesCompleted,
        currentExperience,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export const useChallenges = () => useContext(ChallengesContext);
