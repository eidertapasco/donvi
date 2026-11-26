import { login } from "@/actions/auth";

export default function LoginPage(){
    return (
        <main className="bg-zinc-950 min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-zinc-900 rounded-xl border border-zinc-800 p-6">
                <h1 className="text-2xl font-bold text-amber-400 mb-6 text-center">Bienvenido a Donvi</h1>

                <form action={login} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-200 mb-1.5">Correo</label>
                        <input
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="user@donvi.com"
                            autoComplete="email" required
                            className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-200 mb-1.5">Contraseña</label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder="********"
                            autoComplete="current-password" 
                            minLength={8} 
                            required
                            className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                    
                    <button type="submit" className="w-full py-2.5 px-4 bg-amber-400 text-zinc-950 font-bold rounded-lg mt-2 hover:bg-amber-300 transition-color cursor-pointer">Iniciar Sesión</button>
                </form>
            </div>
        </main>
    );
}