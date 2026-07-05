export const UNIT_THEMES = [
  { title: "Unit 1: The Basics", desc: "Colors, Animals, and First Words!" },
  { title: "Unit 2: Family & Friends", desc: "Who is who and how to greet them." },
  { title: "Unit 3: Food & Drink", desc: "What we eat and drink everyday." },
  { title: "Unit 4: Home & Play", desc: "Things around the house and toys." },
  { title: "Unit 5: Nature & Weather", desc: "Sun, rain, trees, and outside!" },
  { title: "Unit 6: Body & Feelings", desc: "Head, shoulders, happy, and sad." },
  { title: "Unit 7: Action Words", desc: "Running, jumping, playing, sleeping." },
  { title: "Unit 8: Numbers & Counting", desc: "Let's count from 1 to 10!" },
  { title: "Unit 9: Clothing & Colors", desc: "What are you wearing today?" },
  { title: "Unit 10: School & Learning", desc: "Books, pencils, and singing." },
  { title: "Unit 11: Transport & Travel", desc: "Cars, buses, and going places." },
  { title: "Unit 12: Daily Routine", desc: "Waking up, brushing teeth, bedtime." },
  { title: "Unit 13: Shapes & Sizes", desc: "Big, small, circle, square." },
  { title: "Unit 14: Market & Shopping", desc: "Buying fruits and vegetables." },
  { title: "Unit 15: Festivals & Culture", desc: "Karbi traditions and celebrations." },
  { title: "Unit 16: Story Time", desc: "Simple sentences and fairy tales." },
  { title: "Unit 17: Speaking Practice", desc: "Putting it all together out loud." },
  { title: "Unit 18: Zero to Pro!", desc: "The final challenges to reach Pro fluency!" },
];

const COLORS = [
  { color: "bg-orange-500", shadow: "shadow-[0_4px_0_rgb(194,65,12)]" },
  { color: "bg-blue-500", shadow: "shadow-[0_4px_0_rgb(37,99,235)]" },
  { color: "bg-purple-500", shadow: "shadow-[0_4px_0_rgb(147,51,234)]" },
  { color: "bg-pink-500", shadow: "shadow-[0_4px_0_rgb(219,39,119)]" },
  { color: "bg-green-500", shadow: "shadow-[0_4px_0_rgb(34,197,94)]" },
];

// Generate exactly 180 days of learning path (18 units * 10 nodes)
export const KIDS_PATH = UNIT_THEMES.map((theme, i) => {
  const style = COLORS[i % COLORS.length];
  
  const nodes = Array.from({ length: 10 }).map((_, j) => {
    const isFirstNode = i === 0 && j === 0;
    return {
      id: `u${i}_l${j}`,
      type: j === 9 ? 'crown' : 'star',
      status: isFirstNode ? 'active' : 'locked'
    };
  });

  return {
    id: `unit${i + 1}`,
    title: theme.title,
    desc: theme.desc,
    color: style.color,
    shadow: style.shadow,
    nodes
  };
});

export const KIDS_LESSON_1 = [
  {
    type: 'visual_match',
    question: "Which one is 'Phu' (Dog)?",
    options: [
      { emoji: "🐶", value: "Dog" },
      { emoji: "🐱", value: "Cat" },
      { emoji: "🍎", value: "Apple" },
      { emoji: "🚗", value: "Car" }
    ],
    correctAnswer: "Dog",
    mascotMsg: "Let's learn animals! 'Phu' means Dog."
  },
  {
    type: 'visual_match',
    question: "Which one is 'Sok' (Rice)?",
    options: [
      { emoji: "🍌", value: "Banana" },
      { emoji: "🍚", value: "Rice" },
      { emoji: "🍉", value: "Watermelon" },
      { emoji: "🥩", value: "Meat" }
    ],
    correctAnswer: "Rice",
    mascotMsg: "Yum! 'Sok' is Rice, our staple food."
  },
  {
    type: 'visual_match',
    question: "Which one is 'Lang' (Water)?",
    options: [
      { emoji: "💧", value: "Water" },
      { emoji: "🔥", value: "Fire" },
      { emoji: "🌲", value: "Tree" },
      { emoji: "☀️", value: "Sun" }
    ],
    correctAnswer: "Water",
    mascotMsg: "'Lang' means Water. Stay hydrated!"
  },
  {
    type: 'simulated_audio',
    question: "Tap the speaker and find the match!",
    audioWord: "Phu",
    translation: "Dog",
    options: [
      { emoji: "🍎", value: "Apple" },
      { emoji: "🐶", value: "Dog" }
    ],
    correctAnswer: "Dog",
    mascotMsg: "Listen carefully to the sound!"
  },
  {
    type: 'drag_and_drop',
    question: "Feed Tokbi the 'Sok' (Rice)",
    options: [
      { emoji: "🍎", value: "Apple" },
      { emoji: "🍚", value: "Rice" },
      { emoji: "🍓", value: "Strawberry" },
      { emoji: "🥕", value: "Carrot" }
    ],
    correctAnswer: "Rice",
    mascotMsg: "I'm hungry! Give me some Sok!"
  },
  {
    type: 'visual_match',
    question: "Which one is 'Hem' (House)?",
    options: [
      { emoji: "🏠", value: "House" },
      { emoji: "🚗", value: "Car" },
      { emoji: "🌳", value: "Tree" },
      { emoji: "☁️", value: "Cloud" }
    ],
    correctAnswer: "House",
    mascotMsg: "'Hem' means House. Where we live!"
  },
  {
    type: 'visual_match',
    question: "Which one is 'Pi' (Mother)?",
    options: [
      { emoji: "👩🏽", value: "Mother" },
      { emoji: "👨🏽", value: "Father" },
      { emoji: "👶🏽", value: "Baby" },
      { emoji: "👵🏽", value: "Grandma" }
    ],
    correctAnswer: "Mother",
    mascotMsg: "Family is important. 'Pi' is Mother."
  },
  {
    type: 'visual_match',
    question: "Which one is 'Po' (Father)?",
    options: [
      { emoji: "👩🏽", value: "Mother" },
      { emoji: "👨🏽", value: "Father" },
      { emoji: "👧🏽", value: "Girl" },
      { emoji: "👦🏽", value: "Boy" }
    ],
    correctAnswer: "Father",
    mascotMsg: "'Po' means Father in Karbi."
  },
  {
    type: 'simulated_audio',
    question: "What sound is this? 'Lang'",
    audioWord: "Lang",
    translation: "Water",
    options: [
      { emoji: "💧", value: "Water" },
      { emoji: "🍚", value: "Rice" }
    ],
    correctAnswer: "Water",
    mascotMsg: "Listen to the word for Water!"
  },
  {
    type: 'drag_and_drop',
    question: "Put the 'Hem' (House) in the box",
    options: [
      { emoji: "🏠", value: "House" },
      { emoji: "🚗", value: "Car" },
      { emoji: "🚲", value: "Bicycle" },
      { emoji: "⛺", value: "Tent" }
    ],
    correctAnswer: "House",
    mascotMsg: "Can you find the Hem?"
  },
  {
    type: 'visual_match',
    question: "Which one is 'Men' (Name)?",
    options: [
      { emoji: "📛", value: "Name Badge" },
      { emoji: "📅", value: "Calendar" },
      { emoji: "📖", value: "Book" },
      { emoji: "✏️", value: "Pencil" }
    ],
    correctAnswer: "Name Badge",
    mascotMsg: "What is your 'Men'?"
  },
  {
    type: 'visual_match',
    question: "Which one is 'Kardom' (Hello)?",
    options: [
      { emoji: "👋🏽", value: "Waving Hand" },
      { emoji: "🛑", value: "Stop" },
      { emoji: "🏃🏽‍♂️", value: "Running" },
      { emoji: "💤", value: "Sleeping" }
    ],
    correctAnswer: "Waving Hand",
    mascotMsg: "'Kardom' is how we greet each other!"
  }
];
