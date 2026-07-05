/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import BrandIdentity from './components/BrandIdentity';
import LearningModes from './components/LearningModes';
import TechStack from './components/TechStack';
import JsonData from './components/JsonData';
import PrototypeApp from './components/PrototypeApp';

export default function App() {
  const [mode, setMode] = useState<'blueprint' | 'app'>('app');

  if (mode === 'app') {
    return (
      <div className="min-h-screen sm:bg-slate-900 sm:flex sm:items-center sm:justify-center sm:p-4 md:p-8 font-sans">
        <div className="relative w-full h-[100dvh] sm:max-w-[420px] sm:h-[85vh] sm:min-h-[600px] bg-white sm:rounded-[3rem] overflow-hidden sm:shadow-2xl sm:ring-8 ring-slate-800 flex flex-col">
           <PrototypeApp onExit={() => setMode('blueprint')} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-200 selection:text-orange-900">
      <Hero onTryPrototype={() => setMode('app')} />
      <div id="blueprint">
        <BrandIdentity />
        <LearningModes />
        <TechStack />
        <JsonData />
      </div>
      
      <footer className="bg-slate-900 text-slate-500 py-8 text-center border-t border-slate-800">
        <p>© {new Date().getFullYear()} Kardom Language App Architecture. Built with React + Tailwind.</p>
      </footer>
    </div>
  );
}
