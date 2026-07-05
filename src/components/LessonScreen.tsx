import { useState, useEffect } from 'react';
import { X, Check, Volume2, Star, Bird, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { KIDS_LESSON_1 } from '../data/lessons';
import { audio } from '../utils/audio';

const TARGET_QUESTIONS = 15; // Simulates a 10-15 minute class session

export default function LessonScreen({ 
  onComplete, 
  onExit,
  xp,
  streak
}: { 
  onComplete: () => void, 
  onExit: () => void,
  xp: number,
  streak: number
}) {
  const [correctCount, setCorrectCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(KIDS_LESSON_1[0]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showCompletion, setShowCompletion] = useState(false);
  
  const progress = (correctCount / TARGET_QUESTIONS) * 100;
  
  const handleCheck = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setStatus('correct');
      setCorrectCount(prev => prev + 1);
      audio.playCorrect();
      audio.speak("Awesome!");
    } else {
      setStatus('incorrect');
      audio.playIncorrect();
      audio.speak("Oops, try again.");
    }
  };
  
  const handleContinue = () => {
    setStatus('idle');
    setSelectedOption(null);
    if (status === 'correct' && correctCount >= TARGET_QUESTIONS - 1) {
      setShowCompletion(true);
      audio.playComplete();
      audio.speak("Super Kid! You finished your fifteen minute class!");
    } else {
      const nextQ = KIDS_LESSON_1[Math.floor(Math.random() * KIDS_LESSON_1.length)];
      setCurrentQuestion(nextQ);
    }
  };
  
  const playAudio = () => {
    audio.speak(currentQuestion.audioWord || currentQuestion.correctAnswer || "Listen");
  };

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
    audio.playPop();
  };
  
  const playMascotHint = () => {
    audio.speak(currentQuestion.mascotMsg);
  };
  
  if (showCompletion) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col h-full bg-white relative overflow-hidden"
      >
        {/* Confetti Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
              animate={{ 
                y: window.innerHeight, 
                opacity: [0, 1, 1, 0],
                rotate: Math.random() * 360 
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity, 
                delay: Math.random() * 2 
              }}
              className={`absolute w-3 h-3 rounded-sm ${['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'][i % 5]}`}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6 z-10">
           <motion.div 
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", bounce: 0.5, duration: 1 }}
             className="w-40 h-40 bg-orange-100 rounded-full flex items-center justify-center border-8 border-orange-200 shadow-xl"
           >
             <Star className="w-20 h-20 fill-orange-500 text-orange-500 drop-shadow-md" />
           </motion.div>
           
           <motion.h2 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="text-4xl font-extrabold text-orange-500"
           >
             Class Complete!
           </motion.h2>
           <motion.p 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-xl text-gray-600 font-bold"
           >
             You finished your 15-minute daily class!
           </motion.p>
           
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex gap-4 w-full pt-4"
           >
             <div className="flex-1 bg-yellow-50 border-2 border-yellow-200 p-4 rounded-2xl flex flex-col items-center shadow-sm">
                <span className="text-yellow-600 font-bold uppercase text-sm">Total XP</span>
                <span className="text-yellow-500 font-extrabold text-4xl">{xp + 150}</span>
             </div>
             <div className="flex-1 bg-orange-50 border-2 border-orange-200 p-4 rounded-2xl flex flex-col items-center shadow-sm">
                <span className="text-orange-600 font-bold uppercase text-sm">Streak</span>
                <span className="text-orange-500 font-extrabold text-4xl">{streak + 1}</span>
             </div>
           </motion.div>
        </div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="p-6 border-t-2 border-gray-100 z-10 bg-white"
        >
          <button 
            onClick={onComplete}
            className="w-full py-5 rounded-2xl font-bold text-white transition-all bg-green-500 shadow-[0_4px_0_rgb(34,197,94)] active:translate-y-1 active:shadow-none hover:bg-green-400 text-2xl uppercase tracking-wider"
          >
            Yay!
          </button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4 gap-4">
        <button onClick={onExit}><X className="text-gray-400 hover:text-gray-600 w-8 h-8" /></button>
        <div className="flex-1 bg-gray-200 h-6 rounded-full overflow-hidden">
           <div className="bg-green-500 h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <div className="font-bold text-gray-400 flex items-center gap-1 shrink-0">
          <Clock className="w-5 h-5" /> 15m
        </div>
      </div>
      
      {/* Question Area */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestion.question}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex flex-col flex-1"
          >
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center leading-tight">{currentQuestion.question}</h2>
            
            {/* Mascot Hint */}
            <div className="flex gap-4 items-end mb-8 justify-center cursor-pointer group" onClick={playMascotHint} title="Tap to hear Tokbi!">
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shrink-0 border-4 border-orange-200 shadow-sm group-active:scale-95 transition-transform relative">
                 <Bird className="w-8 h-8 text-orange-600" />
                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75" />
                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full" />
               </div>
               <div className="bg-orange-50 p-4 rounded-2xl rounded-bl-none text-orange-900 font-bold border-2 border-orange-100 text-lg shadow-sm group-active:scale-95 transition-transform max-w-[200px] text-center">
                 {currentQuestion.mascotMsg}
               </div>
            </div>

            {currentQuestion.type === 'simulated_audio' && (
              <div className="flex justify-center mb-8">
                <button 
                  onClick={playAudio}
                  className="bg-blue-500 w-24 h-24 rounded-full flex items-center justify-center shadow-[0_8px_0_rgb(37,99,235)] active:translate-y-2 active:shadow-none transition-all hover:bg-blue-400"
                >
                   <Volume2 className="w-12 h-12 text-white" />
                </button>
              </div>
            )}

            {currentQuestion.type === 'drag_and_drop' && (
               <div className="flex flex-col items-center mb-8">
                  <motion.div 
                    animate={selectedOption ? { scale: [1, 1.1, 1] } : {}}
                    className={`w-32 h-32 rounded-full border-4 border-dashed flex items-center justify-center text-5xl mb-8 transition-colors ${selectedOption ? 'bg-orange-100 border-orange-300 shadow-inner' : 'border-gray-300 bg-gray-50'}`}
                  >
                     {selectedOption ? currentQuestion.options.find(o => o.value === selectedOption)?.emoji : <Bird className="w-12 h-12 text-gray-400 opacity-50" />}
                  </motion.div>
               </div>
            )}
            
            {/* Visual Options Grid */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {currentQuestion.options.map((opt, i) => (
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  key={opt.value}
                  onClick={() => handleSelectOption(opt.value)}
                  className={`p-6 rounded-3xl border-4 text-center font-bold text-2xl transition-all flex flex-col items-center gap-2 relative overflow-hidden ${
                    selectedOption === opt.value 
                      ? 'border-blue-400 bg-blue-50 text-blue-500 scale-105 shadow-md z-10' 
                      : 'border-gray-200 hover:bg-gray-50 text-gray-700 shadow-[0_4px_0_rgb(229,231,235)] active:translate-y-1 active:shadow-none'
                  } ${status !== 'idle' ? 'pointer-events-none' : ''}`}
                >
                  {selectedOption === opt.value && (
                    <motion.div 
                      layoutId="outline"
                      className="absolute inset-0 border-4 border-blue-400 rounded-3xl pointer-events-none"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="text-6xl mb-2 drop-shadow-sm">{opt.emoji}</span>
                  <span className="text-sm opacity-50">{opt.value}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Bottom Bar */}
      <div className={`p-6 border-t-4 shrink-0 transition-colors ${
        status === 'correct' ? 'bg-green-100 border-green-200' : 
        status === 'incorrect' ? 'bg-red-100 border-red-200' : 
        'bg-white border-gray-200'
      }`}>
        {status === 'idle' ? (
          <button 
            onClick={handleCheck}
            disabled={!selectedOption}
            className="w-full py-5 rounded-2xl font-bold text-white transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none bg-green-500 shadow-[0_4px_0_rgb(34,197,94)] hover:bg-green-400 active:translate-y-1 active:shadow-none text-2xl uppercase tracking-wider"
          >
            Check
          </button>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status === 'correct' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {status === 'correct' ? <Check className="text-white w-6 h-6" /> : <X className="text-white w-6 h-6" />}
                </div>
                <span className={`font-bold text-2xl ${status === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                  {status === 'correct' ? 'Awesome!' : 'Oops!'}
                </span>
              </div>
            </div>
            
            {status === 'incorrect' && (
               <div className="text-red-700 font-bold text-xl mb-2 flex items-center gap-2">
                 Right answer: {currentQuestion.options.find(o => o.value === currentQuestion.correctAnswer)?.emoji} {currentQuestion.correctAnswer}
               </div>
            )}
            
            <button 
              onClick={handleContinue}
              className={`w-full py-5 rounded-2xl font-bold text-white transition-all text-2xl uppercase tracking-wider active:translate-y-1 active:shadow-none ${
                status === 'correct' 
                  ? 'bg-green-500 shadow-[0_4px_0_rgb(34,197,94)] hover:bg-green-400' 
                  : 'bg-red-500 shadow-[0_4px_0_rgb(239,68,68)] hover:bg-red-400'
              }`}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
