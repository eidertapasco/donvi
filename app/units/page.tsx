import { createClient } from "@/lib/supabase/server";
import { connection } from "next/server";

export default async function UnitsPage() {

    await connection();

    const supabaseClient = await createClient();
    const {data, error} = await supabaseClient
    .from('units')
    .select('*')
    .order('sort_order', {ascending: true});

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                {/*pre> muestra texto monoespaciado, ideal para errores*/}
                <pre>{error.message}</pre>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div>
                <h1>Unidades de Medida</h1>
                <p>No hay Unidades de Medida o RLS bloqueó la lectura.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Unidades de Medida</h1>
            <ol>
                {data.map((unit) => {
                    return <li key={unit.id}>{unit.code}</li>
                })}
            </ol>
        </div>
    );
}