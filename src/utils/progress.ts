import { useState, useEffect } from 'react';

export function useProgress() {
  const [unlockedNodes, setUnlockedNodes] = useState<string[]>(() => {
    const saved = localStorage.getItem('karbi_kids_unlocked');
    return saved ? JSON.parse(saved) : ['u0_l0']; // Unlock first node by default
  });
  
  const [xp, setXp] = useState<number>(() => {
    const saved = localStorage.getItem('karbi_kids_xp');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem('karbi_kids_streak');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  useEffect(() => {
    localStorage.setItem('karbi_kids_unlocked', JSON.stringify(unlockedNodes));
  }, [unlockedNodes]);

  useEffect(() => {
    localStorage.setItem('karbi_kids_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('karbi_kids_streak', streak.toString());
  }, [streak]);

  const completeLesson = (nodeId: string, earnedXp: number) => {
    setXp(prev => prev + earnedXp);
    setStreak(prev => prev + 1); // Simple streak logic
    
    // Unlock next node
    // nodeId looks like u0_l0
    const parts = nodeId.split('_');
    if (parts.length === 2) {
      const u = parseInt(parts[0].replace('u', ''), 10);
      const l = parseInt(parts[1].replace('l', ''), 10);
      
      let nextU = u;
      let nextL = l + 1;
      
      if (nextL > 9) { // 10 nodes per unit (0-9)
        nextU = u + 1;
        nextL = 0;
      }
      
      const nextNodeId = `u${nextU}_l${nextL}`;
      
      setUnlockedNodes(prev => {
        if (!prev.includes(nextNodeId)) {
          return [...prev, nextNodeId];
        }
        return prev;
      });
    }
  };

  return { unlockedNodes, xp, streak, completeLesson };
}
