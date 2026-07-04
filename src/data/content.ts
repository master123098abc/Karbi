export const BRAND_INFO = {
  appName: "Kardom",
  tagline: "Master the Karbi Language from Zero to Pro",
  mascot: {
    name: "Tokbi the Great Hornbill",
    description: "A vibrant, expressive Great Indian Hornbill wearing a traditional Karbi Poho (turban/scarf). Tokbi guides users, celebrates wins, and provides cultural context."
  },
  gamification: {
    mechanics: [
      { title: "Streaks & Tih-Tih (Daily)", description: "Maintain daily streaks (Tih-Tih means 'everyday') to earn multiplier bonuses." },
      { title: "XP & Leaderboards", description: "Earn 'Hor' (rice beer pots - visually kid-friendly as nectar pots for Kids mode) as XP to climb weekly Clan leaderboards." },
      { title: "Milestone Badges", description: "Collect beautifully illustrated digital woven patterns (Jambili Athon motifs) for mastering skills." }
    ],
    proRewards: [
      { title: "AI Tutor Tokbi", description: "Unlock 24/7 access to a conversational AI chatbot that practices free-flowing Karbi." },
      { title: "Native Dialects", description: "Unlock variations of Karbi spoken in different regions of Karbi Anglong." },
      { title: "Cultural Masterclass", description: "Exclusive video/audio lessons on Karbi festivals (Chomangkan, Domahi)." }
    ]
  }
};

export const LEARNING_MODES = [
  {
    id: "kids",
    title: "Kids Mode (5-Year-Olds)",
    subtitle: "Zero to Pro Kid",
    vibe: "Vibrant, Gamified, Cartoon Mascots, Massive Buttons, Voice-based Rewards.",
    zeroStage: "No reading required. Focus on highly visual and audio-driven basics (colors, animals, numbers, family). Drag-and-drop mechanics.",
    proStage: "The 5-year-old can listen to full Karbi children's stories without visual hints, answer verbal questions, and speak basic fluent sentences.",
    exercises: [
      { name: "Pop the Balloon", desc: "Hear a Karbi word (e.g., 'Phu' for dog) and tap the balloon with the dog picture. Big visual explosion and cheers." },
      { name: "Feed Tokbi", desc: "Tokbi asks for 'Sok' (rice). The child drags the correct food item to Tokbi's beak." },
      { name: "Echo Chamber", desc: "Tokbi says a short phrase ('Ne men...'). The child repeats into the microphone. AI grades pronunciation with a 'Stars filling up' animation." }
    ]
  },
  {
    id: "beginner",
    title: "Beginner Mode (Teens/Adults)",
    subtitle: "Zero to Confident Speaker",
    vibe: "Clean, Structured Learning Trees, Milestone Badges, Unlocking 'Worlds'.",
    zeroStage: "Absolute scratch. Phonetics, essential daily greetings ('Kardom'), and basic Subject-Object-Verb (SOV) sentence structures.",
    proStage: "Can hold a 5-minute conversation with a native speaker about daily life, travel, and needs. Can translate complex sentences perfectly.",
    exercises: [
      { name: "Sentence Builder", desc: "Given a phrase in English, select from a bank of Karbi word blocks and arrange them in the correct SOV order." },
      { name: "Roleplay: The Market", desc: "Interactive chat interface. The AI plays a vendor in Diphu market. The user must select the correct responses to buy vegetables and negotiate price." },
      { name: "Listen & Translate", desc: "Listen to a native speaker audio clip at normal speed. Type the translation in English or select the matching Karbi text." }
    ]
  },
  {
    id: "intermediate",
    title: "Intermediate Mode",
    subtitle: "Basic to Native-Level Pro",
    vibe: "Text-heavy, Immersive Challenges, AI Conversation Bots, Pronunciation Grading.",
    zeroStage: "User already knows basic Karbi. Focus is on verb conjugations, expanding vocabulary, and reading short dialogues.",
    proStage: "Complete Native Fluency. Mastery of Karbi idioms, proverbs, complex grammar, and rapid native-speed listening comprehension.",
    exercises: [
      { name: "Proverb Decoder", desc: "Presented with a Karbi idiom. The user must type what it literally means, and then select its actual contextual meaning from multiple choices." },
      { name: "Debate with Tokbi", desc: "Open-ended microphone exercise. Tokbi asks an opinionated question. User must record a 30-second unscripted response. AI evaluates grammar and fluency." },
      { name: "Rapid-fire Cloze Test", desc: "A fast-paced reading exercise where a Karbi folk tale is missing key verbs. User must type the correctly conjugated verb before the timer runs out." }
    ]
  }
];

export const TECH_STACK = [
  { category: "Frontend (Mobile)", tech: "React Native (Expo)", desc: "Cross-platform iOS & Android development. Unified codebase, excellent animation libraries (Reanimated) for gamified feel." },
  { category: "Frontend (Web/Admin)", tech: "React + Vite", desc: "For the content management system and web-based learning." },
  { category: "Backend", tech: "Node.js with NestJS", desc: "Scalable, enterprise-grade architecture. Great for handling complex user states, gamification logic, and real-time multiplayer." },
  { category: "Database", tech: "PostgreSQL (Cloud SQL)", desc: "Relational data for structured curricula, user profiles, leaderboards, and complex progress tracking." },
  { category: "AI Services", tech: "Google Gemini API", desc: "For dynamic conversation bots, speech analysis (Speech-to-Text), and generating varied exercise content." }
];

export const JSON_SCHEMA = `{
  "lessonId": "boss_lvl_market_negotiation",
  "mode": "intermediate",
  "title": "Diphu Market Mastery",
  "type": "ai_roleplay",
  "passingScore": 90,
  "rewards": {
    "xp": 500,
    "badge": "master_negotiator",
    "unlocks": ["advanced_idioms_module"]
  },
  "content": {
    "scenario": "You are at the market buying vegetables. Negotiate the price down by at least 20%.",
    "npcName": "Sarthe",
    "initialPrompt": "Kardom! Pini he-i an-ing a-dor do-an?",
    "expectedIntent": "greeting_and_inquire_price",
    "evaluationCriteria": {
      "grammar": {
        "weight": 0.4,
        "rules": ["correct_sov_order", "proper_honorifics"]
      },
      "fluency": {
        "weight": 0.3,
        "targetWPM": 120
      },
      "taskCompletion": {
        "weight": 0.3,
        "requiredActions": ["ask_discount", "agree_on_price"]
      }
    }
  }
}`;
