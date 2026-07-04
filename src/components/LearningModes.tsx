import { LEARNING_MODES } from '../data/content';
import { PlayCircle, Target, Rocket, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function LearningModes() {
  const [activeTab, setActiveTab] = useState(LEARNING_MODES[0].id);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The "Zero to Pro" Curriculum</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three tailored journeys designed for different age groups and fluency goals.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {LEARNING_MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveTab(mode.id)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                activeTab === mode.id
                  ? 'bg-orange-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {mode.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          {LEARNING_MODES.map((mode) => (
            <div key={mode.id} className={activeTab === mode.id ? 'block' : 'hidden'}>
              
              <div className="text-center mb-12">
                <h3 className="text-3xl font-extrabold text-gray-900">{mode.subtitle}</h3>
                <p className="inline-block mt-4 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-medium font-mono text-sm">
                  UX Vibe: {mode.vibe}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <PlayCircle className="text-blue-500 w-8 h-8" />
                    <h4 className="text-2xl font-bold text-blue-900">The "Zero" Stage</h4>
                  </div>
                  <p className="text-blue-800 text-lg leading-relaxed">{mode.zeroStage}</p>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-green-500 w-8 h-8" />
                    <h4 className="text-2xl font-bold text-green-900">The "Pro" Stage</h4>
                  </div>
                  <p className="text-green-800 text-lg leading-relaxed">{mode.proStage}</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Rocket className="text-orange-500" /> Key Interactive Exercises
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {mode.exercises.map((ex, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                        <h5 className="font-bold text-gray-900 text-lg">{ex.name}</h5>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{ex.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
