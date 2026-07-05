import { useState } from 'react';
import LearningPath from './LearningPath';
import LessonScreen from './LessonScreen';
import { useProgress } from '../utils/progress';

export default function PrototypeApp({ onExit }: { onExit: () => void }) {
  const [currentView, setCurrentView] = useState<'path' | 'lesson'>('path');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const { unlockedNodes, xp, streak, completeLesson } = useProgress();

  const handleStartLesson = (nodeId: string) => {
    setActiveNode(nodeId);
    setCurrentView('lesson');
  };

  const handleCompleteLesson = () => {
    if (activeNode) {
      completeLesson(activeNode, 150); // Give 150 XP per 15-min lesson
    }
    setCurrentView('path');
  };
  
  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden relative">
      {currentView === 'path' && (
        <LearningPath 
          onStartLesson={handleStartLesson} 
          onExit={onExit} 
          unlockedNodes={unlockedNodes}
          xp={xp}
          streak={streak}
        />
      )}
      {currentView === 'lesson' && (
        <LessonScreen 
          onComplete={handleCompleteLesson} 
          onExit={() => setCurrentView('path')} 
          xp={xp}
          streak={streak}
        />
      )}
    </div>
  );
}
