const a = [
    {
        "id": 1,
        "quote": "Be water, my friend. Empty your mind, be formless, shapeless — like water.",
        "author": "Bruce Lee"
    },
    {"id": 2, "quote": "Water is the driving force of all nature.", "author": "Leonardo da Vinci"},
    {
        "id": 3,
        "quote": "Nothing in the world is more flexible and yielding than water, yet nothing can resist it.",
        "author": "Lao Tzu"
    },
    {"id": 4, "quote": "Thousands have lived without love, not one without water.", "author": "W. H. Auden"},
    {
        "id": 5,
        "quote": "Water, thou hast no taste, no color, no odor; canst not be defined, art relished while unknown. Thou art not necessary to life: but rather art life itself.",
        "author": "Antoine de Saint-Exupéry"
    },
    {
        "id": 6,
        "quote": "Dripping water hollows out stone, not through force, but through persistence.",
        "author": "Ovid"
    },
    {
        "id": 7,
        "quote": "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
        "author": "Heraclitus"
    },
    {
        "id": 8,
        "quote": "We are made of water, we breathe water, and we return to water.",
        "author": "Jacques-Yves Cousteau"
    },
    {"id": 9, "quote": "Water is the softest thing, yet it can penetrate mountains and earth.", "author": "Confucius"},
    {
        "id": 10,
        "quote": "The sea knows no pity, but generously grants freedom to those who listen to the sound of its waves.",
        "author": "Unknown"
    },
    {"id": 11, "quote": "Take a sip of water — reset your thoughts.", "author": "Friendly Reminder"},
    {
        "id": 12,
        "quote": "Water takes the shape of whatever holds it, yet it never loses its true nature.",
        "author": "Eastern Wisdom"
    },
    {"id": 13, "quote": "Pure water is the first and foremost medicine.", "author": "Hippocrates"},
    {
        "id": 14,
        "quote": "We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.",
        "author": "Mother Teresa"
    },
    {
        "id": 15,
        "quote": "Water teaches us patience: it carves through rock simply because it never stops moving.",
        "author": "Daoist Philosophy"
    },
    {
        "id": 16,
        "quote": "Even the fiercest storm begins with a silent ripple on the water's surface.",
        "author": "Nautical Proverb"
    },
    {
        "id": 17,
        "quote": "Feeling fatigued or stuck on a task? Start with a cold glass of water.",
        "author": "Daily Tip"
    },
    {
        "id": 18,
        "quote": "Water washes away the dust of yesterday to clear the path for tomorrow.",
        "author": "Folk Wisdom"
    },
    {
        "id": 19,
        "quote": "A river always remembers its source, no matter how far it travels.",
        "author": "African Proverb"
    },
    {
        "id": 20,
        "quote": "Water does not argue with the stones in its path; it simply flows around them.",
        "author": "Zen Parable"
    },
    {"id": 21, "quote": "Your brain is roughly 75% water. Don't let it run dry.", "author": "Physiology Fact"},
    {"id": 22, "quote": "The sound of rolling waves is the oldest soundtrack on Earth.", "author": "Ernest Hemingway"},
    {"id": 23, "quote": "To see the reflection of the stars, the lake must first be still.", "author": "Sufi Wisdom"},
    {
        "id": 24,
        "quote": "Water is the mirror that reflects the sky when the earth remains silent.",
        "author": "Poetic Thought"
    },
    {
        "id": 25,
        "quote": "Nothing is stronger than an element that can exist as invisible vapor, flowing liquid, and unbreakable ice.",
        "author": "Physics of Nature"
    },
    {
        "id": 26,
        "quote": "Civilizations flourish only where clean water flows freely.",
        "author": "Historical Observation"
    },
    {
        "id": 27,
        "quote": "Deep rivers move with silent majesty; shallow brooks babble.",
        "author": "Quintus Curtius Rufus"
    },
    {"id": 28, "quote": "Drink water, maintain focus, and keep pushing forward.", "author": "Daily Motivation"},
    {
        "id": 29,
        "quote": "Water does not resist. Water flows. When you plunge your hand into it, all you feel is a caress.",
        "author": "Margaret Atwood"
    },
    {
        "id": 30,
        "quote": "A rolling stone gathers no moss, and a still pool gathers no currents.",
        "author": "Traditional Proverb"
    },
    {
        "id": 31,
        "quote": "Water washes away not only the dirt from roads, but also the clutter from minds.",
        "author": "Japanese Proverb"
    },
    {"id": 32, "quote": "When the well is dry, we know the worth of water.", "author": "Benjamin Franklin"},
    {
        "id": 33,
        "quote": "A river cuts through rock not because of its power, but because of its persistence.",
        "author": "Jim Watkins"
    },
    {
        "id": 34,
        "quote": "The thirst for knowledge is best satisfied when the body itself is well hydrated.",
        "author": "Ancient Maxim"
    },
    {"id": 35, "quote": "Ice is merely water that learned how to stand its ground.", "author": "Nature Metaphor"},
    {
        "id": 36,
        "quote": "Listen to the water: in its stream lies the remedy to the haste of the world.",
        "author": "Hermann Hesse"
    },
    {
        "id": 37,
        "quote": "A single sip of water in the desert is worth more than a caravan of gold.",
        "author": "Bedouin Saying"
    },
    {
        "id": 38,
        "quote": "Water visits every shore, but never stays captive to any of them.",
        "author": "Wanderer's Maxim"
    },
    {"id": 39, "quote": "Mental clarity follows close behind physical hydration.", "author": "Biohacking Insight"},
    {
        "id": 40,
        "quote": "A waterfall is magnificent only because the water is fearless enough to drop into the abyss.",
        "author": "Philosophical Note"
    },
    {
        "id": 41,
        "quote": "Water is the sole element capable of connecting divided continents.",
        "author": "Geographic Truth"
    },
    {
        "id": 42,
        "quote": "Be like a mountain brook: crisp, pure, and relentlessly chasing the valley.",
        "author": "Alpine Wisdom"
    },
    {
        "id": 43,
        "quote": "There are more cosmic secrets held in a single glass of water than in a dusty library.",
        "author": "Scientific Perspective"
    },
    {
        "id": 44,
        "quote": "You can't cross the sea merely by standing and staring at the water.",
        "author": "Rabindranath Tagore"
    },
    {
        "id": 45,
        "quote": "Drink water consistently today — your future productivity will thank you.",
        "author": "Healthy Habit"
    },
    {
        "id": 46,
        "quote": "Water does not dread the pitch black of subterranean springs; it knows the sun awaits above.",
        "author": "Allegory"
    },
    {"id": 47, "quote": "A calm lake mirrors the world without distortion.", "author": "Eastern Proverb"},
    {
        "id": 48,
        "quote": "Water holds the strength to grind mountains down while remaining transparent to the naked eye.",
        "author": "Nature Observation"
    },
    {
        "id": 49,
        "quote": "Satisfy your thirst before your body is forced to sound the alarm.",
        "author": "Health Guideline"
    },
    {
        "id": 50,
        "quote": "A single dewdrop at dawn reflects the brilliance of the entire sun.",
        "author": "Haiku Philosophy"
    },
    {
        "id": 51,
        "quote": "The river flows onward not out of haste, but simply because that is its nature.",
        "author": "Flow State"
    },
    {
        "id": 52,
        "quote": "The purity of the water you drink shapes the clarity of your thoughts.",
        "author": "Ayurvedic Maxim"
    },
    {
        "id": 53,
        "quote": "No concrete dam was ever built that could hold back the tide indefinitely.",
        "author": "Engineering Axiom"
    },
    {
        "id": 54,
        "quote": "Water rinses away distractions and leaves behind raw purpose.",
        "author": "Reflective Thought"
    },
    {
        "id": 55,
        "quote": "Every time you drink fresh water, you invest directly in your own vitality.",
        "author": "Wellness Note"
    },
    {"id": 56, "quote": "A rising tide lifts all boats.", "author": "John F. Kennedy"},
    {
        "id": 57,
        "quote": "Water demonstrates softness in power and absolute resolve in gentleness.",
        "author": "Martial Arts Lore"
    },
    {"id": 58, "quote": "Without water, even the richest soil is reduced to barren dust.", "author": "Agronomy"},
    {
        "id": 59,
        "quote": "Where there is stagnation, there is decay. Stay fluid, like a swift stream.",
        "author": "Daoist Insight"
    },
    {"id": 60, "quote": "Water is the respiration of planet Earth.", "author": "Ecology"},
    {
        "id": 61,
        "quote": "A glass of water at sunrise awakens the body more gracefully than any alarm.",
        "author": "Morning Ritual"
    },
    {"id": 62, "quote": "The cure for anything is salt water: sweat, tears or the sea.", "author": "Isak Dinesen"},
    {"id": 63, "quote": "Water doesn't stumble on boulders; it transforms them into rapids.", "author": "Resilience"},
    {"id": 64, "quote": "Still waters run deep.", "author": "English Proverb"},
    {
        "id": 65,
        "quote": "A branch survives the winter by yielding to snow; water survives pressure by flowing.",
        "author": "Zen Saying"
    },
    {"id": 66, "quote": "Water is the blue bloodstream of our world.", "author": "Ancient Myth"},
    {
        "id": 67,
        "quote": "Your body doesn't crave sugar — it craves pure, life-giving water.",
        "author": "Nutrition Fact"
    },
    {
        "id": 68,
        "quote": "The rain falls on the just and the unjust alike, cleansing the footprints of chaos.",
        "author": "Classic Literature"
    },
    {
        "id": 69,
        "quote": "Water is the master of diplomacy: it yields to container shapes, but wins with time.",
        "author": "Natural Philosophy"
    },
    {
        "id": 70,
        "quote": "When the mind is as tranquil as a mountain spring, answers surface unforced.",
        "author": "Meditation Maxim"
    },
    {
        "id": 71,
        "quote": "Do not fear falling: water plunges from staggering heights only to create rainbows.",
        "author": "Inspiration"
    },
    {"id": 72, "quote": "Earth thanks the open sky with greenery whenever the rains fall.", "author": "Country Wisdom"},
    {
        "id": 73,
        "quote": "Exhaustion is often nothing more than hidden dehydration. Drink a glass of water.",
        "author": "Medical Advice"
    },
    {"id": 74, "quote": "Water dissolves toxins and sparks life into dormant seeds.", "author": "Botanical Truth"},
    {
        "id": 75,
        "quote": "In the fiercest gale, remember: the ocean abyss remains untouched and calm.",
        "author": "Equanimity"
    },
    {
        "id": 76,
        "quote": "A snowflake is water's intricate geometry frozen into silent art.",
        "author": "Poetry of Science"
    },
    {
        "id": 77,
        "quote": "Water separates islands while linking them into one global story.",
        "author": "Maritime Truth"
    },
    {
        "id": 78,
        "quote": "Listen to the rain tapping against your window — let it wash away unnecessary thoughts.",
        "author": "Mindfulness"
    },
    {
        "id": 79,
        "quote": "A single drop of clean water changes the chemical equilibrium of an entire vessel.",
        "author": "Chemistry"
    },
    {
        "id": 80,
        "quote": "Don't wait for your mouth to feel parched; drink before you are thirsty.",
        "author": "Golden Rule of Health"
    },
    {
        "id": 81,
        "quote": "Running water never grows stale, and a well-used hinge never rusts.",
        "author": "Chinese Proverb"
    },
    {
        "id": 82,
        "quote": "Within a solitary drop of water dwells the architectural elegance of the cosmos.",
        "author": "Cosmic Thought"
    },
    {"id": 83, "quote": "The ocean never panics, for it knows it has all of time.", "author": "Maritime Philosophy"},
    {
        "id": 84,
        "quote": "Water scrubs away yesterday's fatigue to leave an unblemished slate.",
        "author": "Mental Reset"
    },
    {
        "id": 85,
        "quote": "All earthly life emerged from the sea and cannot outlive its loss.",
        "author": "Evolutionary Fact"
    },
    {
        "id": 86,
        "quote": "Water appears transparent, yet its depths cradle the deepest secrets of our world.",
        "author": "Reflection"
    },
    {
        "id": 87,
        "quote": "When life feels suffocating, consider how seamlessly water escapes confinement.",
        "author": "Encouragement"
    },
    {"id": 88, "quote": "Treat water like the elixir of youth that it genuinely is.", "author": "Self-Care"},
    {
        "id": 89,
        "quote": "Water carves out river valleys just as clear intentions carve out purposeful lives.",
        "author": "Metaphor for Action"
    },
    {
        "id": 90,
        "quote": "Drops forge creeks, creeks feed rivers, and rivers fill the endless ocean.",
        "author": "Law of Compounding"
    },
    {
        "id": 91,
        "quote": "Even beneath the driest desert sand, hidden aquifers await their time.",
        "author": "Enduring Hope"
    },
    {
        "id": 92,
        "quote": "A squall at sea tests not only the timber of the vessel, but the resolve of the skipper.",
        "author": "Sailor's Code"
    },
    {
        "id": 93,
        "quote": "Water can cradle a child or level a coastline. Revere its quiet power.",
        "author": "Elemental Respect"
    },
    {"id": 94, "quote": "A glass of cool water restores brightness to tired eyes.", "author": "Rejuvenation"},
    {
        "id": 95,
        "quote": "Water conquers the quarry not through a crushing blow, but through continuous presence.",
        "author": "Grit"
    },
    {"id": 96, "quote": "The morning dew on a leaf is a jewel that requires no jeweler.", "author": "Hayashi Razan"},
    {
        "id": 97,
        "quote": "Water is the universal solvent for physical and mental weariness.",
        "author": "Restorative Rule"
    },
    {
        "id": 98,
        "quote": "The ocean welcomes every wandering tributary without ever overflowing.",
        "author": "True Humility"
    },
    {
        "id": 99,
        "quote": "Balance your hydration, and balance will return to your work.",
        "author": "Workplace Wellness"
    },
    {
        "id": 100,
        "quote": "In a single drop of water are found all the secrets of all the oceans.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "id": 101,
        "quote": "Water shows us that to be undeniably powerful, one need not be rigid.",
        "author": "Natural Ethics"
    },
    {
        "id": 102,
        "quote": "Adapt to the boundaries of your circumstances while preserving your clarity, as water does.",
        "author": "Stoic Counsel"
    },
    {
        "id": 103,
        "quote": "Every drink of fresh water is an unspoken homage to the natural world.",
        "author": "Gratitude"
    },
    {
        "id": 104,
        "quote": "A woodland spring seeks no audience; it simply quenches the traveler's thirst.",
        "author": "Quiet Virtue"
    },
    {"id": 105, "quote": "Every drop exerts pressure if allowed to strike long enough.", "author": "Steadfastness"},
    {"id": 106, "quote": "Water is nature's antidote to inner sluggishness.", "author": "Living Well"},
    {
        "id": 107,
        "quote": "Breakers crash and shatter against cliffs, yet the tide returns undaunted.",
        "author": "Perseverance"
    },
    {
        "id": 108,
        "quote": "When the pool is stirred, the bottom is hidden; when the heart is agitated, truth is lost.",
        "author": "Eastern Proverb"
    },
    {"id": 109, "quote": "Water wipes away the dust that routine settles upon our days.", "author": "Pause & Breathe"},
    {
        "id": 110,
        "quote": "Do not wage war against life's current — learn the art of rowing.",
        "author": "Practical Wisdom"
    },
    {
        "id": 111,
        "quote": "Thirst serves to remind us how modest our actual necessities really are.",
        "author": "Minimalism"
    },
    {
        "id": 112,
        "quote": "Steam aspires to the heavens, ice preserves stillness, and water nurtures the ground.",
        "author": "States of Matter"
    },
    {"id": 113, "quote": "Step away from your screen. Pour a tall glass of water. Exhale.", "author": "Midday Pause"},
    {
        "id": 114,
        "quote": "Water feeds the deep taproots while remaining hidden beneath the loam.",
        "author": "Silent Influence"
    },
    {
        "id": 115,
        "quote": "The sea never argues with the gale; it rises and matches its cadence.",
        "author": "Harmonious Living"
    },
    {
        "id": 116,
        "quote": "Water possesses no pigment of its own, yet paints the globe in vivid green and blue.",
        "author": "Color of Life"
    },
    {
        "id": 117,
        "quote": "To a traveler walking out of the dunes, simple water tastes richer than aged wine.",
        "author": "Arabic Proverb"
    },
    {
        "id": 118,
        "quote": "Greet each morning with an open mind and a full glass of water.",
        "author": "Morning Standard"
    },
    {
        "id": 119,
        "quote": "Water always locates the fissure inside the most imposing monolith.",
        "author": "Unyielding Resolve"
    },
    {
        "id": 120,
        "quote": "A tear is merely salt water through which the soul rinses its sorrows.",
        "author": "Human Heart"
    },
    {
        "id": 121,
        "quote": "Water weaves heaven and earth together in an unending cycle of return.",
        "author": "Hydrological Cycle"
    },
    {
        "id": 122,
        "quote": "Observe the brook: it does not struggle to run faster; it simply yields to gravity.",
        "author": "Calmness"
    },
    {
        "id": 123,
        "quote": "Wellness originates with what you feed your cells. Choose pure water.",
        "author": "Foundational Health"
    },
    {
        "id": 124,
        "quote": "The kettle sings only when the flame beneath it burns steady and bright.",
        "author": "Devotion to Craft"
    },
    {
        "id": 125,
        "quote": "A canyon's path is carved by centuries of patient, unwavering current.",
        "author": "Compound Habits"
    },
    {"id": 126, "quote": "No deceit can hide beneath crystal clear water.", "author": "Transparency"},
    {
        "id": 127,
        "quote": "A single tall glass of water can often banish an approaching tension headache.",
        "author": "Wellness Quick Tip"
    },
    {
        "id": 128,
        "quote": "Water grants life to the apple tree without ever demanding its harvest in return.",
        "author": "Unconditional Giving"
    },
    {
        "id": 129,
        "quote": "A descending rivulet always discovers the easiest, most harmonious path down.",
        "author": "Graceful Efficiency"
    },
    {
        "id": 130,
        "quote": "Anyone can hold the helm when the sea is calm; a captain's skill is revealed in the squall.",
        "author": "Command & Leadership"
    },
    {
        "id": 131,
        "quote": "The river harbors no bitterness; it simply washes the obstacle and moves past.",
        "author": "Forgiveness"
    },
    {
        "id": 132,
        "quote": "Drink your water mindfully: experience the cool clarity with every swallow.",
        "author": "Micro-Meditation"
    },
    {
        "id": 133,
        "quote": "A forest fountain offers its bounty to the songbird and the wolf without prejudice.",
        "author": "Impartial Kindness"
    },
    {
        "id": 134,
        "quote": "The iceberg reveals only a fraction of its mass to the passing ship.",
        "author": "Untapped Depth"
    },
    {
        "id": 135,
        "quote": "Water smooths jagged river stones, and time softens the sharpest sorrows.",
        "author": "Gentle Solace"
    },
    {
        "id": 136,
        "quote": "A grain of wheat will not sprout without moisture, no matter how warmly the sun shines.",
        "author": "Vital Balance"
    },
    {
        "id": 137,
        "quote": "Keep water within arm's reach while you debug your toughest challenges.",
        "author": "Coder's Companion"
    },
    {
        "id": 138,
        "quote": "Water navigates barricades not by violent opposition, but by patient circumnavigation.",
        "author": "Tactful Strategy"
    },
    {
        "id": 139,
        "quote": "A sea breeze clears the chest; pure drinking water cleanses the body.",
        "author": "Pure Energy"
    },
    {"id": 140, "quote": "Where the water dries up, the heartbeat of the land ceases.", "author": "Ecological Warning"},
    {
        "id": 141,
        "quote": "Water does not lament evaporating into the sky, for it knows it will return as rain.",
        "author": "Eternal Return"
    },
    {"id": 142, "quote": "Your body wants honest water, not another mug of caffeine.", "author": "Common Sense"},
    {
        "id": 143,
        "quote": "The river's depth is deceiving when its mirrored surface rests unbroken.",
        "author": "Prudence"
    },
    {
        "id": 144,
        "quote": "Waves erase tracks upon the strand, reminding us how fleeting our anxieties are.",
        "author": "Perspective"
    },
    {
        "id": 145,
        "quote": "The sky paints itself onto the pond only when the ripples subside.",
        "author": "Clear Vision"
    },
    {
        "id": 146,
        "quote": "Keep a filled water flask beside your keyboard — the simplest productivity boost.",
        "author": "Desk Setup Tip"
    },
    {
        "id": 147,
        "quote": "Water refreshes in the summer heat and comforts as rising steam on a frosty night.",
        "author": "Versatility"
    },
    {"id": 148, "quote": "The thundering cataract drowns out frivolous banter.", "author": "Majesty of Silence"},
    {
        "id": 149,
        "quote": "Rain does not pass judgment on the soil upon which it showers.",
        "author": "Radical Acceptance"
    },
    {"id": 150, "quote": "Stay properly hydrated; keep your strength invincible.", "author": "Athletic Creed"},
    {
        "id": 151,
        "quote": "Water wears down granite not by raw brute impact, but through infinite perseverance.",
        "author": "Secret to Mastery"
    },
    {
        "id": 152,
        "quote": "Gaze upon moving water when anger stirs; let its rhythm quiet your pulse.",
        "author": "Emotional Equilibrium"
    },
    {"id": 153, "quote": "A downstream current is as inexorable as the march of hours.", "author": "Passage of Time"},
    {
        "id": 154,
        "quote": "Water is the essential spark that rejuvenates every cell within you.",
        "author": "Cellular Biology"
    },
    {"id": 155, "quote": "A lake becomes a true mirror only after the brisk winds die down.", "author": "Serenity"},
    {"id": 156, "quote": "Water gives of itself without condition to all living things.", "author": "Generosity"},
    {"id": 157, "quote": "Even a tiny rill can nurture an entire grove of oak trees.", "author": "Power of the Small"},
    {
        "id": 158,
        "quote": "Drink water routinely; supply your brain with the fuel it needs for razor-sharp focus.",
        "author": "Focus Hack"
    },
    {
        "id": 159,
        "quote": "Drop by drop the sea gathers; step by step the journey concludes.",
        "author": "Incremental Progress"
    },
    {
        "id": 160,
        "quote": "Water claims no pride: it seeks the lowest places and enriches them.",
        "author": "Dignified Humility"
    },
    {
        "id": 161,
        "quote": "The rising tide is never tardy; it moves with celestial choreography.",
        "author": "Cosmic Timing"
    },
    {
        "id": 162,
        "quote": "Hydration is the silent breath of every organ in your body.",
        "author": "Physiological Truth"
    },
    {
        "id": 163,
        "quote": "Frost yields to warmth, and rigidity dissolves before sincere kindness.",
        "author": "Human Truth"
    },
    {
        "id": 164,
        "quote": "The absolute clarity of clean water is both its greatest weapon and its beauty.",
        "author": "Honesty"
    },
    {"id": 165, "quote": "Drink a glass of water before starting your next sprint or task.", "author": "Workflow Tip"},
    {
        "id": 166,
        "quote": "Water revitalizes parched roots long before the first bud catches the sun.",
        "author": "Quiet Growth"
    },
    {
        "id": 167,
        "quote": "The river laughs at jagged boulders, gradually turning them into polished pebbles.",
        "author": "Gentle Triumph"
    },
    {
        "id": 168,
        "quote": "Water slips through clenched fists; cup your palms open if you wish to hold it.",
        "author": "Letting Go"
    },
    {
        "id": 169,
        "quote": "Your daily mood and cognitive energy are deeply tied to your fluid intake.",
        "author": "Neuroscience Note"
    },
    {
        "id": 170,
        "quote": "In the hush of the dawn dew lies the gentle promise of a fresh start.",
        "author": "Morning Optimism"
    },
    {"id": 171, "quote": "Water dissolves barriers quietly, without raising an outcry.", "author": "Understated Grace"},
    {
        "id": 172,
        "quote": "The vast sea never discriminates against the storms that pour into its chest.",
        "author": "Boundless Grace"
    },
    {
        "id": 173,
        "quote": "A cool glass of water restores mental bandwidth faster than a coffee break.",
        "author": "Cognitive Reset"
    },
    {
        "id": 174,
        "quote": "Water fills the cistern from the depths below, quietly and without fanfare.",
        "author": "Deep Work"
    },
    {"id": 175, "quote": "Emulate water: skirt around the sharp edges of useless quarrels.", "author": "Peace of Mind"},
    {
        "id": 176,
        "quote": "Where an artesian well bubbles up, desolation can never gain a foothold.",
        "author": "Abundance"
    },
    {
        "id": 177,
        "quote": "Water does not shout about its authority; it simply washes the levee away.",
        "author": "Quiet Strength"
    },
    {"id": 178, "quote": "Take a sip, straighten your spine, and breathe deeply.", "author": "Posture Check"},
    {
        "id": 179,
        "quote": "Morning dew bathes the meadows before the day's great labors commence.",
        "author": "Fresh Perspective"
    },
    {"id": 180, "quote": "Water transforms a parched wilderness into a thriving garden.", "author": "Metamorphosis"},
    {
        "id": 181,
        "quote": "Even beneath thick pond ice, a steady, living pulse flows undisturbed.",
        "author": "Inner Resilience"
    },
    {
        "id": 182,
        "quote": "Drinking fresh water is the simplest gesture of self-respect you can offer yourself.",
        "author": "Body Care"
    },
    {"id": 183, "quote": "Water avoids the path of vanity and creates the path of truth.", "author": "Authenticity"},
    {
        "id": 184,
        "quote": "The ocean preserves dignified silence over thousands of forgotten wrecks.",
        "author": "Grand Mystery"
    },
    {"id": 185, "quote": "Water subdues the fury of wildfire through quiet coolness.", "author": "Poise Under Fire"},
    {
        "id": 186,
        "quote": "Your tissues whisper for hydration long before your tongue feels dry.",
        "author": "Somatic Awareness"
    },
    {
        "id": 187,
        "quote": "The river never quarrels with its banks; the banks merely provide direction.",
        "author": "Constructive Boundaries"
    },
    {
        "id": 188,
        "quote": "Water preserves the warmth of summer daylight alongside the chill of starry nights.",
        "author": "Thermal Memory"
    },
    {
        "id": 189,
        "quote": "A well-hydrated brain thinks faster, reasons clearer, and worries less.",
        "author": "Cognitive Health"
    },
    {
        "id": 190,
        "quote": "Gales rage across the ocean surface, but the profound deep remains unshaken.",
        "author": "Unshakable Soul"
    },
    {
        "id": 191,
        "quote": "Every grand river began as a forgotten drop filtering through the loam.",
        "author": "Humble Beginnings"
    },
    {"id": 192, "quote": "A fresh current flushes the riverbed clean of debris.", "author": "Renewal"},
    {
        "id": 193,
        "quote": "Stay hydrated — it is your most reliable battery throughout the working day.",
        "author": "Daily Fuel"
    },
    {"id": 194, "quote": "Water discovers an exit even when all bolts and doors are latched.", "author": "Ingenuity"},
    {
        "id": 195,
        "quote": "The placid surface of a pond cradles the reflection of the heavens.",
        "author": "Contemplation"
    },
    {"id": 196, "quote": "Water breathes vitality into every blade of wheat in the open field.", "author": "Fertility"},
    {"id": 197, "quote": "Refresh your mind with a cold glass of spring water.", "author": "Quick Refresh"},
    {
        "id": 198,
        "quote": "A waterfall takes shape only when the river refuses to shy away from the ledge.",
        "author": "Courage"
    },
    {"id": 199, "quote": "Water represents perpetual motion that knows no weariness.", "author": "Endless Energy"},
    {
        "id": 200,
        "quote": "You are largely water yourself — protect it within you and around you.",
        "author": "Ultimate Truth"
    }
]