import { supabase } from '@/lib/supabase';

// Desactiva la navegación instantánea: esta página consulta datos sin <Suspense> 
// se modificara de ser necesario en un futuro por el momento no porque los datos son minimos
export const instant = false;

export default async function CategoriesPage() {

    const {data, error} = await supabase.from('categories').select('*').order('name', {ascending: true});

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
                    return <li key={category.id}>{category.name}</li>
                })}
            </ol>
        </div>
    );
}   