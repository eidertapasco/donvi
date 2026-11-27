import { createClient } from "@/lib/supabase/server";
import { connection } from "next/server";
import { logout } from "@/actions/auth";
import { Suspense } from "react";

export default async function PurchasesPage() {
    return (
        <Suspense fallback={<p>Cargando Módulo: Compras...</p>}>
            <PurchasesContent />
        </Suspense>
    );
}

async function PurchasesContent() {
    await connection();

    const supabaseClient = await createClient();
    const {
        data: { user },
    } = await supabaseClient.auth.getUser();

    return (
        <main className="min-h-screen bg-zinc-950 p-4 text-zinc-100 sm:p-8">
            <div className="mx-auto max-w-4xl space-y-6">
                <div className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-bold text-amber-400">
                        Módulo de Compras
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-zinc-400">Usuario</span>
                        <span className="font-medium text-white">
                            {user?.email}
                        </span>
                        <form action={logout}>
                            <button
                                type="submit"
                                className="cursor-pointer rounded-lg border border-red-800 bg-red-950/60 px-3 py-1.5 text-sm font-medium text-red-300 transition-colors hover:bg-red-900/80"
                            >
                                Cerrar sesión
                            </button>
                        </form>
                    </div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                    <p className="text-zinc-300">
                        Sesión iniciada correctamente. Aquí irá el registro de
                        compras de Donvi.
                    </p>
                </div>
            </div>
        </main>
    );
}
