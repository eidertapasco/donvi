"use server"

import { createClient } from '@/lib/supabase/server';
import { redirect, RedirectType } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const schema = z.object({
    email: z
        .email({ error: 'Correo inválido' }),

    password: z
        .string({ error: 'Contraseña inválida'})
        .min(8, { error: 'La contraseña debe tener al menos 8 caracteres'})
});

export async function login(formData: FormData) {

    
    const validateFields = schema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })
    
    if (!validateFields.success) {
        console.log('Error de validación:', validateFields.error.issues);
        return;
    }
    
    const supabaseClient = await createClient();
    const {data, error} = await supabaseClient
        .auth
        .signInWithPassword({ email: validateFields.data.email, password: validateFields.data.password })

    if (error) {
        console.log(error.message);
        return;
    }

    revalidatePath('/', 'layout'); // limpia la caché de rutas de Next.js para traer datos frescos con la nueva sesión
    redirect('/purchases'); // ('/ruta', RedirectType.push | replace) para controlar el historial de navegación

}