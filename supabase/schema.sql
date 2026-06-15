-- ============================================================
-- VetSaaS Platform — Supabase Schema
-- ============================================================

-- Profiles (linked to Supabase Auth)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  clinic_id UUID NOT NULL,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  rol TEXT NOT NULL CHECK (rol IN ('admin', 'veterinario', 'recepcionista', 'auxiliar')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Clients (pet owners)
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  nombre TEXT NOT NULL,
  documento TEXT,
  telefono TEXT,
  email TEXT,
  direccion TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pets
CREATE TABLE pets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  owner_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  especie TEXT NOT NULL,
  raza TEXT,
  sexo TEXT CHECK (sexo IN ('macho', 'hembra')),
  color TEXT,
  peso NUMERIC(5,2),
  fecha_nacimiento DATE,
  microchip TEXT,
  foto TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Appointments
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  veterinarian_id UUID NOT NULL REFERENCES profiles(id),
  fecha_hora TIMESTAMPTZ NOT NULL,
  motivo TEXT NOT NULL,
  estado TEXT NOT NULL DEFAULT 'pendiente'
    CHECK (estado IN ('pendiente', 'confirmada', 'atendida', 'cancelada')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Medical Records
CREATE TABLE medical_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  veterinarian_id UUID NOT NULL REFERENCES profiles(id),
  fecha DATE NOT NULL,
  motivo_consulta TEXT NOT NULL,
  sintomas TEXT,
  diagnostico TEXT,
  tratamiento TEXT,
  observaciones TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Medical Record Attachments
CREATE TABLE medical_record_attachments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  record_id UUID NOT NULL REFERENCES medical_records(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  url TEXT NOT NULL,
  tipo TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Vaccines
CREATE TABLE vaccines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  fecha_aplicacion DATE NOT NULL,
  proxima_aplicacion DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hospitalizations
CREATE TABLE hospitalizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  fecha_ingreso TIMESTAMPTZ NOT NULL,
  estado TEXT NOT NULL DEFAULT 'activa'
    CHECK (estado IN ('activa', 'alta', 'fallecido')),
  observaciones TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hospitalization Daily Evolutions
CREATE TABLE hospitalization_evolutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hospitalization_id UUID NOT NULL REFERENCES hospitalizations(id) ON DELETE CASCADE,
  fecha DATE NOT NULL,
  descripcion TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inventory
CREATE TABLE inventory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  nombre TEXT NOT NULL,
  categoria TEXT,
  stock INTEGER NOT NULL DEFAULT 0,
  precio NUMERIC(12,2),
  fecha_vencimiento DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Invoices
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_id UUID NOT NULL,
  owner_id UUID NOT NULL REFERENCES clients(id),
  total NUMERIC(12,2) NOT NULL,
  fecha DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Invoice Items
CREATE TABLE invoice_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  descripcion TEXT NOT NULL,
  cantidad INTEGER NOT NULL DEFAULT 1,
  precio_unitario NUMERIC(12,2) NOT NULL
);

-- ============================================================
-- Row Level Security
-- ============================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_record_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE vaccines ENABLE ROW LEVEL SECURITY;
ALTER TABLE hospitalizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE hospitalization_evolutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies (users can only access their clinic's data)
CREATE POLICY "clinic_isolation" ON clients
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "clinic_isolation" ON pets
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "clinic_isolation" ON appointments
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "clinic_isolation" ON medical_records
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "clinic_isolation" ON vaccines
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "clinic_isolation" ON hospitalizations
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "clinic_isolation" ON inventory
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "clinic_isolation" ON invoices
  USING (clinic_id = (SELECT clinic_id FROM profiles WHERE id = auth.uid()));
