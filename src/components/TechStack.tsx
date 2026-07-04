import { TECH_STACK } from '../data/content';
import { Layers, Smartphone, Globe, Server, Database, BrainCircuit } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  "Frontend (Mobile)": <Smartphone className="w-6 h-6 text-blue-500" />,
  "Frontend (Web/Admin)": <Globe className="w-6 h-6 text-emerald-500" />,
  "Backend": <Server className="w-6 h-6 text-slate-500" />,
  "Database": <Database className="w-6 h-6 text-orange-500" />,
  "AI Services": <BrainCircuit className="w-6 h-6 text-purple-500" />,
};

export default function TechStack() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-4">
            <Layers className="w-10 h-10 text-orange-400" />
            Tech Stack Blueprint
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A modern, scalable architecture designed for cross-platform delivery and real-time AI interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((item, idx) => (
            <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-700/50 rounded-xl">
                  {icons[item.category] || <Layers className="w-6 h-6 text-slate-400" />}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{item.category}</div>
                  <div className="text-xl font-semibold text-slate-100">{item.tech}</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
