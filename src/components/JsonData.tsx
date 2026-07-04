import { JSON_SCHEMA } from '../data/content';
import { Code2 } from 'lucide-react';

export default function JsonData() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Code2 className="text-orange-500 w-8 h-8" />
              Data Structure
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sample backend JSON object representing a "Boss Level / Pro-Level" lesson structure in the database. 
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              This structure clearly defines the evaluation criteria for the AI tutor to grade the user's spoken response, and the rewards granted upon passing.
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700">
              <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs font-mono text-slate-400">lesson_schema.json</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-emerald-400">
                  <code>{JSON_SCHEMA}</code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
