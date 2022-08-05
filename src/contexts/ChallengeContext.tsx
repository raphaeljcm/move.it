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
  experienceToNextLevel: number;
  activeChallenge: Challenge | null;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetActiveChallenge: () => void;
  completeChallenge: () => void;
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

  const experienceToNextLevel = ((level + 1) * 4) ** 2; // Math.pow is equal to **, exponentiation

  const levelUp = useCallback(() => {
    setLevel(prev => prev + 1);
  }, []);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }, []);

  const resetActiveChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(prev => prev + 1);
  }, [activeChallenge, levelUp, currentExperience, experienceToNextLevel]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        challengesCompleted,
        experienceToNextLevel,
        currentExperience,
        startNewChallenge,
        activeChallenge,
        resetActiveChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export const useChallenges = () => useContext(ChallengesContext);
