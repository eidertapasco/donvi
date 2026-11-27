"use client";

import { useActionState } from "react";
import { login } from "@/actions/auth";

export default function LoginPage() {
    const initialState = null;
    const [state, formAction, isPending] = useActionState(login, initialState);

    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
            <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h1 className="mb-6 text-center text-2xl font-bold text-amber-400">
                    Bienvenido a Donvi
                </h1>

                <form action={formAction} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1.5 block text-sm font-medium text-zinc-200"
                        >
                            Correo
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="user@donvi.com"
                            autoComplete="email"
                            required
                            disabled={isPending}
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1.5 block text-sm font-medium text-zinc-200"
                        >
                            Contraseña
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="********"
                            autoComplete="current-password"
                            minLength={8}
                            required
                            disabled={isPending}
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:opacity-50"
                        />
                    </div>

                    {state?.error && (
                        <p
                            role="alert"
                            className="rounded-lg border border-red-800 bg-red-950/50 p-3 text-sm text-red-400"
                        >
                            {state.error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isPending}
                        className="mt-2 w-full cursor-pointer rounded-lg bg-amber-400 px-4 py-2.5 font-bold text-zinc-950 transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
                    </button>
                </form>
            </div>
        </main>
    );
}
