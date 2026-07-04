import { useState } from 'react';
import { X, Check, Volume2, Star, Bird } from 'lucide-react';
import { KIDS_LESSON_1 } from '../data/lessons';

export default function LessonScreen({ onComplete, onExit }: { onComplete: () => void, onExit: () => void }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showCompletion, setShowCompletion] = useState(false);
  
  const question = KIDS_LESSON_1[currentQuestionIndex];
  const progress = (currentQuestionIndex / KIDS_LESSON_1.length) * 100;
  
  const handleCheck = () => {
    if (selectedOption === question.correctAnswer) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };
  
  const handleContinue = () => {
    setStatus('idle');
    setSelectedOption(null);
    if (currentQuestionIndex < KIDS_LESSON_1.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowCompletion(true);
    }
  };
  
  const playAudio = () => {
    // Simulated audio
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3');
    audio.play().catch(() => {});
  };
  
  if (showCompletion) {
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
           <div className="w-40 h-40 bg-orange-100 rounded-full flex items-center justify-center border-8 border-orange-200 animate-bounce">
             <Star className="w-20 h-20 fill-orange-500 text-orange-500" />
           </div>
           <h2 className="text-4xl font-extrabold text-orange-500">Super Kid!</h2>
           <p className="text-xl text-gray-600 font-bold">You learned 3 new Karbi words!</p>
           
           <div className="flex gap-4 w-full pt-4">
             <div className="flex-1 bg-yellow-50 border-2 border-yellow-200 p-4 rounded-2xl flex flex-col items-center">
                <span className="text-yellow-600 font-bold uppercase text-sm">XP Earned</span>
                <span className="text-yellow-500 font-extrabold text-3xl">50</span>
             </div>
             <div className="flex-1 bg-orange-50 border-2 border-orange-200 p-4 rounded-2xl flex flex-col items-center">
                <span className="text-orange-600 font-bold uppercase text-sm">Streak</span>
                <span className="text-orange-500 font-extrabold text-3xl">4</span>
             </div>
           </div>
        </div>
        <div className="p-6 border-t-2 border-gray-100">
          <button 
            onClick={onComplete}
            className="w-full py-5 rounded-2xl font-bold text-white transition-all bg-green-500 shadow-[0_4px_0_rgb(34,197,94)] active:translate-y-1 active:shadow-none text-2xl uppercase tracking-wider"
          >
            Yay!
          </button>
        </div>
      </div>
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
      </div>
      
      {/* Question Area */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center leading-tight">{question.question}</h2>
        
        {/* Mascot Hint */}
        <div className="flex gap-4 items-end mb-8 justify-center">
           <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shrink-0 border-4 border-orange-200">
             <Bird className="w-8 h-8 text-orange-600" />
           </div>
           <div className="bg-orange-50 p-4 rounded-2xl rounded-bl-none text-orange-900 font-bold border-2 border-orange-100 text-lg shadow-sm">
             {question.mascotMsg}
           </div>
        </div>

        {question.type === 'simulated_audio' && (
          <div className="flex justify-center mb-8">
            <button 
              onClick={playAudio}
              className="bg-blue-500 w-24 h-24 rounded-full flex items-center justify-center shadow-[0_8px_0_rgb(37,99,235)] active:translate-y-2 active:shadow-none transition-all"
            >
               <Volume2 className="w-12 h-12 text-white" />
            </button>
          </div>
        )}

        {question.type === 'drag_and_drop' && (
           <div className="flex flex-col items-center mb-8">
              <div className={`w-32 h-32 rounded-full border-4 border-dashed flex items-center justify-center text-4xl mb-8 transition-colors ${selectedOption ? 'bg-orange-100 border-orange-300' : 'border-gray-300 bg-gray-50'}`}>
                 {selectedOption ? question.options.find(o => o.value === selectedOption)?.emoji : <Bird className="w-12 h-12 text-gray-400 opacity-50" />}
              </div>
           </div>
        )}
        
        {/* Visual Options Grid */}
        <div className="grid grid-cols-2 gap-4 mt-auto">
          {question.options.map(opt => (
            <button 
              key={opt.value}
              onClick={() => setSelectedOption(opt.value)}
              className={`p-6 rounded-3xl border-4 text-center font-bold text-2xl transition-all flex flex-col items-center gap-2 ${
                selectedOption === opt.value 
                  ? 'border-blue-400 bg-blue-50 text-blue-500 scale-105 shadow-md' 
                  : 'border-gray-200 hover:bg-gray-50 text-gray-700 shadow-[0_4px_0_rgb(229,231,235)] active:translate-y-1 active:shadow-none'
              } ${status !== 'idle' ? 'pointer-events-none' : ''}`}
            >
              <span className="text-6xl mb-2">{opt.emoji}</span>
              {/* Optional: Add English label for parents helping, but keep it small */}
              <span className="text-sm opacity-50">{opt.value}</span>
            </button>
          ))}
        </div>
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
                 Right answer: {question.options.find(o => o.value === question.correctAnswer)?.emoji} {question.correctAnswer}
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
