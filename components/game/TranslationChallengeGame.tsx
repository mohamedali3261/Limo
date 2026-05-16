import React, { useState } from 'react';
import { playSuccessSound } from '../../lib/audio';
import confetti from 'canvas-confetti';

interface Props {
  text: string;
  expectedTranslation: string;
  onComplete: (isCorrect: boolean) => void;
}

export function TranslationChallengeGame({ text, expectedTranslation, onComplete }: Props) {
  const [translation, setTranslation] = useState('');

  const handleCheck = () => {
    // Simple check - in production might need fuzzy matching
    const isCorrect = translation.trim().toLowerCase() === expectedTranslation.trim().toLowerCase();
    if (isCorrect) {
      playSuccessSound();
      
      // Snow falling effect
      const duration = 2000;
      const animationEnd = Date.now() + duration;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        confetti({
          particleCount: 5,
          startVelocity: 0,
          ticks: 200,
          origin: {
            x: Math.random(),
            y: 0
          },
          colors: ['#ffffff', '#e0f7ff', '#b3e5fc'],
          shapes: ['circle'],
          gravity: 0.5,
          scalar: 0.8,
          drift: 0.5
        });
      }, 100);
    }
    onComplete(isCorrect);
  };

  return (
    <div className="p-8 bg-white rounded-3xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center">ترجم الفقرة التالية</h2>
      <div className="p-4 bg-amber-50 rounded-xl font-bold" dir="ltr">{text}</div>
      <textarea 
        value={translation}
        onChange={e => setTranslation(e.target.value)}
        className="w-full h-32 p-4 border rounded-xl"
        placeholder="اكتب الترجمة هنا"
        dir="ltr"
      />
      <button onClick={handleCheck} className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold">تحقق</button>
    </div>
  );
}
