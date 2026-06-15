# VetSaaS Platform

Plataforma SaaS de gestión veterinaria moderna y escalable.

## Stack

- **Frontend**: Next.js 15 App Router · TypeScript · TailwindCSS · shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Estado**: Zustand
- **Tablas**: TanStack Table
- **Formularios**: React Hook Form + Zod
- **Gráficas**: Recharts
- **Calendario**: FullCalendar
- **Exportación**: xlsx + file-saver

## Inicio rápido

```bash
cp .env.example .env.local
# Configurar variables de Supabase en .env.local
npm install
npm run dev
```

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave anónima pública |
| `SUPABASE_SERVICE_ROLE_KEY` | Clave de servicio (solo servidor) |

## Base de datos

Ejecutar `supabase/schema.sql` en el SQL Editor de Supabase.

## Arquitectura

Feature First Architecture — cada módulo en `src/features/<nombre>/` contiene:
`components` · `hooks` · `services` · `types` · `schemas` · `actions` · `constants`

## Fases del MVP

| Fase | Módulo | Estado |
|---|---|---|
| 1 | Autenticación | ✅ |
| 2 | Dashboard | ✅ |
| 3 | Clientes | 🔄 |
| 4 | Mascotas | ⏳ |
| 5 | Agenda de Citas | ⏳ |
| 6 | Historia Clínica | ⏳ |
| 7 | Vacunas | ⏳ |
| 8 | Hospitalización | ⏳ |
| 9 | Inventario | ⏳ |
| 10 | Facturación | ⏳ |
| 11 | Reportes | ⏳ |
| 12 | Usuarios y Permisos | ⏳ |
