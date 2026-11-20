export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-black px-6 py-20 text-zinc-50">
      <section className="w-full max-w-3xl text-center">
        <p className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
          Estamos en desarrollo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Bienvenido a Donvi
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          Estamos construyendo una forma más sencilla de organizar las compras,
          los insumos y los costos de producción de cualquier negocio.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-8 text-zinc-200 sm:text-xl">
          Tenemos un sueño grande: hacer de Donvi la empresa de comidas rápidas
          más grande de Colombia.
        </p>
        <p className="mt-4 text-zinc-500">
          Hoy empezamos construyendo las bases.
        </p>
        <p className="mt-12 text-sm text-zinc-600">
          Pijao, Quindío, Colombia
        </p>
        <p className="mt-2 text-xs text-zinc-600">
          © 2026 Donvi. Todos los derechos reservados.
        </p>
      </section>
    </main>
  );
}
