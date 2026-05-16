export const playSuccessSound = () => {
 try {
 const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
 if (!AudioContext) return;
 const ctx = new AudioContext();
 
 const playTone = (freq: number, startTime: number, duration: number) => {
 const osc = ctx.createOscillator();
 const gain = ctx.createGain();
 osc.connect(gain);
 gain.connect(ctx.destination);
 
 osc.type = 'sine';
 osc.frequency.setValueAtTime(freq, startTime);
 
 gain.gain.setValueAtTime(0, startTime);
 gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
 gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
 
 osc.start(startTime);
 osc.stop(startTime + duration);
 };

 const t = ctx.currentTime;
 playTone(440, t, 0.1); // A4
 playTone(554.37, t + 0.1, 0.1); // C#5
 playTone(659.25, t + 0.2, 0.3); // E5
 } catch (e) {
 console.warn("Audio not supported");
 }
};

export const playErrorSound = () => {
 try {
 const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
 if (!AudioContext) return;
 const ctx = new AudioContext();
 
 const playTone = (freq: number, startTime: number, duration: number) => {
 const osc = ctx.createOscillator();
 const gain = ctx.createGain();
 osc.connect(gain);
 gain.connect(ctx.destination);
 
 osc.type = 'sawtooth';
 osc.frequency.setValueAtTime(freq, startTime);
 osc.frequency.exponentialRampToValueAtTime(freq * 0.8, startTime + duration); // pitch drop
 
 gain.gain.setValueAtTime(0, startTime);
 gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
 gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
 
 osc.start(startTime);
 osc.stop(startTime + duration);
 };

 const t = ctx.currentTime;
 playTone(300, t, 0.2);
 playTone(250, t + 0.2, 0.3);
 } catch (e) {
 console.warn("Audio not supported");
 }
};
