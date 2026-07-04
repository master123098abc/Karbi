import { Heart, Flame, Hexagon, Star, Crown, ChevronLeft } from 'lucide-react';
import { KIDS_PATH } from '../data/lessons';

export default function LearningPath({ onStartLesson, onExit }: { onStartLesson: () => void, onExit: () => void }) {
  return (
    <div className="flex flex-col h-full bg-[#f3f4f6]">
      {/* Top Bar */}
      <div className="bg-white border-b-2 border-gray-200 p-4 flex justify-between items-center shrink-0 z-10 sticky top-0">
         <button onClick={onExit} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors" title="Back to Blueprint">
            <ChevronLeft className="w-6 h-6" />
         </button>
         <div className="flex gap-4">
           <div className="flex items-center gap-1.5 text-orange-500 font-bold">
              <Flame className="w-5 h-5 fill-orange-500" /> 2
           </div>
           <div className="flex items-center gap-1.5 text-blue-500 font-bold">
              <Hexagon className="w-5 h-5 fill-blue-500" /> 150
           </div>
           <div className="flex items-center gap-1.5 text-red-500 font-bold">
              <Heart className="w-5 h-5 fill-red-500" /> 5
           </div>
         </div>
      </div>
      
      {/* Path Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center gap-12 pb-32">
        
        <div className="w-full text-center mb-[-20px]">
          <h2 className="text-2xl font-extrabold text-gray-800">Kids Mode 👦🏽</h2>
          <p className="text-gray-500 font-medium">Zero to Pro Kid Journey</p>
        </div>

        {KIDS_PATH.map((unit, uIdx) => (
          <div key={unit.id} className="w-full flex flex-col items-center gap-8">
            <div className={`${unit.color} text-white font-bold py-4 px-6 rounded-2xl w-full text-center ${unit.shadow} flex flex-col`}>
               <span className="text-xl">{unit.title}</span>
               <span className="text-sm font-medium opacity-90">{unit.desc}</span>
            </div>
            
            {/* Nodes */}
            <div className="flex flex-col gap-6 items-center w-full py-4 relative">
              {unit.nodes.map((node, nIdx) => {
                const isLocked = node.status === 'locked';
                const isActive = node.status === 'active';
                
                // Sine wave pattern for a curvy path
                const pathOffsets = [0, -60, -90, -60, 0, 60, 90, 60, 0, 0];
                const marginLeft = pathOffsets[nIdx % 10];
                
                return (
                  <div key={node.id} className="relative" style={{ marginLeft: `${marginLeft}px` }}>
                    <button 
                      onClick={() => !isLocked && onStartLesson()} 
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center text-white transition-all ${
                        isLocked 
                          ? 'bg-gray-300 shadow-[0_8px_0_rgb(156,163,175)] opacity-50 cursor-not-allowed' 
                          : `${unit.color.replace('bg-', 'bg-')} ${unit.shadow.replace('4px', '8px')} active:translate-y-2 active:shadow-none`
                      }`}
                    >
                      {node.type === 'star' ? <Star className="w-10 h-10 fill-white" /> : <Crown className="w-10 h-10 fill-white" />}
                    </button>
                    {/* Floating Start tooltip for active node */}
                    {isActive && (
                      <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl font-bold ${unit.color.replace('bg-', 'text-')} shadow-md border-2 border-gray-100 whitespace-nowrap animate-bounce z-10`}>
                        Start!
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-gray-100 rotate-45"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav */}
      <div className="bg-white border-t-2 border-gray-200 p-4 flex justify-around items-center shrink-0">
         <div className="p-3 rounded-2xl border-2 border-blue-400 bg-blue-50 text-blue-500">
           <Star className="w-8 h-8 fill-blue-500" />
         </div>
         <div className="p-3 rounded-2xl text-gray-400 hover:bg-gray-50 cursor-pointer">
           <Heart className="w-8 h-8" />
         </div>
         <div className="p-3 rounded-2xl text-gray-400 hover:bg-gray-50 cursor-pointer">
           <Crown className="w-8 h-8" />
         </div>
      </div>
    </div>
  )
}
