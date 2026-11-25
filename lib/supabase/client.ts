//Crea un cliente para el navegador: lo ayuda a gestionar operaciones en
// tiempo real despues de que la pagina ya cargo(cargar mas datos, login, etc.)
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}