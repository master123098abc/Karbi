import { motion } from 'motion/react';
import { Bird, Star, Play } from 'lucide-react';

export default function Hero({ onTryPrototype }: { onTryPrototype?: () => void }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-orange-100 p-4 rounded-full border-4 border-orange-200">
              <Bird className="w-16 h-16 text-orange-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 font-sans">
            Kardom
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
            Master the Karbi Language from Zero to Pro. <br/>
            An interactive, gamified journey for all ages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={onTryPrototype} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-[0_4px_0_rgb(194,65,12)] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 text-lg">
              <Play className="w-6 h-6 fill-white" />
              Try Interactive App
            </button>
            <a href="#blueprint" className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center text-lg">
              View Architecture
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-12 -right-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
