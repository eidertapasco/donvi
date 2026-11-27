import { createClient } from "@/lib/supabase/server";
import { connection } from "next/server";
import { Suspense } from "react";

export default function CategoriesPage() {
    return (
        <Suspense fallback={<p>Cargando categorías...</p>}>
            <CategoriesContent />
        </Suspense>
    );
}

async function CategoriesContent() {
    await connection();

    const supabaseClient = await createClient();

    const { data, error } = await supabaseClient
        .from("categories")
        .select("*")
        .order("name", { ascending: true });

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                {/*<pre> muestra texto monoespaciado, ideal para errores*/}
                <pre>{error.message}</pre>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div>
                <h1>Categorías</h1>
                <p>No hay categorías o RLS bloqueó la lectura.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Categorías</h1>
            <ol>
                {data.map((category) => {
                    return <li key={category.id}>{category.name}</li>;
                })}
            </ol>
        </div>
    );
}
