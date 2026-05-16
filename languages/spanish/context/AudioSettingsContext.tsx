import React, { createContext, useContext, useState, useEffect } from 'react';

type AudioSpeed = 1 | 0.75 | 0.5;

interface AudioSettingsContextType {
  audioSpeed: AudioSpeed;
  cycleAudioSpeed: () => void;
  isSlowMode: boolean; // keep for backward compatibility temporarily, or just remove it
}

const AudioSettingsContext = createContext<AudioSettingsContextType | undefined>(undefined);

export function AudioSettingsProvider({ children }: { children: React.ReactNode }) {
  const [audioSpeed, setAudioSpeed] = useState<AudioSpeed>(() => {
    const saved = localStorage.getItem('es_audio_speed');
    if (saved === '1' || saved === '0.75' || saved === '0.5') {
      return parseFloat(saved) as AudioSpeed;
    }
    // Backward compatibility
    const oldSaved = localStorage.getItem('es_slow_audio');
    if (oldSaved === 'true') return 0.5;
    return 1;
  });

  const cycleAudioSpeed = () => {
    setAudioSpeed(prev => {
      let next: AudioSpeed = 1;
      if (prev === 1) next = 0.75;
      else if (prev === 0.75) next = 0.5;
      else next = 1;
      
      localStorage.setItem('es_audio_speed', next.toString());
      return next;
    });
  };

  return (
    <AudioSettingsContext.Provider value={{ audioSpeed, cycleAudioSpeed, isSlowMode: audioSpeed < 1 }}>
      {children}
    </AudioSettingsContext.Provider>
  );
}

export function useAudioSettings() {
  const context = useContext(AudioSettingsContext);
  if (context === undefined) {
    throw new Error('useAudioSettings must be used within an AudioSettingsProvider');
  }
  return context;
}
