-- ============================================================
-- DIALAW FITNESS CENTER — SCHEMA DE BASE DE DONNEES SUPABASE
-- Localisation : Yenne, Sénégal
-- Devise : Francs CFA (FCFA)
-- ============================================================

-- 1. Table des Services & Tarifs
CREATE TABLE IF NOT EXISTS public.services (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    price INT NOT NULL,
    formatted_price TEXT NOT NULL,
    billing TEXT NOT NULL,
    badge TEXT,
    popular BOOLEAN DEFAULT FALSE,
    description TEXT,
    features JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Table du Coach (Coach Matar)
CREATE TABLE IF NOT EXISTS public.coaches (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    specialties JSONB,
    experience TEXT,
    bio TEXT,
    avatar TEXT,
    gallery JSONB,
    rating NUMERIC(2,1) DEFAULT 5.0,
    clients_count INT DEFAULT 180,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Table des Créneaux & Cours Collectifs
CREATE TABLE IF NOT EXISTS public.slots (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    coach_id TEXT REFERENCES public.coaches(id),
    coach_name TEXT NOT NULL,
    day TEXT NOT NULL,
    date DATE NOT NULL,
    time TEXT NOT NULL,
    spots_total INT NOT NULL,
    spots_left INT NOT NULL,
    location TEXT NOT NULL,
    level TEXT DEFAULT 'Tous niveaux',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Table des Réservations de Séances
CREATE TABLE IF NOT EXISTS public.bookings (
    id TEXT PRIMARY KEY,
    slot_id TEXT REFERENCES public.slots(id),
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT,
    title TEXT NOT NULL,
    coach_name TEXT NOT NULL,
    date DATE NOT NULL,
    time TEXT NOT NULL,
    location TEXT NOT NULL,
    amount_paid INT DEFAULT 10000,
    formatted_amount TEXT DEFAULT '10 000 FCFA',
    payment_method TEXT DEFAULT 'Stripe',
    status TEXT DEFAULT 'Confirmée',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. Table des Souscriptions & Abonnements Membres
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id TEXT PRIMARY KEY,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    plan_id TEXT REFERENCES public.services(id),
    plan_name TEXT NOT NULL,
    amount INT NOT NULL,
    formatted_amount TEXT NOT NULL,
    status TEXT DEFAULT 'Actif',
    renews_at DATE NOT NULL,
    payment_method TEXT DEFAULT 'Stripe',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. Table des Transactions Financières
CREATE TABLE IF NOT EXISTS public.transactions (
    id TEXT PRIMARY KEY,
    client_name TEXT NOT NULL,
    plan TEXT NOT NULL,
    amount INT NOT NULL,
    formatted_amount TEXT NOT NULL,
    status TEXT DEFAULT 'Succeeded',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ============================================================
-- INSERTION DES DONNEES INITIALES (COACH MATAR & TARIFS FCFA)
-- ============================================================

-- Insertion de Coach Matar
INSERT INTO public.coaches (id, name, role, specialties, experience, bio, avatar, gallery)
VALUES (
    'coach-matar',
    'Coach Matar',
    'Fondateur & Coach Principal',
    '["Musculation & Force", "Cross-Training & HIIT", "Prépa Physique & Conditioning", "Coaching Privé 1-on-1"]'::jsonb,
    'Expert Certifié — Yenne',
    'Fondateur et coach unique de Dialaw Fitness Center à Yenne.',
    '/images/coach-matar-3.jpg',
    '["/images/coach-matar-3.jpg", "/images/coach-matar-5.jpg"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- Insertion des 3 formules tarifaires en FCFA (E-Strings PostgreSQL pour la sécurité des apostrophes)
INSERT INTO public.services (id, title, price, formatted_price, billing, badge, popular, description, features)
VALUES 
('pass-seance', 'Pass Séance Unique', 10000, '10 000 FCFA', '/ séance', 'Populaire', FALSE, 'Accès ponctuel sans engagement pour un coaching individuel ou un cours collectif avec Coach Matar.', '["Accès à 1 séance au choix", "Accès aux vestiaires & équipements", "Bilan forme rapide (10 min)"]'::jsonb),
('abonne-flex', 'Abonnement Mensuel Flex', 30000, '30 000 FCFA', '/ mois', 'Recommandé', TRUE, 'La formule idéale pour s entraîner en toute liberté avec accès complet aux installations de Dialaw Fitness.', '["Accès illimité aux équipements 7j/7 (08h-22h)", "Cours collectifs animés par Coach Matar", "Sans engagement de durée"]'::jsonb),
('abonne-vip', 'Abonnement VIP Elite', 60000, '60 000 FCFA', '/ mois', 'Exclusif', FALSE, 'Prise en charge à 360 degrés en direct avec Coach Matar pour des résultats rapides et durables.', '["Accès illimité 7j/7 (08h-22h)", "1 séance de Coaching Privé 1-sur-1 par semaine", "Plan nutritionnel sur-mesure"]'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- Activer Row Level Security (RLS) avec politique de lecture publique
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coaches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public read coaches" ON public.coaches FOR SELECT USING (true);
CREATE POLICY "Allow public read slots" ON public.slots FOR SELECT USING (true);
CREATE POLICY "Allow public all bookings" ON public.bookings FOR ALL USING (true);
CREATE POLICY "Allow public all subscriptions" ON public.subscriptions FOR ALL USING (true);
CREATE POLICY "Allow public all transactions" ON public.transactions FOR ALL USING (true);
