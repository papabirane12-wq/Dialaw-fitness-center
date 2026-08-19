export const MOCK_SERVICES = [
  {
    id: 'pass-seance',
    title: 'Pass Séance Unique',
    price: 10000,
    formattedPrice: '10 000 FCFA',
    billing: '/ séance',
    badge: 'Populaire',
    popular: false,
    description: 'Accès ponctuel sans engagement pour un coaching individuel ou un cours collectif au choix.',
    features: [
      'Accès à 1 séance au choix (Coaching ou Cours)',
      'Accès aux vestiaires & douches',
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
    description: 'La formule idéale pour s\'entraîner en toute liberté avec accès complet aux installations.',
    features: [
      'Accès illimité aux équipements 7j/7 (08h-22h)',
      '2 cours collectifs inclus par semaine',
      'Application Espace Client & Suivi',
      'Sans engagement de durée (résiliation 1 clic)',
      'Serviette & Boissons incluses'
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
    description: 'Prise en charge à 360° avec votre coach dédié pour des résultats optimaux et rapides.',
    features: [
      'Accès illimité 7j/7 (08h-22h)',
      '1 séance de Coaching Privé 1-sur-1 par semaine',
      'Plan nutritionnel sur-mesure mis à jour mensuellement',
      'Analyse corporelle InBody toutes les 2 semaines',
      'Accès prioritaire à tous les cours collectifs',
      'Garantie satisfaction sous 14 jours'
    ],
    cta: 'Devenir membre VIP'
  }
];

export const MOCK_COACHES = [
  {
    id: 'coach-marc',
    name: 'Marc Diallo',
    role: 'Fondateur & Head Coach',
    specialties: ['Musculation & Force', 'Hypertrophie', 'Recomposition Corporelle'],
    experience: '10 ans d\'expérience',
    bio: 'Ancien athlète de haut niveau, Marc a fondé Dialaw Fitness Center avec la vision d\'offrir un accompagnement scientifique et sur-mesure.',
    avatar: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&auto=format&fit=crop&q=80',
    rating: 4.9,
    clientsCount: 85
  },
  {
    id: 'coach-sarah',
    name: 'Sarah Benali',
    role: 'Coach Yoga & Mobilité',
    specialties: ['Vinyasa Yoga', 'Pilates', 'Stretching & Posture'],
    experience: '7 ans d\'expérience',
    bio: 'Spécialiste de la santé articulaire et de la gestion du stress par le mouvement conscient et la respiration.',
    avatar: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&auto=format&fit=crop&q=80',
    rating: 5.0,
    clientsCount: 62
  },
  {
    id: 'coach-thomas',
    name: 'Thomas Leroy',
    role: 'Coach Cross-Training & HIIT',
    specialties: ['Cross-Training', 'Cardio Brûle-Graisse', 'Conditionnement Physique'],
    experience: '6 ans d\'expérience',
    bio: 'Passionné d\'entraînement haute intensité, Thomas vous pousse à dépasser vos limites dans une ambiance électrisante.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    rating: 4.85,
    clientsCount: 74
  },
  {
    id: 'coach-amadou',
    name: 'Amadou Sow',
    role: 'Coach Boxe & Prépa Physique',
    specialties: ['Boxe Anglaise', 'Reflexes & Agilité', 'Renforcement Spécifique'],
    experience: '8 ans d\'expérience',
    bio: 'Combattant chevronné, Amadou combine techniques de combat et préparation physique moderne pour sculpter votre mental et votre corps.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    rating: 4.95,
    clientsCount: 50
  }
];

export const MOCK_CATEGORIES = [
  { id: 'coaching-prive', name: 'Coaching Personnalisé (1-on-1)', icon: 'UserCheck' },
  { id: 'cross-training', name: 'Cross-Training & HIIT', icon: 'Flame' },
  { id: 'yoga-pilates', name: 'Yoga & Pilates', icon: 'Heart' },
  { id: 'boxe-cardio', name: 'Boxe & Conditionnement', icon: 'Target' },
  { id: 'muscu-libre', name: 'Accès Libre Musculation', icon: 'Dumbbell' }
];

export const MOCK_SLOTS = [
  {
    id: 'slot-101',
    category: 'coaching-prive',
    title: 'Coaching Musculation Personnalisé',
    coachId: 'coach-marc',
    coachName: 'Marc Diallo',
    day: 'Lundi',
    date: '2026-08-24',
    time: '09:00 - 10:00',
    spotsTotal: 1,
    spotsLeft: 1,
    location: 'Plateau Haltérophilie',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-102',
    category: 'cross-training',
    title: 'HIIT Extreme & Cardio Blast',
    coachId: 'coach-thomas',
    coachName: 'Thomas Leroy',
    day: 'Lundi',
    date: '2026-08-24',
    time: '12:30 - 13:15',
    spotsTotal: 12,
    spotsLeft: 3,
    location: 'Zone Cross-Training',
    level: 'Intermédiaire'
  },
  {
    id: 'slot-103',
    category: 'yoga-pilates',
    title: 'Vinyasa Flow & Mobilité',
    coachId: 'coach-sarah',
    coachName: 'Sarah Benali',
    day: 'Lundi',
    date: '2026-08-24',
    time: '18:00 - 19:00',
    spotsTotal: 15,
    spotsLeft: 5,
    location: 'Studio Zen',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-104',
    category: 'boxe-cardio',
    title: 'Boxing Fit & Sparring Condition',
    coachId: 'coach-amadou',
    coachName: 'Amadou Sow',
    day: 'Mardi',
    date: '2026-08-25',
    time: '19:00 - 20:00',
    spotsTotal: 10,
    spotsLeft: 2,
    location: 'Ring & Sacs de frappe',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-105',
    category: 'coaching-prive',
    title: 'Coaching Bilan & Recomposition',
    coachId: 'coach-marc',
    coachName: 'Marc Diallo',
    day: 'Mercredi',
    date: '2026-08-26',
    time: '14:00 - 15:00',
    spotsTotal: 1,
    spotsLeft: 1,
    location: 'Cabine Bilan InBody',
    level: 'Tous niveaux'
  },
  {
    id: 'slot-106',
    category: 'cross-training',
    title: 'WOD Power & Endurance',
    coachId: 'coach-thomas',
    coachName: 'Thomas Leroy',
    day: 'Jeudi',
    date: '2026-08-27',
    time: '18:30 - 19:30',
    spotsTotal: 12,
    spotsLeft: 4,
    location: 'Zone Cross-Training',
    level: 'Avancé'
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
      title: 'Coaching Musculation Personnalisé',
      coachName: 'Marc Diallo',
      date: '2026-08-24',
      time: '09:00 - 10:00',
      location: 'Plateau Haltérophilie',
      status: 'Confirmée'
    },
    {
      id: 'bkg-902',
      title: 'Vinyasa Flow & Mobilité',
      coachName: 'Sarah Benali',
      date: '2026-08-28',
      time: '18:00 - 19:00',
      location: 'Studio Zen',
      status: 'Confirmée'
    }
  ],
  activeProgram: {
    title: 'Programme Hypertrophie & Recomposition (Semaine 3/6)',
    coach: 'Marc Diallo',
    objective: 'Gain de masse sèche & gain de force athlétique',
    progressPercent: 65,
    days: [
      {
        dayTitle: 'Jour 1 — Pecs / Triceps & Épaules',
        completed: true,
        exercises: [
          { name: 'Développé Couché à la barre', sets: '4 séries', reps: '8-10 reps @ 80kg', note: 'Repos 90s entre les séries' },
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
      description: 'Pass Séance d\'Essai Coaching Privé',
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
    { id: 'usr-1', name: 'Alex Dupont', email: 'alex.dupont@email.fr', plan: 'VIP Elite', status: 'Actif', coachAssigned: 'Marc Diallo', joinedDate: '15/06/2026' },
    { id: 'usr-2', name: 'Julie Martin', email: 'julie.m@email.fr', plan: 'Flex', status: 'Actif', coachAssigned: 'Sarah Benali', joinedDate: '02/07/2026' },
    { id: 'usr-3', name: 'Karim Ndiaye', email: 'k.ndiaye@gmail.com', plan: 'Pass Séance', status: 'Occasionnel', coachAssigned: 'Amadou Sow', joinedDate: '10/08/2026' },
    { id: 'usr-4', name: 'Sophie Bernard', email: 'sophie.b@outook.com', plan: 'Flex', status: 'Actif', coachAssigned: 'Thomas Leroy', joinedDate: '20/05/2026' },
    { id: 'usr-5', name: 'Lucas Petit', email: 'l.petit@yahoo.fr', plan: 'VIP Elite', status: 'Actif', coachAssigned: 'Marc Diallo', joinedDate: '11/04/2026' }
  ]
};

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Émilie R.',
    role: 'Membre VIP Elite depuis 8 mois',
    quote: 'J\'ai perdu 12 kg tout en gagnant en masse musculaire grâce au programme de Marc. L\'ambiance au club est chaleureuse et les équipements sont au top !',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    result: '-12kg en 8 mois'
  },
  {
    id: 2,
    name: 'Romain B.',
    role: 'Adepte du Cross-Training',
    quote: 'Les cours de HIIT avec Thomas sont incroyables. On se dépense à fond dans un cadre motivant. Le système de réservation en ligne est hyper simple.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    result: '+15% d\'endurance'
  },
  {
    id: 3,
    name: 'Clara M.',
    role: 'Membre Abonnement Flex',
    quote: 'Les cours de Yoga de Sarah m\'ont permis d\'éliminer le mal de dos lié au travail de bureau. Espace ultra propre et équipe au petit soin.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    stars: 5,
    result: 'Posture rétablie'
  }
];

export const MOCK_FAQS = [
  {
    question: 'Quels sont les horaires d\'ouverture de Dialaw Fitness Center à Yenne ?',
    answer: 'La salle est accessible 7j/7 de 08h00 à 22h00. L\'encadrement par nos coachs est assuré tout au long de la journée pour vos séances individuelles et cours collectifs.'
  },
  {
    question: 'Où se situe le centre et comment réserver ?',
    answer: 'Dialaw Fitness Center est situé à Yenne (Sénégal). Vous pouvez réserver votre séance directement sur ce site ou contacter notre équipe par téléphone au +221 77 060 47 07.'
  },
  {
    question: 'Puis-je modifier ou annuler une réservation ?',
    answer: 'Oui ! Depuis votre Espace Client, vous pouvez annuler ou reporter un créneau sans aucun frais jusqu\'à 4 heures avant le début de la séance.'
  },
  {
    question: 'Est-il possible de résilier l\'abonnement mensuel ?',
    answer: 'Absolument. Nos abonnements sont sans engagement. La résiliation s\'effectue en un clic depuis votre espace membre sans préavis.'
  }
];
