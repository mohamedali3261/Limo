export const playSuccessSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
    
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {
    console.error('Audio play failed', e);
  }
};

// دالة لنطق النص باستخدام Web Speech API
export const speak = (text: string, lang: string = 'en-US', voiceGender: 'male' | 'female' = 'male'): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // التحقق من دعم المتصفح
      if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported');
        resolve();
        return;
      }

      // إيقاف أي نطق جاري
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.85; // سرعة النطق (أبطأ قليلاً للوضوح)
      utterance.volume = 1; // مستوى الصوت

      // الحصول على الأصوات المتاحة
      const voices = window.speechSynthesis.getVoices();
      
      // البحث عن صوت مناسب حسب الجنس
      let selectedVoice: SpeechSynthesisVoice | undefined;

      if (voiceGender === 'female') {
        // البحث عن صوت أنثوي
        selectedVoice = voices.find(voice => 
          voice.lang.startsWith('en') && (
            voice.name.toLowerCase().includes('female') ||
            voice.name.toLowerCase().includes('woman') ||
            voice.name.toLowerCase().includes('samantha') ||
            voice.name.toLowerCase().includes('victoria') ||
            voice.name.toLowerCase().includes('karen') ||
            voice.name.toLowerCase().includes('susan') ||
            voice.name.toLowerCase().includes('zira') ||
            voice.name.toLowerCase().includes('hazel')
          )
        );
      } else {
        // البحث عن صوت ذكوري
        selectedVoice = voices.find(voice => 
          voice.lang.startsWith('en') && (
            voice.name.toLowerCase().includes('male') ||
            voice.name.toLowerCase().includes('man') ||
            voice.name.toLowerCase().includes('daniel') ||
            voice.name.toLowerCase().includes('david') ||
            voice.name.toLowerCase().includes('james') ||
            voice.name.toLowerCase().includes('george') ||
            voice.name.toLowerCase().includes('mark')
          )
        );
      }

      // إذا لم يتم العثور على صوت مناسب، استخدم أي صوت إنجليزي
      if (!selectedVoice) {
        const englishVoices = voices.filter(voice => voice.lang.startsWith('en'));
        if (englishVoices.length > 0) {
          // اختيار صوت بناءً على الجنس من الأصوات المتاحة
          selectedVoice = voiceGender === 'female' 
            ? englishVoices[Math.min(1, englishVoices.length - 1)] // عادة الصوت الثاني يكون أنثوي
            : englishVoices[0]; // الصوت الأول عادة يكون ذكوري
        }
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log(`Using voice: ${selectedVoice.name} for ${voiceGender}`);
      }

      // تعديل درجة الصوت حسب الجنس لتمييز أوضح
      utterance.pitch = voiceGender === 'female' ? 1.3 : 0.85;

      utterance.onend = () => {
        console.log(`Finished speaking: ${text.substring(0, 30)}...`);
        resolve();
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        resolve(); // نستمر حتى لو حدث خطأ
      };

      // بدء النطق
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Speech synthesis failed:', e);
      resolve(); // نستمر حتى لو حدث خطأ
    }
  });
};

// دالة لإيقاف النطق
export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// دالة للحصول على الأصوات المتاحة
export const getAvailableVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    let voices = window.speechSynthesis.getVoices();
    
    if (voices.length > 0) {
      resolve(voices);
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        resolve(voices);
      };
    }
  });
};
