/**
 * Nitya Prerna — Core Data Store & Storage Manager
 * Includes authentic initial Indian heritage dataset and non-technical CMS persistence layer.
 */

const INITIAL_POSTS = [
  // 1. TODAY'S HIGHLIGHT: DAILY INSPIRATION
  {
    id: "inspire-vivekananda-arise",
    title: "The Power of Inner Strength and Purpose",
    slug: "power-of-inner-strength-and-purpose",
    type: "daily",
    category: "Daily Inspiration",
    shortDescription: "Strength is life, weakness is death. True empowerment begins when you realize the infinite potential within yourself.",
    quote: "Arise, awake, and stop not till the goal is reached.",
    quoteAuthor: "Swami Vivekananda",
    supportingThought: "Every morning brings with it a fresh canvas. Do not carry yesterday's regrets into today's potential. Whatever task you undertake, do it with the entirety of your heart, undivided mind, and noble resolve.",
    content: `
      <p>Swami Vivekananda constantly reminded us that the greatest sin is to think oneself weak. In our daily pursuit of professional targets, family commitments, and personal aspirations, we often surrender to fatigue or doubt.</p>
      <p>True strength is not merely physical resilience; it is the unwavering calmness of the mind in the face of turbulence. In the ancient Vedic tradition, every human soul is considered a spark of the divine—Sat-Chit-Ananda (Truth, Consciousness, Bliss).</p>
      <h3>Three Daily Reminders for Mental Clarity</h3>
      <ul>
        <li><strong>Practice Self-Belief:</strong> If you do not have faith in your own inner faculties, all external validation will ring hollow.</li>
        <li><strong>Focus on Selfless Action:</strong> Work done without selfish anxiety about immediate rewards purifies the intellect and produces enduring excellence.</li>
        <li><strong>Cultivate Quiet Moments:</strong> Dedicate at least fifteen minutes at dawn to stillness, reflection, and gratitude before the world makes demands on your attention.</li>
      </ul>
      <p>Remember: You are the creator of your own destiny. Light the lamp of knowledge within, and darkness will disperse on its own accord.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    author: "Editorial Team",
    publishDate: "2026-11-05",
    readTime: "3 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["Motivation", "Swami Vivekananda", "Self-Belief", "Vedic Wisdom"]
  },

  // 2. TODAY'S HIGHLIGHT: THIS DAY IN HISTORY (NOV 5)
  {
    id: "history-mangalyaan-launch-nov-5",
    title: "Mars Orbiter Mission (Mangalyaan) Launches into the Cosmos",
    slug: "mars-orbiter-mission-mangalyaan-launches",
    type: "history",
    category: "Historical Dates",
    shortDescription: "On November 5, 2013, ISRO launched India's historic maiden interplanetary probe, Mangalyaan, achieving interplanetary orbit on its very first attempt.",
    historicalDate: "11-05",
    historicalMonth: 11,
    historicalDay: 5,
    historicalYear: 2013,
    eventType: "Science & Culture",
    associatedPersonality: "K. Radhakrishnan & ISRO Scientists",
    historicalSignificance: "India became the fourth space agency in human history to reach Mars, and the first nation in the world to do so on its maiden attempt at an extraordinarily frugal budget.",
    sources: "Indian Space Research Organisation (ISRO) Archives",
    content: `
      <p>On November 5, 2013, at 2:38 PM IST, the Polar Satellite Launch Vehicle (PSLV-C25) blasted off from the Satish Dhawan Space Centre in Sriharikota, carrying India's first interplanetary spacecraft—the <strong>Mars Orbiter Mission (MOM)</strong>, affectionately known as <em>Mangalyaan</em>.</p>
      <p>This mission became a shining testament to Indian scientific acumen, indomitable spirit, and technological ingenuity. Built with an astonishing budget of approximately 450 Crores (around $74 million)—less than the budget of several Hollywood space movies—India accomplished what no other nation had done: reaching Martian orbit on the very first attempt.</p>
      <h3>Historic Milestones of Mangalyaan</h3>
      <ul>
        <li><strong>Global Acclaim:</strong> India became the first Asian country to reach Mars orbit, and the first in the world to succeed on maiden voyage.</li>
        <li><strong>Frugal Engineering:</strong> Demonstrated world-class aerospace engineering and indigenous miniaturization of instruments.</li>
        <li><strong>Longevity:</strong> Originally designed for a 6-month mission life, Mangalyaan operated successfully for nearly eight years, sending back hundreds of thousands of breathtaking high-resolution images of the Martian surface.</li>
      </ul>
      <p>November 5 stands as an indelible reminder of what Indian determination and scientific dedication can achieve on the global stage.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    author: "Historical Society",
    publishDate: "2026-11-05",
    readTime: "4 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["ISRO", "Mangalyaan", "Science", "Space", "Indian History", "Sriharikota"]
  },

  // 3. TODAY'S HIGHLIGHT: COMMEMORATION (NOV 5)
  {
    id: "commem-deshbandhu-cr-das-nov-5",
    title: "Birth Anniversary of Deshbandhu Chittaranjan Das",
    slug: "birth-anniversary-deshbandhu-chittaranjan-das",
    type: "commemoration",
    category: "Historical Dates",
    shortDescription: "Remembering 'Deshbandhu' (Friend of the Nation) Chittaranjan Das on his birth anniversary (Born Nov 5, 1870), legendary patriot, jurist, and political mentor.",
    historicalDate: "11-05",
    historicalMonth: 11,
    historicalDay: 5,
    historicalYear: 1870,
    eventType: "Birth Anniversary",
    associatedPersonality: "Chittaranjan Das",
    historicalSignificance: "Eminent nationalist leader who sacrificed his lucrative legal practice to serve India's independence struggle, founded the Swarajya Party, and mentored Netaji Subhash Chandra Bose.",
    sources: "National Archives of India, Selected Works of Subhash Chandra Bose",
    content: `
      <p>Born on November 5, 1870, <strong>Chittaranjan Das</strong> was affectionately conferred the title of <em>Deshbandhu</em> ('Friend of the Nation') by the Indian populace for his boundless generosity, sacrifice, and unbending patriotism.</p>
      <p>As one of the most brilliant barristers of the Calcutta High Court, he famously defended Sri Aurobindo Ghosh in the historic Alipore Bomb Case of 1908. During the trial's conclusion, Das delivered one of the most memorable orations in legal history:</p>
      <blockquote>
        "Long after this turmoil, this agitation will have ceased, long after he is dead and gone, he will be looked upon as the poet of patriotism, as the prophet of nationalism and the lover of humanity."
      </blockquote>
      <p>When Mahatma Gandhi launched the Non-Cooperation movement, Das renounced his opulent lifestyle, donated his grand residence to the nation for a women's hospital (now Chittaranjan Seva Sadan), and suffered imprisonment with serene dignity.</p>
      <p>He was the beloved political mentor of Netaji Subhash Chandra Bose, instilling in young minds the spirit of disciplined national service and communal brotherhood.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    author: "Heritage Desk",
    publishDate: "2026-11-05",
    readTime: "3 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["Deshbandhu", "Freedom Fighter", "Nationalist", "Commemoration", "Bengal"]
  },

  // 4. MYTHOLOGICAL WISDOM: BHAGAVAD GITA 2.47
  {
    id: "gita-chapter-2-verse-47",
    title: "Karmanye Vadhikaraste: The Art of Detached Excellence",
    slug: "karmanye-vadhikaraste-art-of-detached-excellence",
    type: "mythology",
    category: "Mythological Wisdom",
    shortDescription: "Lord Krishna's timeless doctrine of Nishkama Karma—performing righteous duties with full devotion while freeing the mind from anxiety about outcomes.",
    scripture: "Bhagavad Gita",
    chapter: "Chapter 2 (Sankhya Yoga)",
    verse: "Verse 47",
    sanskritText: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    englishTranslation: "You have a right to perform your prescribed duties, but never to the fruits of your actions. Let not the fruits of action be your motive, nor let there be an attachment to inaction.",
    explanation: "Sri Krishna delivers this supreme counsel to Prince Arjuna on the battlefield of Kurukshetra. When human beings fixate obsessively on future rewards, anxieties paralyze present execution. By dedicating action to Dharma and releasing attachment to praise, blame, profit, or loss, an individual attains the highest state of mental serenity (Sthitaprajna).",
    practicalLesson: "In everyday work or study, give 100% of your energy to the effort at hand. Worrying about the appraisal, outcome, or public opinion scatters focus. Freedom from outcome anxiety paradoxically leads to the highest quality performance.",
    content: `
      <p>The 47th verse of Chapter 2 of the Srimad Bhagavad Gita is universally celebrated as the bedrock of Vedic philosophy regarding work ethic. It contains four profound golden maxims:</p>
      <ol>
        <li><strong>Karmanye Vadhi Karaste:</strong> You have jurisdiction over your action alone.</li>
        <li><strong>Ma Phaleshu Kadachana:</strong> You never have sovereign control over the resultant harvest.</li>
        <li><strong>Ma Karma Phala Hetur Bhur:</strong> Never let anticipated fruits be the primary catalyst of duty.</li>
        <li><strong>Ma Te Sango Astva Karmani:</strong> Never succumb to nihilism, apathy, or laziness (inaction).</li>
      </ol>
      <p>When we work solely for accolades or money, even minor setbacks bring despondency. But when action is performed as an offering (Yajna) for the welfare of family and society, work itself becomes meditation.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    author: "Spiritual Desk",
    publishDate: "2026-11-04",
    readTime: "5 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["Bhagavad Gita", "Krishna", "Karma Yoga", "Philosophy", "Mindfulness"]
  },

  // 5. MYTHOLOGICAL WISDOM: RAMAYANA - DHARMA
  {
    id: "ramayana-maryada-purushottama",
    title: "Maryada Purushottama: The Path of Righteous Conduct in Ramayana",
    slug: "maryada-purushottama-path-of-righteous-conduct",
    type: "mythology",
    category: "Mythological Wisdom",
    shortDescription: "How Sri Rama exemplified Maryada—the noble boundaries of filial duty, truthfulness, and selfless leadership even in adversity.",
    scripture: "Ramayana",
    chapter: "Ayodhya Kanda",
    verse: "Sarga 109, Sloka 13",
    sanskritText: "सत्यमेवेश्वरो लोके सत्ये धर्मः समाश्रितः।\nसत्यमूलानि सर्वाणि सत्यान्नास्ति परं पदम्॥",
    englishTranslation: "Truth is indeed the supreme ruler in the world; all righteousness resides in Truth. Everything has its origin in Truth, and there is no state higher than Truth.",
    explanation: "Valmiki Ramayana portrays Rama not as an unapproachable deity, but as an ideal human walking through severe trials. When asked to relinquish the throne of Ayodhya on the eve of his coronation, Rama displayed no bitterness or malice.",
    practicalLesson: "True leadership is measured not when life is favorable, but how gracefully we handle betrayals, delays, and unexpected hardships without compromising our core values.",
    content: `
      <p>Sri Rama's life is hailed as the supreme embodiment of <em>Maryada</em>—the honoring of sacred boundaries, societal duties, and moral obligations.</p>
      <p>When Maharishi Valmiki asked Sage Narada: <em>'Who in this contemporary world is endowed with virtues, courage, gratitude, truth, and firmness of vow?'</em>, Narada unequivocally pointed to the Prince of Ayodhya.</p>
      <h3>Enduring Lessons from the Ayodhya Kanda</h3>
      <ul>
        <li><strong>Grace in Relinquishment:</strong> Stepping down from a throne without a trace of anger towards Queen Kaikeyi.</li>
        <li><strong>Respect for Equality:</strong> Welcoming Guha, the tribal chieftain, and Sabari with deep love and egalitarian reverence.</li>
        <li><strong>Commitment to Truth:</strong> Treating one's pledge as sacred, teaching that integrity is the only durable currency of character.</li>
      </ul>
    `,
    coverImage: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
    author: "Spiritual Desk",
    publishDate: "2026-11-03",
    readTime: "4 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["Ramayana", "Sri Rama", "Dharma", "Truth", "Integrity"]
  },

  // 6. GREAT PERSONALITIES: SWAMI VIVEKANANDA
  {
    id: "personality-swami-vivekananda",
    title: "Swami Vivekananda: The Monk Who Awoke a Sleeping Nation",
    slug: "swami-vivekananda-monk-who-awoke-a-nation",
    type: "personality",
    category: "Great Personalities",
    shortDescription: "Spiritual giant, philosopher, and social reformer whose historic 1893 address at Chicago introduced Vedanta to the Western world and reignited India's national self-respect.",
    fullName: "Narendranath Datta (Swami Vivekananda)",
    lifespan: "1863 – 1902",
    birthDate: "1863-01-12",
    deathDate: "1902-07-04",
    majorAchievements: [
      "Historic address at the Parliament of Religions, Chicago (1893)",
      "Founded the Ramakrishna Math and Ramakrishna Mission (1897)",
      "Synthesized modern scientific enquiry with classical Vedanta",
      "Pioneered service to humanity as the highest form of worship (Shiva Jnane Jiva Seva)"
    ],
    biography: `
      Swami Vivekananda was born in Kolkata on January 12, 1863. Possessing a formidable intellect and a deep yearning for direct spiritual experience, he met Sri Ramakrishna Paramahamsa at Dakshineswar, an encounter that transformed his life.
      
      Traveling across the length and breadth of India as an itinerant monk, he witnessed both the sublime spiritual heritage of the country and the heartbreaking poverty of the masses. He resolved that India could not be revitalized without education, self-reliance, and elevation of the downtrodden.
      
      His historic 1893 Chicago speech, beginning with "Sisters and Brothers of America," drew a two-minute standing ovation from seven thousand listeners. He spent the remainder of his brief 39-year life establishing institutions of selfless service and training youth to serve the nation.
    `,
    content: `
      <p>Swami Vivekananda represents the synthesis of ancient Eastern spirituality and modern Western dynamism. He insisted that religion must not be reduced to doctrines or dogmas; it is the manifestation of the divinity already within humanity.</p>
      <h3>Core Philosophies for the Modern Citizen</h3>
      <ul>
        <li><strong>Faith in Yourself:</strong> "The old religion said that he was an atheist who does not believe in God. The new religion says that he is the atheist who does not believe in himself."</li>
        <li><strong>Character Building Education:</strong> Education is not the amount of information put into your brain, but the life-building, man-making, character-making assimilation of ideas.</li>
        <li><strong>Service to Living Beings:</strong> Serving the distressed and marginalized with love is the truest worship of God.</li>
      </ul>
    `,
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    author: "Biographical Archive",
    publishDate: "2026-11-02",
    readTime: "6 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["Swami Vivekananda", "Vedanta", "Philosophy", "Great Personalities", "Youth"]
  },

  // 7. GREAT PERSONALITIES: RANI LAKSHMIBAI
  {
    id: "personality-rani-lakshmibai",
    title: "Rani Lakshmibai of Jhansi: The Eternal Symbol of Valour",
    slug: "rani-lakshmibai-symbol-of-valour",
    type: "personality",
    category: "Great Personalities",
    shortDescription: "The fearless Queen of Jhansi who fought British colonial subjugation in 1857, immortalized for her courage, military tactical genius, and patriotic spirit.",
    fullName: "Manikarnika Tambe (Rani Lakshmibai)",
    lifespan: "1828 – 1858",
    birthDate: "1828-11-19",
    deathDate: "1858-06-18",
    majorAchievements: [
      "Leader of the 1857 Indian War of Independence",
      "Defended the Fort of Jhansi against General Hugh Rose's forces",
      "Created an army of all strata of society including an all-female regiment (Durga Dal)",
      "Immortalized by Sir Hugh Rose as 'the cleverest and most dangerous leader of the rebels'"
    ],
    biography: `
      Born in Varanasi and married into the royal house of Jhansi, Rani Lakshmibai became regent upon her husband's demise. When Lord Dalhousie enforced the predatory 'Doctrine of Lapse' to annex Jhansi, the young queen famously proclaimed: 'Main apni Jhansi nahi doongi' (I shall never surrender my Jhansi).
      
      When the rebellion broke out in 1857, she took command of the fort, personally inspecting fortifications and leading sorties. With her adopted son tied to her back, she rode into battle wielding two swords, demonstrating unprecedented bravery until her martyrdom near Gwalior at just 29 years of age.
    `,
    content: `
      <p>Subhadra Kumari Chauhan's immortal Hindi poem <em>"Khoob ladi mardani woh toh Jhansi wali rani thi"</em> has echoed across classrooms for over a century, celebrating the unmatched heroics of Lakshmibai.</p>
      <p>What made her extraordinary was not just her martial prowess, but her deep empathy for her subjects. She broke orthodoxy by training women from all walks of life in horsemanship, archery, and artillery.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=1200&q=80",
    author: "Heritage Desk",
    publishDate: "2026-11-01",
    readTime: "5 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["Rani Lakshmibai", "Jhansi", "Freedom Struggle", "1857", "Valour"]
  },

  // 8. GREAT PERSONALITIES: SIR C.V. RAMAN
  {
    id: "personality-cv-raman",
    title: "Sir C.V. Raman: The Brilliance of Indigenous Science",
    slug: "sir-cv-raman-brilliance-of-indigenous-science",
    type: "personality",
    category: "Great Personalities",
    shortDescription: "India's first Nobel laureate in Physics, whose discovery of the Raman Effect placed modern Indian scientific research on the world map.",
    fullName: "Chandrasekhara Venkata Raman",
    lifespan: "1888 – 1970",
    birthDate: "1888-11-07",
    deathDate: "1970-11-21",
    majorAchievements: [
      "Discovered the Raman Effect on February 28, 1928 (Celebrated as National Science Day)",
      "Awarded Nobel Prize in Physics (1930) — first Asian recipient in the sciences",
      "First Indian Director of the Indian Institute of Science (IISc), Bangalore",
      "Founded Raman Research Institute (RRI)"
    ],
    biography: `
      C.V. Raman was born in Tiruchirappalli, Tamil Nadu. A prodigious student, he initially entered civil service as an Assistant Accountant-General in Calcutta, while conducting pathbreaking physics research in his spare time at the Indian Association for the Cultivation of Science (IACS).
      
      During a Mediterranean voyage in 1921, the mesmerizing deep blue hue of the sea sparked his curiosity. Disproving Lord Rayleigh's theory that the blue sea was merely a reflection of the sky, Raman demonstrated that water molecules scatter light just like air molecules do.
    `,
    content: `
      <p>Using modest equipment assembled with incredible precision, Raman discovered that when light traverses a transparent medium, a minute portion of the scattered light changes wavelength—now famously known as <strong>Raman Scattering</strong>.</p>
      <p>His discovery continues to find applications today in chemical analysis, pharmaceuticals, airport security, and interstellar astronomy.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    author: "Science Heritage",
    publishDate: "2026-10-31",
    readTime: "4 min read",
    isFeatured: false,
    isPublished: true,
    tags: ["CV Raman", "Science", "Nobel Prize", "Physics", "Raman Effect"]
  },

  // 9. HISTORICAL DATE: OCT 2 (GANDHI & SHASTRI JAYANTI)
  {
    id: "history-gandhi-shastri-jayanti",
    title: "Birth of Two Great Sons of India: Mahatma Gandhi and Lal Bahadur Shastri",
    slug: "birth-of-gandhi-and-lal-bahadur-shastri",
    type: "history",
    category: "Historical Dates",
    shortDescription: "October 2 marks the birth anniversaries of Mahatma Gandhi (1869) and Prime Minister Lal Bahadur Shastri (1904).",
    historicalDate: "10-02",
    historicalMonth: 10,
    historicalDay: 2,
    historicalYear: 1869,
    eventType: "Jayanti",
    associatedPersonality: "Mahatma Gandhi & Lal Bahadur Shastri",
    historicalSignificance: "Celebrated worldwide as the International Day of Non-Violence, honoring Gandhi's philosophy of Ahimsa and Shastri's iconic slogan 'Jai Jawan, Jai Kisan'.",
    sources: "Collected Works of Mahatma Gandhi, Prime Minister's Museum",
    content: `
      <p>October 2 is a day of profound reverence across India. It honors two men who shaped our nation's destiny through utmost simplicity, truth, and moral fortitude.</p>
      <h3>Mahatma Gandhi (Born 1869)</h3>
      <p>Gandhi demonstrated that non-violence (Ahimsa) and truth (Satyagraha) are not passive concepts, but the mightiest moral forces available to humankind.</p>
      <h3>Lal Bahadur Shastri (Born 1904)</h3>
      <p>India's second Prime Minister, Shastriji, steered the nation during the 1965 war and laid the seeds of the Green Revolution and White Revolution with his immortal clarion call: <strong>'Jai Jawan, Jai Kisan'</strong>.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
    author: "National Heritage",
    publishDate: "2026-10-02",
    readTime: "4 min read",
    isFeatured: false,
    isPublished: true,
    tags: ["Gandhi", "Shastri", "Non-Violence", "October 2", "Indian History"]
  },

  // 10. HISTORICAL DATE: AUG 15 (INDEPENDENCE DAY)
  {
    id: "history-aug-15-independence",
    title: "India Awakes to Freedom: The Dawn of an Independent Republic",
    slug: "india-awakes-to-freedom-august-15",
    type: "history",
    category: "Historical Dates",
    shortDescription: "On August 15, 1947, India ended nearly two centuries of British colonial rule, embarking on its journey as the world's largest sovereign democracy.",
    historicalDate: "08-15",
    historicalMonth: 8,
    historicalDay: 15,
    historicalYear: 1947,
    eventType: "Independence",
    associatedPersonality: "Freedom Fighters of India",
    historicalSignificance: "The culmination of a multi-generational freedom struggle, giving birth to a democratic republic of over 1.4 billion people today.",
    sources: "Constituent Assembly Debates, August 1947",
    content: `
      <p>At the stroke of midnight on August 15, 1947, India stepped forth from colonial bondage into sovereign freedom. Pandit Jawaharlal Nehru delivered his celebrated 'Tryst with Destiny' address before the Constituent Assembly.</p>
      <p>This momentous triumph was forged through the selfless sacrifices of countless heroes—from Mangal Pandey, Bhagat Singh, Chandrashekhar Azad, Subhash Chandra Bose to Sardar Vallabhbhai Patel and millions of unsung satyagrahis.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
    author: "National Heritage",
    publishDate: "2026-08-15",
    readTime: "5 min read",
    isFeatured: false,
    isPublished: true,
    tags: ["Independence", "August 15", "Freedom Fighters", "National", "India"]
  },

  // 11. HISTORICAL DATE: JAN 26 (REPUBLIC DAY)
  {
    id: "history-jan-26-republic-day",
    title: "Adoption of the Constitution of India and Birth of the Republic",
    slug: "adoption-of-constitution-and-republic-day",
    type: "history",
    category: "Historical Dates",
    shortDescription: "On January 26, 1950, the Constitution of India came into effect, establishing India as a Sovereign Democratic Republic.",
    historicalDate: "01-26",
    historicalMonth: 1,
    historicalDay: 26,
    historicalYear: 1950,
    eventType: "Milestone",
    associatedPersonality: "Dr. B.R. Ambedkar & Drafting Committee",
    historicalSignificance: "Enactment of the world's longest written constitution, ensuring justice, liberty, equality, and fraternity for all citizens.",
    sources: "Gazette of India, 1950",
    content: `
      <p>January 26, 1950 marks the watershed date when the Constitution of India, drafted under the visionary chairmanship of Dr. B.R. Ambedkar, came into force, replacing the colonial Government of India Act 1935.</p>
      <p>The date was deliberately chosen to honor the 'Purna Swaraj' (Complete Independence) declaration proclaimed by the Indian National Congress in Lahore on January 26, 1930.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1597047084993-bf337e09ede0?auto=format&fit=crop&w=1200&q=80",
    author: "Constitutional Heritage",
    publishDate: "2026-01-26",
    readTime: "4 min read",
    isFeatured: false,
    isPublished: true,
    tags: ["Republic Day", "Constitution", "Ambedkar", "Democracy", "January 26"]
  },

  // 12. ARTICLE: TEMPLE ARCHITECTURE
  {
    id: "article-sacred-geometry-temples",
    title: "Sacred Geometry and the Engineering Marvel of Ancient Indian Temples",
    slug: "sacred-geometry-and-engineering-of-indian-temples",
    type: "article",
    category: "Articles",
    shortDescription: "Exploring the Vastu Purusha Mandala, acoustic brilliance, and timeless stone architecture of Thanjavur, Konark, and Khajuraho.",
    content: `
      <p>Ancient Indian temple architecture is neither merely decorative nor purely devotional; it represents an astonishing synthesis of astronomy, sacred geometry (Vastu Shastra), material science, and metaphysics.</p>
      <p>Every traditional temple is structured as a physical manifestation of the cosmos, with the Garbhagriha (sanctum sanctorum) acting as the energetic center from which all creative forces emanate.</p>
      <h3>The Engineering Feat of Brihadeeswarar Temple</h3>
      <p>Built by Raja Raja Chola I over a thousand years ago in Thanjavur, the temple's 80-tonne granite capstone (Kumbam) was hoisted to the summit of a 216-foot tower without modern cranes, using an ingenious 6-kilometer earthen ramp.</p>
      <h3>Harmony with Planetary Alignments</h3>
      <p>From the Sun Temple at Konark, designed as a colossal chariot where the 24 wheels function as precision sundials, to the acoustic resonance of the musical pillars in Hampi, Indian builders demonstrated mastery over acoustic and mechanical physics.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    author: "Architecture & Arts Desk",
    publishDate: "2026-10-28",
    readTime: "7 min read",
    isFeatured: true,
    isPublished: true,
    tags: ["Architecture", "Heritage", "Temples", "Chola", "Vastu Shastra", "History"]
  },

  // 13. ARTICLE: THE CONCEPT OF TIME IN VEDIC THOUGHT
  {
    id: "article-kala-concept-of-time-vedic",
    title: "Kala: The Cyclical Concept of Cosmic Time in Vedic Philosophy",
    slug: "kala-cyclical-concept-of-cosmic-time",
    type: "article",
    category: "Articles",
    shortDescription: "Unlike linear Western historical frameworks, ancient Indian philosophy conceptualized time as vast cosmic cycles of creation, sustenance, and rejuvenation.",
    content: `
      <p>In modern astrophysics, scientists speak of billions of years, cosmic dilations, and oscillating multiverses. Yet millennia ago, the Surya Siddhanta and Puranas computed cosmic epochs (Yugas and Kalpas) with staggering mathematical scale.</p>
      <p>A single 'Kalpa'—defined as one daytime of Brahma—is calculated as 4.32 billion human solar years, remarkably close to the scientifically estimated age of planet Earth (4.54 billion years).</p>
      <p>This non-linear perspective invites humility: our individual lifetime is a single breath in an eternal cosmic dance of consciousness.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    author: "Philosophy Desk",
    publishDate: "2026-10-25",
    readTime: "6 min read",
    isFeatured: false,
    isPublished: true,
    tags: ["Time", "Cosmology", "Vedanta", "Vedic Science", "Philosophy"]
  },

  // 14. MYTHOLOGY: VIDURA NITI
  {
    id: "mythology-vidura-niti-wisdom",
    title: "Vidura Niti: Timeless Principles of Governance and Personal Integrity",
    slug: "vidura-niti-timeless-principles-of-integrity",
    type: "mythology",
    category: "Mythological Wisdom",
    shortDescription: "Wise counsel imparted by Prime Minister Vidura to King Dhritarashtra on ethics, leadership, friendship, and the perils of ego.",
    scripture: "Mahabharata",
    chapter: "Udyoga Parva",
    verse: "Prajagara Parva, Chapter 33",
    sanskritText: "द्वाविमौ ग्रसते भूमिः सर्पो बिलशयानिव।\nराजानं चाविरोद्धारं ब्राह्मणं चाप्रवासिनम्॥",
    englishTranslation: "Just as a serpent devours mice hiding in holes, even so does the earth swallow up two kinds of individuals: a ruler who does not resist evil, and a scholar who does not share knowledge.",
    explanation: "Vidura, born of great intellect and moral rectitude, offered honest counsel to the blind King Dhritarashtra before the catastrophic Kurukshetra war. He warns that silence in the face of injustice is as destructive as the injustice itself.",
    practicalLesson: "Never compromise your conscience for convenience. A true friend or leader is one who speaks the truth with kindness, even when that truth is uncomfortable to hear.",
    content: `
      <p>Vidura Niti remains one of the greatest treatises on statecraft, ethics, and emotional intelligence in world literature. Unlike Machiavellian politics which justifies unethical means for power, Vidura insists that unrighteous power inevitably collapses from within.</p>
      <h3>Signs of a Truly Wise Person according to Vidura</h3>
      <ul>
        <li>They undertake tasks with careful deliberation and do not abandon them halfway.</li>
        <li>They are neither elated by praise nor demoralized by insult.</li>
        <li>They do not waste words arguing with the obstinate or foolish.</li>
      </ul>
    `,
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    author: "Mahabharata Scholar",
    publishDate: "2026-10-20",
    readTime: "5 min read",
    isFeatured: false,
    isPublished: true,
    tags: ["Mahabharata", "Vidura Niti", "Ethics", "Governance", "Leadership"]
  },

  // 15. DAILY POST: APJ ABDUL KALAM
  {
    id: "daily-apj-abdul-kalam-dreams",
    title: "Dreams That Keep You Awake: Lessons from Dr. APJ Abdul Kalam",
    slug: "dreams-that-keep-you-awake-abdul-kalam",
    type: "daily",
    category: "Daily Inspiration",
    shortDescription: "Remembering the People's President's golden message: A dream is not that which you see while sleeping, it is something that does not let you sleep.",
    quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    quoteAuthor: "Dr. A.P.J. Abdul Kalam",
    supportingThought: "Every hurdle is a teacher. When you face challenges in your professional work or family responsibilities, remember that difficulties come not to destroy you, but to help you realize your hidden potential.",
    content: `
      <p>Dr. APJ Abdul Kalam rose from modest beginnings selling newspapers in the coastal town of Rameswaram to become India's foremost missile pioneer and beloved President. His life was an embodiment of humble simplicity, unyielding scientific curiosity, and patriotic dedication.</p>
      <p>He often advised youth: <em>'If you fail, never give up because F.A.I.L. means First Attempt In Learning. E.N.D. is not the end; in fact, E.N.D. means Effort Never Dies.'</em></p>
    `,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    author: "Editorial Team",
    publishDate: "2026-11-04",
    readTime: "3 min read",
    isFeatured: false,
    isPublished: true,
    tags: ["APJ Abdul Kalam", "Inspiration", "Youth", "Science", "Dreams"]
  }
];

// Local Storage Key
const STORAGE_KEY = "nitya_prerna_content_v1";

const StorageManager = {
  // Initialize storage with starter posts if not present
  init() {
    if (typeof window === "undefined") return;
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_POSTS));
    }
  },

  // Get all posts
  getAll(includeDrafts = false) {
    if (typeof window === "undefined") return INITIAL_POSTS;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_POSTS));
        return INITIAL_POSTS;
      }
      const posts = JSON.parse(raw);
      if (includeDrafts) return posts;
      return posts.filter(p => p.isPublished !== false);
    } catch (e) {
      console.error("Failed to read posts from localStorage", e);
      return INITIAL_POSTS;
    }
  },

  // Get post by ID
  getById(id) {
    const all = this.getAll(true);
    return all.find(p => p.id === id) || null;
  },

  // Get post by slug
  getBySlug(slug) {
    const all = this.getAll(false);
    return all.find(p => p.slug === slug) || null;
  },

  // Get posts by Category
  getByCategory(category) {
    const all = this.getAll(false);
    return all.filter(p => p.category.toLowerCase() === category.toLowerCase());
  },

  // Get posts by Type
  getByType(type) {
    const all = this.getAll(false);
    return all.filter(p => p.type === type);
  },

  // Get content for a specific calendar date (month 1-12, day 1-31) in IST
  getByDate(month, day) {
    const all = this.getAll(false);
    const m = Number(month);
    const d = Number(day);
    return all.filter(p => {
      // Check historical date
      if (p.historicalMonth && p.historicalDay) {
        return Number(p.historicalMonth) === m && Number(p.historicalDay) === d;
      }
      // Check publish date fallback
      if (p.publishDate) {
        const parts = p.publishDate.split("-");
        if (parts.length === 3) {
          return Number(parts[1]) === m && Number(parts[2]) === d;
        }
      }
      return false;
    });
  },

  // Get Today's Highlights (Using Indian Standard Time: Asia/Kolkata)
  getTodaysHighlights() {
    const all = this.getAll(false);
    
    // Compute current date in Indian Standard Time (UTC + 5:30)
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
    const currentMonth = istDate.getMonth() + 1; // 1-12
    const currentDay = istDate.getDate();       // 1-31

    // 1. Today's Inspiration: Find daily post matching today or latest featured daily post
    let inspiration = all.find(p => p.type === "daily" && (
      (p.historicalMonth === currentMonth && p.historicalDay === currentDay) ||
      (p.publishDate && Number(p.publishDate.split("-")[1]) === currentMonth && Number(p.publishDate.split("-")[2]) === currentDay)
    ));
    if (!inspiration) {
      // Fallback to latest featured daily
      inspiration = all.find(p => p.type === "daily" && p.isFeatured) || all.find(p => p.type === "daily");
    }

    // 2. This Day in History: Find historical event matching currentMonth & currentDay
    let history = all.find(p => (p.type === "history" || p.category === "Historical Dates") && 
      p.historicalMonth === currentMonth && p.historicalDay === currentDay
    );
    if (!history) {
      // Fallback to any featured history event
      history = all.find(p => p.type === "history" && p.isFeatured) || all.find(p => p.type === "history");
    }

    // 3. Today's Commemoration: Find commemoration matching currentMonth & currentDay
    let commemoration = all.find(p => p.type === "commemoration" && 
      p.historicalMonth === currentMonth && p.historicalDay === currentDay
    );
    if (!commemoration) {
      // Fallback: check personalities with anniversaries or featured commemoration
      commemoration = all.find(p => p.type === "commemoration") || all.find(p => p.type === "personality" && p.isFeatured);
    }

    return {
      istDateString: istDate.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      currentMonth,
      currentDay,
      inspiration,
      history,
      commemoration
    };
  },

  // Save (Create or Update)
  save(post) {
    if (!post.title || !post.title.trim()) {
      throw new Error("Title is required");
    }
    
    // Auto generate slug if missing
    if (!post.slug) {
      post.slug = post.title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    }

    // Ensure ID
    if (!post.id) {
      post.id = "post-" + Date.now();
    }

    const all = this.getAll(true);
    const existingIndex = all.findIndex(p => p.id === post.id);

    if (existingIndex >= 0) {
      all[existingIndex] = { ...all[existingIndex], ...post, updatedAt: new Date().toISOString() };
    } else {
      post.createdAt = new Date().toISOString();
      all.unshift(post);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return post;
  },

  // Delete
  delete(id) {
    const all = this.getAll(true);
    const filtered = all.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  // Search across all fields
  search(query, categoryFilter = null) {
    if (!query && !categoryFilter) return this.getAll(false);
    const q = (query || "").toLowerCase().trim();
    let results = this.getAll(false);

    if (categoryFilter && categoryFilter !== "All") {
      results = results.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (q) {
      results = results.filter(p => {
        const titleMatch = (p.title || "").toLowerCase().includes(q);
        const descMatch = (p.shortDescription || "").toLowerCase().includes(q);
        const contentMatch = (p.content || "").toLowerCase().includes(q);
        const authorMatch = (p.author || "").toLowerCase().includes(q);
        const quoteMatch = (p.quote || "").toLowerCase().includes(q);
        const sanskritMatch = (p.sanskritText || "").toLowerCase().includes(q);
        const personalityMatch = (p.associatedPersonality || p.fullName || "").toLowerCase().includes(q);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(q));
        return titleMatch || descMatch || contentMatch || authorMatch || quoteMatch || sanskritMatch || personalityMatch || tagMatch;
      });
    }

    return results;
  },

  // Backup / Export
  exportJSON() {
    const all = this.getAll(true);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(all, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `nitya-prerna-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  // Restore / Import
  importJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (!Array.isArray(data)) {
        throw new Error("Invalid file format. Must be an array of posts.");
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      throw new Error("Failed to parse JSON backup file: " + e.message);
    }
  },

  // Reset to default sample posts
  resetToDefaults() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_POSTS));
    return true;
  }
};

// Initialize right away
StorageManager.init();

// Export globally for browser usage
window.StorageManager = StorageManager;
window.INITIAL_POSTS = INITIAL_POSTS;

