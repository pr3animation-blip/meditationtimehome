import type { Service, Testimonial, Book, ArizonaPage, GalleryPhoto } from "@/types/navigation"

export const services: Service[] = [
  {
    name: "1 hour USUI REIKI Session with Victoria",
    slug: "1-hour-session-with-victoria",
    price: "$125",
    duration: "60 min",
    description:
      "I will set the intention on and promoting healing by encouraging a healthy flow of energy. Let me know if there is a specific area you would like addressed as we balance chakras and see how you feel and we can discuss afterwards.",
    longDescription:
      "I will set the intention on and promoting healing by encouraging a healthy flow of energy. Let me know if there is a specific area you would like addressed as we balance chakras and see how you feel and we can discuss afterwards.\n\nReiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is administered by laying on hands and is based on the idea that an unseen life force energy flows through us. A treatment feels like a wonderful glowing radiance that flows through and around you.",
    calendlyUrl: "https://calendly.com/meditationtimehome",
    icon: "reiki",
    imageSrc: "/images/services/reiki-session.webp",
    imageAlt:
      "Hands and healing energy waves representing a Reiki session in Chandler, Arizona",
  },
  {
    name: "1.5 hour Signature Energy Session by Victoria",
    slug: "1-5-hour-signature-energy-session-by-victoria",
    price: "$200",
    duration: "90 min",
    description:
      "3 touch modalities relaxing mind body & soul — leave renewed. Or just pick one for 30 min separately.",
    longDescription:
      "Combines three distinct therapeutic modalities designed to relax mind, body, and soul. Clients leave renewed. Individual modalities available separately for 30 minutes.\n\nBody Rub Session: Therapeutic massage using signature techniques. Beginning at the head, working through shoulders, scalp, face, and pressure points before progressing to arms, legs, and feet.\n\nDermal Session: Having your whole body scratched is one decadent royal experience. Using fingernails across the entire body without leaving physical marks — just traces of emotion. Stimulates the middle skin layer.\n\nFingertip Session: Light, feather-like touches across the skin to soothe the epidermis. Light as a feather moving across your skin. Clients may experience tickling sensations and awakened nerve endings.",
    calendlyUrl: "https://calendly.com/meditationtimehome",
    icon: "energy",
    imageSrc: "/images/services/signature-energy.webp",
    imageAlt:
      "Three-modality signature energy healing session with body rub, dermal, and fingertip techniques",
  },
  {
    name: "45 min Healing Sound Bath by Victoria",
    slug: "45-min-healing-sound-bath-by-victoria",
    price: "$60",
    duration: "45 min",
    description:
      "Let the sounds shift your mind into a relaxed trance-like state. Let the sounds make you lose track of time.",
    longDescription:
      "Let the sounds shift your mind into a relaxed trance-like state. Let the sounds make you lose track of time. The noises and relaxed scents truly can make you forget about everything and focus on none other than yourself in the present moment.\n\nSound healing is an ancient wellness practice that uses vibrations from instruments like crystal singing bowls, chimes, and tuning forks to promote deep relaxation and healing. The therapeutic vibrations help reduce stress, enhance mental clarity, and restore emotional balance.",
    calendlyUrl: "https://calendly.com/meditationtimehome",
    icon: "sound",
    imageSrc: "/images/services/sound-bath.webp",
    imageAlt:
      "Sound bath session with crystal bowl frequencies for deep relaxation",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "I want you to know that your Reiki work is amazing and certainly helped me to feel more whole and complete. Your work in this area is beautiful and empowering. You are such a joy to be with and such a powerful and nurturing soul.",
    author: "C.A.",
    initials: "CA",
  },
  {
    quote:
      "I have noticed that my driving and standing in line at the grocery store anxiety is gone. It took me a couple days for it to sink in that the sound vibrations were deep in my subconscious but I had no anxiety today and I have ALWAYS had issues with that.",
    author: "S.G.",
    initials: "SG",
  },
]

export const books: Book[] = [
  {
    title: "Harmony for TWO",
    subtitle:
      "A guide to deepening your connection through Touch and Sound",
    description:
      "Harmony for Two comes out of me to intentionally share my story of how I have found many clients seeking energy healing modalities to fill a void or lack of nurturing affection in their long term relationships. Explores how self-love and acceptance matter, offering Touch and Sound healing modalities with bodily benefits and ideas for creating a Weekly Togetherness Routine.",
    amazonUrl: "https://www.amazon.com/Harmony-TWO-deepening-connection-through-ebook/dp/B0CRV82F37",
    previewUrl: "#",
    imageSrc: "/images/books/harmony-for-two.webp",
    imageAlt: "Harmony for TWO book cover by Victoria Enriquez",
  },
  {
    title: "Inviting Solitude into your Life",
    subtitle: "Sharing my journey",
    description:
      "Perspectives on solitude during busy modern life. Benefits of becoming more independent, knowing yourself better, and growing self-love through mindfulness incorporation.",
    amazonUrl: "https://a.co/d/0aD7affS",
    previewUrl: "#",
    imageSrc: "/images/books/Inviting-solitude-into-your-life.webp",
    imageAlt: "Inviting Solitude into your Life book cover by Victoria Enriquez",
  },
  {
    title: "Chakras in Real Life",
    subtitle:
      "A Journey Through Energy, Healing & Everyday Magic",
    description:
      "Blends storytelling and spiritual insight, inviting readers into the real lives of everyday people navigating life's struggles through the lens of the chakra system. Features simple tools and reflective practices to help reconnect with your body's wisdom and awaken your own energy centers.",
    amazonUrl: "https://www.amazon.com/Chakras-Real-Life-Journey-Everyday/dp/B0FDB5X3M4",
    previewUrl: "#",
    imageSrc: "/images/books/chakras-in-real-life.webp",
    imageAlt: "Chakras in Real Life book cover by Victoria Enriquez",
  },
  {
    title: "In A World of My Own",
    subtitle:
      "My Memoir My Wonderland",
    description:
      "Victoria Enriquez shares her personal memoir, a journey through her own wonderland of self-discovery, healing, and transformation. An intimate look at the experiences that shaped her path as an energy healer and wellness practitioner.",
    amazonUrl: "https://www.amazon.com/World-My-Own-Memoir-Wonderland-ebook/dp/B0FB8D4WBF?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9._JpUenM_twDqnN6bMVM37cQPWblhLZ7Crm7fYMGnY_ErJZT2l5FqAuC6uWo0JRqx3hmEwthXbzHe9J3eBr0MXglKDw3deMiFAsNo3tSqtIA.mAg9NTyHg7pOGFwQtsjjN8RpdL4c8BdNV0yhh9DdU9k&dib_tag=AUTHOR",
    previewUrl: "#",
    imageSrc: "/images/books/In-a-world-of-my-own.webp",
    imageAlt: "In A World of My Own book cover by Victoria Enriquez",
  },
  {
    title: "Touch",
    subtitle:
      "The benefits of touch and more reasons to care",
    description:
      "Explores the profound impact of human touch on physical and emotional well-being. Victoria shares insights from her practice on why touch matters, its healing benefits, and how nurturing physical connection can transform relationships and self-care.",
    amazonUrl: "https://a.co/d/06ycCt4S",
    previewUrl: "#",
    imageSrc: "/images/books/touch.webp",
    imageAlt: "Touch book cover by Victoria Enriquez",
  },
]

export const servicesAddressed = [
  { title: "Stress Relief", description: "Release tension and find deep relaxation through healing modalities.", icon: "leaf" },
  { title: "Emotional Blockages", description: "Clear emotional barriers that prevent you from living fully.", icon: "heartRemove" },
  { title: "Physical Pain", description: "Promote natural healing and pain relief through energy work.", icon: "healthcare" },
  { title: "Spiritual Connection", description: "Deepen your spiritual awareness and inner knowing.", icon: "sparkles" },
  { title: "Mental Clarity", description: "Quiet the mind and sharpen your focus through meditation.", icon: "brain" },
  { title: "Grief Support", description: "Find comfort and healing during times of loss and transition.", icon: "heartAdd" },
  { title: "Self-Esteem", description: "Build confidence and self-worth through mindful practices.", icon: "star" },
  { title: "Life Transitions", description: "Navigate change with grace, clarity, and inner strength.", icon: "sunrise" },
]

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/new.webp", alt: "Victoria with singing bowls and gong by the pool at sunset" },
  { src: "/images/new images/IMG_4355_converted.webp", alt: "Victoria leading an outdoor sound bath session" },
  { src: "/images/new images/IMG_4252_converted.webp", alt: "Victoria in her studio with crystal singing bowls" },
  { src: "/images/new images/IMG_4853_converted.webp", alt: "Setting up for an in-home sound healing session" },
  { src: "/images/new images/IMG_1164 (1).webp", alt: "Crystal singing bowls arranged for a healing session" },
  { src: "/images/new images/IMG_5355_converted.webp", alt: "Crystal singing bowls on wooden shelf with mallets" },
  { src: "/images/new images/IMG_2766.webp", alt: "Victoria exploring the red rocks of Sedona, Arizona" },
  { src: "/images/new images/IMG_6483_converted.webp", alt: "Horseback riding in the ocean on a sunny day" },
  { src: "/images/new images/IMG_7217_converted.webp", alt: "Victoria in a prayer pose" },
  { src: "/images/new images/IMG_5253_converted.webp", alt: "Victoria portrait with warm golden tones" },
  { src: "/images/new images/IMG_2212.webp", alt: "Victoria at her desk" },
  { src: "/images/new images/bLOG pHOTO.webp", alt: "Ocean deck at sunset" },
  { src: "/images/main.webp", alt: "Victoria Enriquez, energy healer in Chandler, Arizona" },
]

export const arizonaPages: ArizonaPage[] = [
  {
    title: "Anxiety Treatment Centers in Chandler, AZ",
    slug: "anxiety-treatment-in-chandler",
    heading: "Overcome Anxiety with Sound Healing and Meditation",
    description:
      "MEditation TIME offers anxiety treatment through meditation and sound healing practices in Chandler, Arizona. Our approach addresses anxiety's root causes by helping clients calm their mind and foster inner peace through proven holistic techniques.",
    benefits: [
      { title: "Reduced Anxiety Symptoms", description: "Experience a noticeable decrease in anxiety through regular sound healing and meditation sessions." },
      { title: "Calmer Mind", description: "Learn techniques to quiet racing thoughts and find mental peace." },
      { title: "Better Sleep", description: "Improve sleep quality by addressing the root causes of restlessness and worry." },
      { title: "Emotional Balance", description: "Develop resilience and stability to handle life's challenges with grace." },
    ],
  },
  {
    title: "Sound Bath Healing Session in Chandler, AZ",
    slug: "soundbath-session-in-chandler",
    heading: "Enjoy Freedom and Calm with Sound Bath Sessions",
    description:
      "Sound bath experiences are immersive sessions combining ancient wisdom with modern therapeutic techniques. Sessions utilize crystal bowls, chimes, and other instruments to create therapeutic vibrations that promote relaxation and rejuvenation.",
    benefits: [
      { title: "Stress Reduction", description: "Lower cortisol levels and release built-up tension through therapeutic vibrations." },
      { title: "Enhanced Mental Clarity", description: "Clear mental fog and improve focus through deep sound immersion." },
      { title: "Improved Sleep Quality", description: "Experience deeper, more restorative sleep after sound bath sessions." },
      { title: "Emotional Healing", description: "Release emotional blockages and find renewed inner peace." },
    ],
  },
  {
    title: "Reiki Energy Healing Session in Chandler, AZ",
    slug: "reiki-energy-healing-session-in-chandler",
    heading: "Restore Balance with Reiki Energy Healing",
    description:
      "Experience the transformative power of USUI Reiki with Victoria at MEditation TIME in Chandler, Arizona. Reiki promotes healing by encouraging a healthy flow of energy, helping to balance your chakras and restore your body's natural equilibrium.",
    benefits: [
      { title: "Energy Balance", description: "Restore the natural flow of energy throughout your body's chakra system." },
      { title: "Deep Relaxation", description: "Enter a state of profound calm that promotes natural healing." },
      { title: "Pain Relief", description: "Reduce physical discomfort through gentle, non-invasive energy work." },
      { title: "Emotional Release", description: "Process and release stored emotions for greater well-being." },
    ],
  },
  {
    title: "Chakra Healing Meditation in Chandler, AZ",
    slug: "chakra-healing-meditation-in-chandler",
    heading: "Align Your Energy with Chakra Healing Meditation",
    description:
      "Discover the power of chakra healing meditation at MEditation TIME in Chandler, Arizona. Our sessions help you identify and clear energy blockages, restoring balance and harmony to your mind, body, and spirit.",
    benefits: [
      { title: "Chakra Alignment", description: "Balance all seven major energy centers for optimal well-being." },
      { title: "Increased Vitality", description: "Feel more energized and alive as blocked energy is released." },
      { title: "Inner Peace", description: "Achieve a deep sense of calm and centeredness through guided meditation." },
      { title: "Spiritual Growth", description: "Deepen your spiritual practice and connection to your higher self." },
    ],
  },
]
