"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

export type ActionState = {
    error?: string;
    success?: boolean;
} | null;

const loginSchema = z.object({
    email: z.email({ error: "Correo inválido" }),
    password: z
        .string({ error: "Contraseña inválida" })
        .min(8, { error: "La contraseña debe tener al menos 8 caracteres" }),
});

export async function login(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const validatedFields = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return { error: "Correo o contraseña incorrectos" };
    }

    const supabaseClient = await createClient();
    const { error } = await supabaseClient.auth.signInWithPassword({
        email: validatedFields.data.email,
        password: validatedFields.data.password,
    });

    if (error) {
        return { error: "Correo o contraseña incorrectos" };
    }

    // Limpia la caché de rutas de Next.js para traer datos frescos con la nueva sesión
    revalidatePath("/", "layout");
    // ('/ruta', RedirectType.push | replace) para controlar el historial de navegación
    redirect("/purchases");
}

export async function logout() {
    const supabaseClient = await createClient();
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        console.log("Error al cerrar sesión:", error.message);
        return;
    }

    revalidatePath("/", "layout");
    redirect("/login");
}
