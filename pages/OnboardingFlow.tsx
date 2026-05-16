import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import UsernameInput from './onboarding/UsernameInput';
import LanguageSelection from './onboarding/LanguageSelection';
import GoalSelection from './onboarding/GoalSelection';
import CurrentLevelSelection from './onboarding/CurrentLevelSelection';
import WelcomeScreen from './onboarding/WelcomeScreen';

interface OnboardingData {
  username: string;
  language: string;
  goal: string;
  currentLevel: string;
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    username: '',
    language: '',
    goal: '',
    currentLevel: ''
  });

  const handleUsernameInput = (username: string) => {
    setOnboardingData(prev => ({ ...prev, username }));
    setCurrentStep(2);
  };

  const handleLanguageSelect = (language: string) => {
    setOnboardingData(prev => ({ ...prev, language }));
    setCurrentStep(3);
  };

  const handleGoalSelect = (goal: string) => {
    setOnboardingData(prev => ({ ...prev, goal }));
    setCurrentStep(4);
  };

  const handleCurrentLevelSelect = (currentLevel: string) => {
    setOnboardingData(prev => ({ ...prev, currentLevel }));
    setCurrentStep(5);
  };

  const handleComplete = () => {
    // Save onboarding data to localStorage or API
    localStorage.setItem('memohero_onboarding', JSON.stringify(onboardingData));
    onComplete(onboardingData);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {currentStep === 1 && (
        <UsernameInput
          key="username"
          onNext={handleUsernameInput}
        />
      )}
      
      {currentStep === 2 && (
        <LanguageSelection
          key="language"
          onNext={handleLanguageSelect}
        />
      )}
      
      {currentStep === 3 && (
        <GoalSelection
          key="goal"
          onNext={handleGoalSelect}
          onBack={handleBack}
        />
      )}
      
      {currentStep === 4 && (
        <CurrentLevelSelection
          key="currentLevel"
          language={onboardingData.language}
          onNext={handleCurrentLevelSelect}
          onBack={handleBack}
        />
      )}
      
      {currentStep === 5 && (
        <WelcomeScreen
          key="welcome"
          username={onboardingData.username}
          language={onboardingData.language}
          goal={onboardingData.goal}
          currentLevel={onboardingData.currentLevel}
          onComplete={handleComplete}
          onBack={handleBack}
        />
      )}
    </AnimatePresence>
  );
}
