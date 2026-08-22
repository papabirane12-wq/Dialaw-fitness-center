export const MOCK_SERVICES = [
  {
    id: 'pass-seance',
    title: 'Pass Séance Unique',
    price: 10000,
    formattedPrice: '10 000 FCFA',
    billing: '/ séance',
    badge: 'Populaire',
    popular: false,
    description: 'Accès ponctuel sans engagement pour un coaching individuel ou un cours collectif au choix avec Coach Matar.',
    features: [
      'Accès à 1 séance au choix avec Coach Matar',
      'Accès aux vestiaires & équipements de la salle',
      'Bilan forme rapide (10 min)',
      'Valable 30 jours après achat'
    ],
    cta: 'Réserver une séance'
  },
  {
    id: 'abonne-flex',
    title: 'Abonnement Mensuel Flex',
    price: 30000,
    formattedPrice: '30 000 FCFA',
    billing: '/ mois',
    badge: 'Recommandé',
    popular: true,
    description: 'La formule idéale pour s\'entraîner en toute liberté avec accès complet aux installations de Dialaw Fitness.',
    features: [
      'Accès illimité aux équipements 7j/7 (08h-22h)',
      'Cours collectifs animés par Coach Matar',
      'Application Espace Client & Suivi',
      'Sans engagement de durée (résiliation 1 clic)',
      'Suivi de progression'
    ],
    cta: 'Souscrire l\'abonnement'
  },
  {
    id: 'abonne-vip',
    title: 'Abonnement VIP Elite',
    price: 60000,
    formattedPrice: '60 000 FCFA',
    billing: '/ mois',
    badge: 'Exclusif',
    popular: false,
    description: 'Prise en charge à 360° en direct avec Coach Matar pour des résultats rapides et durables.',
    features: [
      'Accès illimité 7j/7 (08h-22h)',
      '1 séance de Coaching Privé 1-sur-1 par semaine avec Matar',
      'Plan nutritionnel sur-mesure mis à jour mensuellement',
      'Analyse corporelle InBody toutes les 2 semaines',
      'Accès prioritaire à toutes les sessions',
      'Garantie satisfaction sous 14 jours'
    ],
    cta: 'Devenir membre VIP'
  }
];

export const MOCK_COACHES = [
  {
    id: 'coach-matar',
    name: 'Coach Matar',
    role: 'Fondateur & Coach Principal',
    specialties: ['Musculation & Force', 'Cross-Training & HIIT', 'Prépa Physique & Conditioning', 'Coaching Privé 1-on-1'],
    experience: 'Expert Certifié — Yenne',
    bio: 'Fondateur et coach unique de Dialaw Fitness Center à Yenne. Matar combine rigueur athlétique, préparation physique et motivation constante pour vous guider vers vos objectifs.',
    avatar: '/images/coach-matar-1.jpg',
    gallery: [
      '/images/coach-matar-1.jpg',
      '/images/coach-matar-3.jpg',
      '/images/coach-matar-4.jpg',
      '/images/coach-matar-5.jpg',
      '/images/coach-matar-2.jpg'
    ],
    rating: 5.0,
    clientsCount: 180
  }
];

export const MOCK_CATEGORIES = [
  { id: 'coaching-prive', name: 'Coaching Personnalisé (1-on-1)', icon: 'UserCheck' },
  { id: 'cross-training', name: 'Cross-Training & HIIT', icon: 'Flame' },
  { id: 'boxe-cardio', name: 'Prépa Physique & Boxe', icon: 'Target' },
  { id: 'muscu-libre', name: 'Accès Libre Musculation', icon: 'Dumbbell' }
];

export const MOCK_SLOTS = [
  {
    id: 'slot-101',
    category: 'coaching-prive',
    title: 'Coaching Musculation & Force Privé',
    coachId: 'coach-matar',
    coachName: 'Coach Matar',
    day: 'Lundi',
    date: '2026-08-24',
    time: '09:00 - 10:00',
    spotsTotal: 1,
    spotsLeft: 1,
    location: 'Plateau Haltérophilie Dialaw Fitness',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-102',
    category: 'cross-training',
    title: 'Cross-Training & HIIT Extreme',
    coachId: 'coach-matar',
    coachName: 'Coach Matar',
    day: 'Lundi',
    date: '2026-08-24',
    time: '17:30 - 18:30',
    spotsTotal: 12,
    spotsLeft: 3,
    location: 'Zone Cross-Training',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-103',
    category: 'boxe-cardio',
    title: 'Conditionnement & Cardio Plage / Extérieur',
    coachId: 'coach-matar',
    coachName: 'Coach Matar',
    day: 'Mardi',
    date: '2026-08-25',
    time: '08:30 - 09:30',
    spotsTotal: 10,
    spotsLeft: 4,
    location: 'Zone Extérieure & Plage de Yenne',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-104',
    category: 'coaching-prive',
    title: 'Coaching Bilan & Recomposition Corporelle',
    coachId: 'coach-matar',
    coachName: 'Coach Matar',
    day: 'Mercredi',
    date: '2026-08-26',
    time: '15:00 - 16:00',
    spotsTotal: 1,
    spotsLeft: 1,
    location: 'Salle Dialaw Fitness Yenne',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-105',
    category: 'cross-training',
    title: 'Renforcement Musculaire & Power WOD',
    coachId: 'coach-matar',
    coachName: 'Coach Matar',
    day: 'Jeudi',
    date: '2026-08-27',
    time: '18:00 - 19:00',
    spotsTotal: 12,
    spotsLeft: 2,
    location: 'Studio Principal',
    level: 'Tous niveaux'
  }
];

export const MOCK_CLIENT_PROFILE = {
  id: 'usr-8821',
  name: 'Alex Dupont',
  email: 'alex.dupont@email.fr',
  phone: '+221 77 123 45 67',
  role: 'client',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
  membership: {
    planName: 'Abonnement VIP Elite',
    status: 'Actif',
    renewsAt: '2026-09-15',
    price: 60000,
    formattedPrice: '60 000 FCFA',
    sessionsRemainingThisWeek: 1
  },
  upcomingBookings: [
    {
      id: 'bkg-901',
      title: 'Coaching Musculation & Force Privé',
      coachName: 'Coach Matar',
      date: '2026-08-24',
      time: '09:00 - 10:00',
      location: 'Plateau Haltérophilie Dialaw Fitness',
      status: 'Confirmée'
    },
    {
      id: 'bkg-902',
      title: 'Conditionnement & Cardio Plage',
      coachName: 'Coach Matar',
      date: '2026-08-25',
      time: '08:30 - 09:30',
      location: 'Zone Extérieure & Plage de Yenne',
      status: 'Confirmée'
    }
  ],
  activeProgram: {
    title: 'Programme Force & Recomposition (Semaine 3/6)',
    coach: 'Coach Matar',
    objective: 'Gain de masse sèche & puissance athlétique',
    progressPercent: 65,
    days: [
      {
        dayTitle: 'Jour 1 — Pecs / Triceps & Épaules',
        completed: true,
        exercises: [
          { name: 'Développé Couché à la barre', sets: '4 séries', reps: '8-10 reps @ 80kg', note: 'Consignes de Matar : Repos 90s' },
          { name: 'Développé Incliné Halteres', sets: '3 séries', reps: '10-12 reps @ 26kg', note: 'Focus sur l\'étirement' },
          { name: 'Dips lestés', sets: '3 séries', reps: '10 reps @ +10kg', note: 'Buste légèrement penché' },
          { name: 'Élévations Latérales Poulie', sets: '4 séries', reps: '15 reps @ 12kg', note: 'Contrôle à la descente' }
        ]
      },
      {
        dayTitle: 'Jour 2 — Dos / Biceps & Gainage',
        completed: true,
        exercises: [
          { name: 'Traction Prise Neutre Lestée', sets: '4 séries', reps: '6-8 reps @ +12kg', note: 'Menton au-dessus de la barre' },
          { name: 'Rowing Barre buste penché', sets: '4 séries', reps: '8-10 reps @ 70kg', note: 'Garder le dos plat' },
          { name: 'Tirage Vertical Prise Large', sets: '3 séries', reps: '12 reps @ 65kg', note: 'Contraction maximale' },
          { name: 'Curl Halteres Incliné', sets: '3 séries', reps: '12 reps @ 14kg', note: 'Rotation complète du poignet' }
        ]
      },
      {
        dayTitle: 'Jour 3 — Jambes / Ischios & Mollets',
        completed: false,
        exercises: [
          { name: 'Squat Arrière (Back Squat)', sets: '4 séries', reps: '8 reps @ 110kg', note: 'Profondeur sous la parallèle' },
          { name: 'Soulevé de Terre Jambes Tendues', sets: '3 séries', reps: '10 reps @ 90kg', note: 'Sentir l\'étirement des ischios' },
          { name: 'Presse à Cuisses', sets: '3 séries', reps: '12 reps @ 200kg', note: 'Pieds écartement largeur d\'épaules' }
        ]
      }
    ]
  },
  metrics: {
    startWeight: 84.5,
    currentWeight: 79.8,
    targetWeight: 78.0,
    bodyFatPercent: 14.2,
    muscleMassKg: 42.1,
    workoutStreakDays: 14,
    history: [
      { date: '15 Juin', weight: 84.5, fat: 17.5 },
      { date: '01 Juil', weight: 83.1, fat: 16.2 },
      { date: '15 Juil', weight: 81.8, fat: 15.4 },
      { date: '01 Août', weight: 80.5, fat: 14.8 },
      { date: '15 Août', weight: 79.8, fat: 14.2 }
    ]
  },
  invoices: [
    {
      id: 'INV-2026-0801',
      date: '01/08/2026',
      description: 'Abonnement VIP Elite — Mois d\'Août 2026',
      amount: 60000,
      formattedAmount: '60 000 FCFA',
      status: 'Payée',
      paymentMethod: 'Stripe (Visa **** 4242)'
    },
    {
      id: 'INV-2026-0701',
      date: '01/07/2026',
      description: 'Abonnement VIP Elite — Mois de Juillet 2026',
      amount: 60000,
      formattedAmount: '60 000 FCFA',
      status: 'Payée',
      paymentMethod: 'Stripe (Visa **** 4242)'
    },
    {
      id: 'INV-2026-0615',
      date: '15/06/2026',
      description: 'Pass Séance Coaching Privé avec Matar',
      amount: 10000,
      formattedAmount: '10 000 FCFA',
      status: 'Payée',
      paymentMethod: 'Stripe (Mastercard **** 8812)'
    }
  ]
};

export const MOCK_ADMIN_STATS = {
  totalRevenueMonthly: 8450000,
  formattedTotalRevenue: '8 450 000 FCFA',
  growthRatePercent: 18.4,
  activeMembers: 248,
  occupancyRate: 92,
  completedSessionsThisMonth: 382,
  recentTransactions: [
    { id: 'tx-501', clientName: 'Julie Martin', plan: 'Abonnement Flex', amount: 30000, formattedAmount: '30 000 FCFA', date: '2026-08-19 09:14', status: 'Succeeded' },
    { id: 'tx-502', clientName: 'Alex Dupont', plan: 'Abonnement VIP Elite', amount: 60000, formattedAmount: '60 000 FCFA', date: '2026-08-18 16:45', status: 'Succeeded' },
    { id: 'tx-503', clientName: 'Karim Ndiaye', plan: 'Pass Séance', amount: 10000, formattedAmount: '10 000 FCFA', date: '2026-08-18 11:20', status: 'Succeeded' },
    { id: 'tx-504', clientName: 'Sophie Bernard', plan: 'Abonnement Flex', amount: 30000, formattedAmount: '30 000 FCFA', date: '2026-08-17 14:10', status: 'Succeeded' },
    { id: 'tx-505', clientName: 'David Moreau', plan: 'Pass Séance', amount: 10000, formattedAmount: '10 000 FCFA', date: '2026-08-17 08:30', status: 'Refunded' }
  ],
  membersList: [
    { id: 'usr-1', name: 'Alex Dupont', email: 'alex.dupont@email.fr', plan: 'VIP Elite', status: 'Actif', coachAssigned: 'Coach Matar', joinedDate: '15/06/2026' },
    { id: 'usr-2', name: 'Julie Martin', email: 'julie.m@email.fr', plan: 'Flex', status: 'Actif', coachAssigned: 'Coach Matar', joinedDate: '02/07/2026' },
    { id: 'usr-3', name: 'Karim Ndiaye', email: 'k.ndiaye@gmail.com', plan: 'Pass Séance', status: 'Occasionnel', coachAssigned: 'Coach Matar', joinedDate: '10/08/2026' },
    { id: 'usr-4', name: 'Sophie Bernard', email: 'sophie.b@outook.com', plan: 'Flex', status: 'Actif', coachAssigned: 'Coach Matar', joinedDate: '20/05/2026' },
    { id: 'usr-5', name: 'Lucas Petit', email: 'l.petit@yahoo.fr', plan: 'VIP Elite', status: 'Actif', coachAssigned: 'Coach Matar', joinedDate: '11/04/2026' }
  ]
};

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Émilie R.',
    role: 'Membre VIP Elite à Yenne',
    quote: 'J\'ai perdu 12 kg tout en gagnant en masse musculaire grâce aux conseils et à la rigueur de Coach Matar. L\'ambiance à la salle de Yenne est formidable !',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    result: '-12kg avec Coach Matar'
  },
  {
    id: 2,
    name: 'Romain B.',
    role: 'Adepte du Cross-Training',
    quote: 'Les séances de HIIT et de préparation physique avec Matar sont exceptionnelles. On se dépense à fond dans un cadre unique.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    result: '+15% d\'endurance'
  },
  {
    id: 3,
    name: 'Clara M.',
    role: 'Membre Abonnement Flex',
    quote: 'Coach Matar m\'a permis d\'éliminer mes maux de dos et de retrouver une super condition physique. La salle Dialaw Fitness est très bien équipée.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    result: 'Forme & posture retrouvées'
  }
];

export const MOCK_FAQS = [
  {
    question: 'Qui assure les coachings à Dialaw Fitness Center Yenne ?',
    answer: 'Coach Matar est le fondateur et coach principal unique de la salle. Il assure personnellement l\'ensemble des séances de coaching individuel, des bilans de forme et des cours collectifs.'
  },
  {
    question: 'Quels sont les horaires d\'ouverture de Dialaw Fitness Center à Yenne ?',
    answer: 'La salle est ouverte 7j/7 de 08h00 à 22h00. Coach Matar vous accueille et vous encadre tout au long de la journée.'
  },
  {
    question: 'Où se situe le centre et comment réserver ?',
    answer: 'Dialaw Fitness Center est situé à Yenne (Sénégal). Vous pouvez réserver votre séance directement sur ce site ou contacter Coach Matar par téléphone au +221 77 060 47 07.'
  },
  {
    question: 'Est-il possible de résilier l\'abonnement mensuel ?',
    answer: 'Absolument. Nos abonnements sont sans engagement. La résiliation s\'effectue en un clic depuis votre espace membre sans préavis.'
  }
];
