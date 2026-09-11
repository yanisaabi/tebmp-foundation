CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(btrim(name)) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(btrim(phone)) BETWEEN 9 AND 20),
  email text NOT NULL CHECK (char_length(btrim(email)) BETWEEN 3 AND 255),
  project_type text NOT NULL CHECK (project_type IN ('Gros œuvre', 'Génie civil', 'Rénovation/entretien', 'Autre')),
  message text NOT NULL CHECK (char_length(btrim(message)) BETWEEN 10 AND 1500),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.contact_submissions IS 'Demandes envoyées depuis le formulaire de contact public TEBMP';