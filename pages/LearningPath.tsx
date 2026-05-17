import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../lib/api';
import { 
  CheckCircle2, PlayCircle, Trophy, Star, Lock, MapIcon, 
  GraduationCap, Gift, Compass, Cloud, Sprout,
  User, Sparkles, Sword, Zap, AudioLines, MapPin
} from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useAuthStore } from '../lib/store/auth';
import { useSettingsStore } from '../lib/store/settings';
import { useMediaQuery } from '../lib/hooks/useMediaQuery';
import { toast } from 'sonner';
import { LoadingPage } from '../components/common/LoadingPage';

import { AREA_THEMES, MOCK_FRIENDS } from '../constants/learning';
import { MapHeader } from '../components/learning/MapHeader';
import { LevelCard } from '../components/learning/LevelCard';

export default function LearningPath() {
  const [levels, setLevels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const { mapCharacterUrl, mapBackgroundUrls, mapAnimInterval } = useSettingsStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const currentNodeRef = useRef<HTMLDivElement>(null);
  const [claimedRadios, setClaimedRadios] = useState<string[]>([]);
  const [flashEventNodeId, setFlashEventNodeId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPath = async () => {
      try {
        const data = await apiFetch('/api/learning/path');
        setLevels(data.levels);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPath();
  }, []);

  // Flatten lessons and intersperse chests and boss levels
  const nodes = useMemo(() => {
    const list: any[] = [];
    levels.forEach((level, lIndex) => {
      level.lessons.forEach((lesson: any, iIndex: number) => {
        // Mark as boss if it's the last lesson of the level
        const isBoss = iIndex === level.lessons.length - 1;
        
        list.push({ 
          ...lesson, 
          type: isBoss ? 'boss' : 'lesson', 
          levelIndex: lIndex,
          theme: AREA_THEMES[lIndex % AREA_THEMES.length]
        });
        
        // Add a chest every few lessons
        if ((iIndex + 1) % 3 === 0 && !isBoss) {
          list.push({ 
            id: `chest-${level.id}-${iIndex}`,
            type: 'chest',
            levelIndex: lIndex,
            theme: AREA_THEMES[lIndex % AREA_THEMES.length],
            is_completed: false 
          });
        }
      });
    });
    return list;
  }, [levels]);

  // Find user's current node index
  const currentNodeIndex = useMemo(() => {
    const firstIncomplete = nodes.findIndex(n => (n.type === 'lesson' || n.type === 'boss') && !n.is_completed);
    return firstIncomplete === -1 ? Math.max(0, nodes.length - 1) : firstIncomplete;
  }, [nodes]);

  const mapBg = useMemo(() => {
    if (mapBackgroundUrls.length === 0) return null;
    const currentLevelIndex = nodes[currentNodeIndex]?.levelIndex || 0;
    // Map every 5 levels to a background from the list
    const bgIndex = Math.floor(currentLevelIndex / 5);
    // Use the last background if we exceed the list length
    return mapBackgroundUrls[Math.min(bgIndex, mapBackgroundUrls.length - 1)];
  }, [mapBackgroundUrls, currentNodeIndex, nodes]);

  useEffect(() => {
    if (!loading && currentNodeRef.current) {
      setTimeout(() => {
        currentNodeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }, [loading, currentNodeIndex]);

  // Flash event setup
  useEffect(() => {
    if (nodes.length > 0 && flashEventNodeId === null) {
      const flashIdx = Math.min(currentNodeIndex + 2, nodes.length - 1);
      if (flashIdx !== null && (nodes[flashIdx].type === 'lesson' || nodes[flashIdx].type === 'boss')) {
        setFlashEventNodeId(flashIdx);
      }
    }
  }, [nodes, flashEventNodeId, currentNodeIndex]);



  const handleChestClick = (id: string) => {
    if (claimedRadios.includes(id)) {
      toast.info('لقد حصلت على هذه المكافأة بالفعل!');
      return;
    }
    setClaimedRadios([...claimedRadios, id]);
    toast.success('مبروك! لقد حصلت على 50 نقطة!', {
       icon: '🎁'
    });
  };

  if (loading) {
    return <LoadingPage message="بناء خريطة مغامرتك..." />;
  }

  return (
    <div className="relative min-h-[calc(100vh-80px)] md:min-h-screen font-sans -m-4 md:-m-8 z-10">
      {/* Dynamic Background decor based on current section */}
      <AnimatePresence mode='wait'>
        {mapBg ? (
          <div 
            key={mapBg}
            className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
            style={{ 
              background: (() => {
                if (!mapBg) return undefined;
                const bgLower = mapBg.toLowerCase();
                // Check if it's a gradient
                if (bgLower.includes('gradient(')) return mapBg;
                // Check if it's a color (hex, rgb, hsl, or common name without dots/slashes)
                const isColor = bgLower.startsWith('#') || 
                                bgLower.startsWith('rgb') || 
                                bgLower.startsWith('hsl') ||
                                (!bgLower.includes('.') && !bgLower.includes('/') && !bgLower.includes('\\'));
                
                if (isColor) return mapBg;
                // Otherwise treat as URL
                return `url("${mapBg}") center/cover no-repeat fixed`;
              })()
            }}
          />
        ) : nodes[currentNodeIndex]?.theme && (
          <div 
            key={nodes[currentNodeIndex].theme.id}
            className={`fixed inset-0 pointer-events-none z-0 transition-colors duration-1000 ${
              nodes[currentNodeIndex].theme.bg.replace('from-', 'from-').replace('to-', 'to-')
            }`}
          />
        )}
      </AnimatePresence>

      {/* Light Background Color Overlay for Current Level */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          key={`level-bg-${nodes[currentNodeIndex]?.levelIndex}`}
          className={`absolute inset-0 ${
            nodes[currentNodeIndex]?.levelIndex % 3 === 0 
              ? 'bg-gradient-to-br from-blue-50/40 to-cyan-50/40'
              : nodes[currentNodeIndex]?.levelIndex % 3 === 1
              ? 'bg-gradient-to-br from-orange-50/40 to-amber-50/40'
              : 'bg-gradient-to-br from-purple-50/40 to-pink-50/40'
          }`}
        />
      </div>

      <MapHeader user={user} />

      <div 
        ref={containerRef}
        className="relative pt-12 pb-48 px-6 max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Next Goal Header */}
        <div className="flex justify-center mb-6">
           <div className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full border border-gray-100 flex items-center gap-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">الهدف التالي:</span>
              <span className="text-[10px] font-black text-primary uppercase">{levels[nodes[currentNodeIndex]?.levelIndex + 1]?.title || 'النهاية العظيمة'}</span>
           </div>
        </div>

        {/* Course Intro */}
        <div className="text-center mb-16 relative z-10">
          <div className="w-24 h-24 bg-orange-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 relative">
             <GraduationCap size={48} className="text-primary" />
             {!isMobile && (
               <motion.div animate={{ opacity: [0.3, 0.1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-primary rounded-full blur-2xl" />
             )}
          </div>
          <h2 className="text-4xl font-display font-black text-slate-900 mb-4 tracking-tight">ابدأ رحلتك الملحمية</h2>
          <p className="text-slate-400 font-bold max-w-xs mx-auto leading-relaxed">كل درس هو خطوة نحو العظمة. أكمل الدروس لفتح مناطق جديدة.</p>
        </div>

        {/* Dynamic Nodes with SVG Path */}
        <div 
          className="relative z-10 w-full mb-10 mt-10"
          style={{ height: nodes.reduce((sum, _, i) => sum + (i === 0 || nodes[i - 1].levelIndex !== nodes[i].levelIndex ? 550 : 220), 0) + 200 }}
        >
          
          {/* Floating Clouds Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-30">
             {[...Array(15)].map((_, i) => (
                  <div
                  key={`cloud-${i}`}
                  className="absolute filter opacity-60 text-gray-300"
                  style={{ top: `${i * 150 + Math.random() * 100}px`, left: `-${Math.random() * 20}%` }}
                >
                  <Cloud size={64 + Math.random() * 64} strokeWidth={1} />
                </div>
             ))}
          </div>

          {/* Path SVG */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox={`0 0 100 ${nodes.reduce((sum, _, i) => sum + (i === 0 || nodes[i - 1].levelIndex !== nodes[i].levelIndex ? 550 : 220), 0) + 200}`}
            preserveAspectRatio="none"
          >
            {nodes.map((node, index) => {
              if (index === 0) return null;
              
              const getSegmentHeight = (idx: number) => {
                const isLevelStart = idx === 0 || nodes[idx - 1].levelIndex !== nodes[idx].levelIndex;
                return isLevelStart ? 550 : 220;
              };

              const calculateY = (idx: number) => {
                let y = 0;
                for(let i=0; i < idx; i++) {
                  y += getSegmentHeight(i);
                }
                const segmentH = getSegmentHeight(idx);
                // Center of the button
                // Level start has header 0->offset, button at bottom.
                // We'll place button at bottom-16 (64px from bottom), plus button's half height (~60px)
                // Let's say center is exactly segmentH - 100
                return y + segmentH - 100;
              };

              const calculateX = (idx: number) => {
                // Use a standard multiplier
                const horizontalOffset = Math.sin(idx * 0.8) * (window.innerWidth < 640 ? 25 : 30);
                return 50 + horizontalOffset;
              };

              const curX = calculateX(index);
              const curY = calculateY(index);
              const prevX = calculateX(index - 1);
              const prevY = calculateY(index - 1);
              
              const midY = (prevY + curY) / 2;
              const segmentD = `M ${prevX} ${prevY} C ${prevX} ${midY}, ${curX} ${midY}, ${curX} ${curY}`;
              const isCompleted = index <= currentNodeIndex;

              return (
                <g key={`segment-${index}`}>
                  {/* Shadow */}
                  <path 
                    d={segmentD}
                    fill="none" 
                    stroke="#000" 
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="10, 15"
                    opacity="0.05"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Base Segment */}
                  <path 
                    d={segmentD}
                    fill="none" 
                    stroke={isCompleted ? "#CBD5E1" : "#E2E8F0"} 
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="8, 12"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Active/Completed Highlight */}
                  {isCompleted && (
                    <path 
                      d={segmentD}
                      fill="none" 
                      stroke="#58CC02" 
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="8, 12"
                      vectorEffect="non-scaling-stroke"
                      style={{ strokeDashoffset: 0 }}
                    />
                  )}
                  {/* Small connection dot indicating the "pin" spot */}
                  <circle cx={prevX} cy={prevY} r="1.5" fill={isCompleted ? "#58CC02" : "#94A3B8"} opacity="0.3" />
                </g>
              );
            })}
          </svg>

          {nodes.map((node, index) => {
            const isCompleted = node.is_completed;
            const firstIncompleteIdx = nodes.findIndex(n => (n.type === 'lesson' || n.type === 'boss') && !n.is_completed);
            // Lock the lesson if it's not the first incomplete one (sequential order)
            // But allow access to completed lessons for review
            const isLocked = (node.type === 'lesson' || node.type === 'boss') && !isCompleted && firstIncompleteIdx !== -1 && index !== firstIncompleteIdx;
            const isAudioLevel = node.id % 5 === 0 && node.type === 'lesson';
            
            // Check if this is the start of a new level
            const isFirstOfLevel = index === 0 || nodes[index - 1].levelIndex !== node.levelIndex;
            const currentLevel = levels[node.levelIndex];

            // Zig-zag offset
            const horizontalOffset = Math.sin(index * 0.8) * (window.innerWidth < 640 ? 25 : 30);
            const segmentH = isFirstOfLevel ? 550 : 220;
            
            let topOffset = 0;
            for(let i=0; i < index; i++) {
              topOffset += (i === 0 || nodes[i - 1].levelIndex !== nodes[i].levelIndex ? 550 : 220);
            }

            return (
              <div 
                key={`${node.id}-${index}`} 
                className="absolute left-0 right-0 flex flex-col items-center"
                style={{ top: topOffset, height: segmentH }}
              >
                {isFirstOfLevel && (
                  <div 
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-lg z-10"
                  >
                    <div className={`mx-4 p-8 rounded-[3rem] border-b-8 transition-all duration-500 shadow-xl overflow-hidden relative ${
                      isLocked ? 'bg-gray-100 border-gray-200 grayscale' : 'bg-white border-primary shadow-primary/10'
                    }`}>
                      {/* Decorative Background Icon */}
                      <div className="absolute -right-8 -bottom-8 opacity-5 transform rotate-12 scale-[3]">
                         {node.theme?.icon && <node.theme.icon size={120} />}
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-lg ${
                            isLocked ? 'bg-gray-200 text-gray-400' : 'bg-primary text-white'
                         }`}>
                            <span className="text-2xl font-black">{node.levelIndex + 1}</span>
                         </div>
                         <h2 className={`text-2xl font-black ${isLocked ? 'text-gray-400' : 'text-gray-900'}`}>
                           {currentLevel?.title || 'مستوى جديد'}
                         </h2>
                         <div className="flex items-center gap-2">
                           <div className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                             isLocked ? 'bg-gray-200 text-gray-400' : 'bg-primary/10 text-primary'
                           }`}>
                             {node.theme?.name}
                           </div>
                           {isLocked && <Lock size={14} className="text-gray-400" />}
                         </div>
                         
                         {!isLocked && (
                            <div className="w-full max-w-[200px] mt-4 space-y-1">
                               <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                                  <span>التقدم</span>
                                  <span>{Math.round((currentLevel?.lessons?.filter((l: any) => l.is_completed).length / currentLevel?.lessons?.length * 100) || 0)}%</span>
                               </div>
                               <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div 
                                    style={{ width: `${(currentLevel?.lessons?.filter((l: any) => l.is_completed).length / currentLevel?.lessons?.length * 100) || 0}%` }}
                                    className="h-full bg-primary"
                                  />
                               </div>
                            </div>
                         )}
                      </div>
                    </div>
                  </div>
                )}

                <div 
                  ref={index === currentNodeIndex ? currentNodeRef : null}
                  className="absolute bottom-[36px] flex flex-col items-center z-20"
                  style={{ left: `${50 + horizontalOffset}%`, transform: `translateX(-50%)` }}
                >
                  {/* Pinned Connection Effect - HIDDEN */}
                  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
                    <motion.div
                      animate={index === currentNodeIndex ? { y: [0, -4, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MapPin size={24} className={`drop-shadow-lg ${
                        index <= currentNodeIndex ? 'text-primary fill-primary/20' : 'text-gray-300'
                      }`} />
                    </motion.div>
                  </div> */}

                  {/* Environmental Decorations */}
                  <div className="absolute -left-20 -top-8 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {index % 4 === 0 && <div className="text-primary/40 drop-shadow-lg scale-[4]">{node.theme?.particles?.[0] || <Sprout />}</div>}
                    {index % 4 === 1 && <div className="text-accent/40 drop-shadow-lg scale-[4]">{node.theme?.particles?.[1] || <Sparkles />}</div>}
                    {index % 4 === 2 && <div className="text-secondary/40 drop-shadow-lg scale-[4]">{node.theme?.particles?.[2] || <Sparkles />}</div>}
                  </div>
                <div className="absolute -right-20 top-10 pointer-events-none opacity-40">
                   {index % 3 === 0 && <div className="text-gray-300 drop-shadow-md scale-[3]"><Cloud /></div>}
                   {index % 3 === 1 && <div className="text-yellow-300 drop-shadow-md scale-[3]"><Star /></div>}
                </div>

                {/* Flash Event Banner */}
                {index === flashEventNodeId && !isCompleted && (
                  <div 
                    className="absolute -top-16 z-30"
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-black px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-orange-500/30 border border-white/20 whitespace-nowrap">
                      <Zap size={14} className="fill-white animate-pulse" />
                      <span>حدث خاص: 2x نقاط</span>
                    </div>
                  </div>
                )}

                {/* Friends at this node - HIDDEN */}
                {/* {MOCK_FRIENDS.filter(f => f.reachedNode === index).map((friend, fIndex) => (
                  <motion.div 
                    key={friend.id} 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -left-12 z-20" 
                    style={{ top: `${fIndex * 35}px` }}
                  >
                    <div 
                      className="w-8 h-8 bg-indigo-100 rounded-full border-2 border-indigo-400 flex items-center justify-center shadow-md text-sm cursor-pointer" 
                      onClick={(e) => { e.stopPropagation(); toast(`${friend.name} هنا!`); }}
                    >
                      {friend.avatar}
                    </div>
                  </motion.div>
                ))} */}

                {/* Node Buttons */}
                {node.type === 'lesson' || node.type === 'boss' ? (
                  <motion.button
                    whileHover={!isLocked && !isMobile ? { y: -5 } : {}}
                    whileTap={!isLocked && !isMobile ? {} : {}}
                    onClick={() => {
                      if (isLocked) {
                        toast.error('أكمل الدرس السابق أولاً! 🔒', {
                          description: 'يجب أن تتعلم بالترتيب لتحقيق أفضل النتائج.'
                        });
                      } else {
                        navigate(`/learning/lesson/${node.id}`);
                      }
                    }}
                    className={`relative flex items-center justify-center transition-all group ${
                      node.type === 'boss' 
                        ? 'w-32 h-32 sm:w-36 sm:h-36 rounded-[2rem] border-b-[10px]' 
                        : 'w-24 h-24 sm:w-28 sm:h-28 rounded-[2rem] border-b-[8px]'
                    } ${
                      isCompleted ? 'bg-[#58CC02] border-[#46A302] text-white' : 
                      isLocked ? 'bg-[#E5E5E5] border-[#AFAFAF] text-gray-400 opacity-60' : 
                      node.type === 'boss' ? 'bg-red-500 border-red-700 text-white shadow-2xl shadow-red-500/30' :
                      'bg-primary border-[#cc5600] text-white shadow-2xl shadow-primary/30'
                    }`}
                  >
                    {/* Audio Level Badge - HIDDEN */}
                    {/* {isAudioLevel && !isCompleted && !isLocked && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg z-20" title="درس صوتي">
                        <AudioLines size={14} className="text-white" />
                      </div>
                    )} */}
                    
                    {isCompleted ? (
                      <CheckCircle2 className={`${node.type === 'boss' ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12 sm:w-16 sm:h-16'}`} />
                    ) : isLocked ? (
                      <Lock className="w-8 h-8 opacity-40" />
                    ) : node.type === 'boss' ? (
                      <div className="flex flex-col items-center">
                         {levels[node.levelIndex]?.icon_url ? (
                           <img src={levels[node.levelIndex].icon_url} alt="" className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-1" />
                         ) : (
                           <Sword className="w-12 h-12 sm:w-14 sm:h-14 mb-1" />
                         )}
                         <span className="text-[9px] font-black uppercase tracking-tighter">تحدي الزعيم</span>
                      </div>
                    ) : (
                      <div>
                         {levels[node.levelIndex]?.icon_url ? (
                           <img src={levels[node.levelIndex].icon_url} alt="" className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
                         ) : (
                           <PlayCircle className="w-12 h-12 sm:w-14 sm:h-14" />
                         )}
                      </div>
                    )}

                    {/* Character Avatar on current node */}
                    {index === currentNodeIndex && (
                      <>
                        <div 
                          className="absolute -top-[1.2rem] z-20"
                        >
                          <div className="relative">
                              <div className="w-14 h-14 bg-white rounded-full border-4 border-primary shadow-2xl flex items-center justify-center overflow-hidden">
                                {mapCharacterUrl ? (
                                  <img src={mapCharacterUrl} className="w-full h-full object-cover" alt="Character" />
                                ) : (
                                  <User className="text-primary w-8 h-8" />
                                )}
                              </div>
                              {/* Simple Progress Mini-bar */}
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-[8px] text-white px-2 py-0.5 rounded-full font-black shadow-sm hidden md:block">
                                {(currentNodeIndex / (nodes.length - 1) * 100).toFixed(0)}%
                              </div>
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 -z-10" />
                        </div>

                        {/* Companion Pet with Evolution */}
                        <div
                          className="absolute -right-14 -top-12 z-30"
                        >
                          <div 
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border-2 border-orange-300 flex flex-col items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform"
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              const worldIdx = nodes[currentNodeIndex]?.levelIndex || 0;
                              let petName = 'Unknown Egg';
                              if (worldIdx >= 1) petName = 'Little Chick';
                              if (worldIdx >= 3) petName = 'Wisdom Owl';
                              if (worldIdx >= 4) petName = 'Royal Falcon';
                              
                              toast(petName, { 
                                description: worldIdx < 4 ? 'Complete more worlds to level me up!' : 'I\'ve reached my final form! I\'m always with you.',
                                icon: '✨' 
                              }); 
                            }}
                          >
                            <div className="text-2xl text-orange-500">
                               {nodes[currentNodeIndex]?.levelIndex === 0 ? <Zap /> : 
                                nodes[currentNodeIndex]?.levelIndex === 1 ? <Sparkles /> :
                                nodes[currentNodeIndex]?.levelIndex === 2 ? <Cloud /> :
                                nodes[currentNodeIndex]?.levelIndex === 3 ? <GraduationCap /> : <Trophy />}
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border border-white flex items-center justify-center">
                               <Star size={8} className="text-white fill-white" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div className={`absolute -bottom-12 px-4 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-black tracking-wide whitespace-nowrap shadow-md border-2 ${
                      isLocked ? 'bg-gray-100 border-gray-200 text-gray-400' : 'bg-white border-gray-100 text-gray-900'
                    }`}>
                       {node.title}
                    </div>
                  </motion.button>
                ) : (
                  // Chest Node
                  <motion.button
                    whileHover={!isLocked ? {} : {}}
                    onClick={() => !isLocked && handleChestClick(node.id)}
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all ${
                      isLocked 
                        ? 'bg-gray-100 text-gray-300 opacity-50 cursor-not-allowed'
                        : claimedRadios.includes(node.id) 
                        ? 'bg-gray-200 text-gray-400' 
                        : 'bg-yellow-100 text-yellow-600 border-b-6 border-yellow-300 shadow-lg'
                    }`}
                  >
                    {claimedRadios.includes(node.id) ? (
                      <Gift className="w-8 h-8 opacity-40" />
                    ) : isLocked ? (
                      <Lock className="w-6 h-6" />
                    ) : (
                      <div>
                        <Gift className="w-10 h-10" />
                      </div>
                    )}
                  </motion.button>
                )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Epic Finale Marker */}
        <div className="flex flex-col items-center pt-20 relative z-10">
           <div 
             className="w-32 h-32 bg-gray-900 rounded-[3rem] border-b-8 border-black flex items-center justify-center text-white relative shadow-2xl"
           >
              <Trophy size={64} className="text-yellow-400" />
              <div className="absolute -top-4 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase shadow-lg">Grand Finals</div>
           </div>
           <h3 className="mt-6 text-2xl font-black text-gray-900">أنت بطل الغد!</h3>
           <p className="text-gray-500 font-bold">المزيد من الدروس قادمة قريباً</p>
        </div>
      </div>
    </div>
  );
}
