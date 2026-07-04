import { BRAND_INFO } from '../data/content';
import { Sparkles, Trophy, Award, Crown, MessageSquare, BookOpen, Flame, Star } from 'lucide-react';

export default function BrandIdentity() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Mascot & Brand */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Sparkles className="text-orange-500" /> 
              Brand & Mascot
            </h2>
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">{BRAND_INFO.mascot.name}</h3>
                <p className="text-orange-800 leading-relaxed text-lg">
                  {BRAND_INFO.mascot.description}
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 text-orange-200/50">
                 <BirdIcon className="w-64 h-64" />
              </div>
            </div>
          </div>

          {/* Gamification */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Trophy className="text-yellow-500" /> 
              Gamification & Rewards
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-red-100 p-2 rounded-lg text-red-600 h-fit">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{BRAND_INFO.gamification.mechanics[0].title}</h4>
                  <p className="text-gray-600 mt-1">{BRAND_INFO.gamification.mechanics[0].description}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 h-fit">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{BRAND_INFO.gamification.mechanics[1].title}</h4>
                  <p className="text-gray-600 mt-1">{BRAND_INFO.gamification.mechanics[1].description}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600 h-fit">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{BRAND_INFO.gamification.mechanics[2].title}</h4>
                  <p className="text-gray-600 mt-1">{BRAND_INFO.gamification.mechanics[2].description}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <Crown className="w-12 h-12 text-yellow-400 mb-4 opacity-20 absolute top-4 right-4" />
              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5" /> Pro Level Unlocks
              </h3>
              <ul className="space-y-4">
                {BRAND_INFO.gamification.proRewards.map((reward, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {idx === 0 ? <MessageSquare className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> : <BookOpen className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />}
                    <div>
                      <strong className="block text-slate-100">{reward.title}</strong>
                      <span className="text-slate-400 text-sm">{reward.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Bird SVG for the background decoration
function BirdIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>
    </svg>
  );
}
