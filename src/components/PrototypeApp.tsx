import { useState } from 'react';
import LearningPath from './LearningPath';
import LessonScreen from './LessonScreen';

export default function PrototypeApp({ onExit }: { onExit: () => void }) {
  const [currentView, setCurrentView] = useState<'path' | 'lesson'>('path');
  
  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden relative">
      {currentView === 'path' && <LearningPath onStartLesson={() => setCurrentView('lesson')} onExit={onExit} />}
      {currentView === 'lesson' && <LessonScreen onComplete={() => setCurrentView('path')} onExit={() => setCurrentView('path')} />}
    </div>
  );
}
