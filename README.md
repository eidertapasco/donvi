# Donvi

Donvi es un sistema de gestión para un negocio de comidas rápidas fundado en Pijao, Quindío, Colombia. Fue creado por Eider Tapasco y Fernanda Arango, fundadores de la marca.

Nació para reemplazar las cuentas en papel y en hojas de Excel, que son lentas y propensas a errores. Su objetivo es registrar las compras de insumos, calcular costos de producción y, más adelante, registrar ventas y analizar la rentabilidad de cada producto.

## Estado

En desarrollo. Módulo 1 (compras): el esquema para categorías, unidades, insumos, compras y renglones de compra está definido, y Supabase está integrado para consultas y manejo de sesiones. El inicio de sesión mediante correo y contraseña y el cierre de sesión están implementados. También hay consultas iniciales de categorías y unidades, y una pantalla de compras que muestra el usuario autenticado; todavía no permite registrar compras desde la aplicación. Módulo 2 (ventas): pendiente.

## Stack

Next.js, React, TypeScript, Tailwind CSS, Zod y PostgreSQL (alojado en Supabase).

Para el formato del código se usa Prettier con plugins para ordenar imports y clases de Tailwind CSS.

## Supabase en Next.js

Se usa `@supabase/ssr` para trabajar con sesiones y cookies en el navegador y el servidor:

- `lib/supabase/client.ts` crea el cliente de Supabase para el navegador.
- `lib/supabase/server.ts` crea el cliente para páginas y componentes de servidor, usando las cookies de Next.js.
- `lib/supabase/proxy.ts`, conectado desde `proxy.ts` en la raíz, verifica y renueva la sesión sincronizando las cookies de la solicitud y la respuesta.
- Las páginas de categorías y unidades consultan Supabase desde el servidor y se renderizan con datos de la solicitud actual.
- `app/login/page.tsx` ofrece el formulario de inicio de sesión y muestra errores y estado de carga. `actions/auth.ts` valida los datos con Zod, inicia sesión con correo y contraseña mediante Supabase y permite cerrar la sesión.
- Al iniciar sesión, se renueva la caché de rutas y se redirige a `/purchases`; al cerrar sesión, se redirige a `/login`.
- `app/purchases/page.tsx` muestra el correo del usuario autenticado y la opción para cerrar sesión. El registro de compras aún es un espacio reservado.

Cuando no hay una sesión, el proxy redirige a `/login`.

## Cómo levantar el proyecto

1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Crear un archivo `.env.local` en la raíz con estas variables (los valores están en Supabase, Project Settings → API, y nunca se suben a Git):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
4. Arrancar el servidor: `npm run dev` y abrir `http://localhost:3000`.

## Base de datos

La base es PostgreSQL en Supabase, para que sea accesible desde cualquier dispositivo. Se construyó a mano con archivos SQL en `db/`, que se ejecutan en orden numérico. Cada base (local y Supabase) se actualiza manualmente.

Nota: en Supabase hay que exponer las tablas a la API desde el panel. Eso no lo recrean los archivos.

`db/008_policies.sql` define políticas RLS para la lectura de categorías y unidades, y para la lectura, inserción y actualización de insumos y compras. Para los renglones de compra también permite el borrado. Como las bases se actualizan manualmente, hay que ejecutar este script en cada entorno para aplicar las políticas.

| Archivo | Local | Supabase |
|---|---|---|
| 001_categories | ✅ | ✅ |
| 002_seed_categories | ✅ | ✅ |
| 003_units | ✅ | ✅ |
| 004_seed_units | ✅ | ✅ |
| 005_supplies | ✅ | ✅ |
| 006_purchases | ✅ | ✅ |
| 007_purchase_items | ✅ | ✅ |

## Decisiones de diseño

- `numeric` y no `float` para dinero y cantidades, para evitar errores de precisión.
- Los nombres únicos no distinguen mayúsculas (índice sobre `lower()`).
- Cada línea de compra tiene su propia unidad, y la conversión se hace con la tabla `units`.
- Las sentencias SQL van en mayúsculas para distinguir lo de PostgreSQL de los nombres propios.
- Las restricciones siguen la convención `ck_tabla_columna_regla`, y los índices únicos `uq_`.
- RLS está activado. Las políticas de `008_policies.sql` permiten el acceso a cualquier usuario autenticado, pero todavía no aíslan los datos por usuario.
- Las llaves foráneas impiden borrar una compra con renglones o un insumo con compras, para proteger el historial.
- La categoría vive en el insumo y no en la línea de compra, para que no pueda variar de una compra a otra.
- El rendimiento promedio vive en supplies, y el real de una compra en actual_yield.
- Los empaques (paquete, bloque, caja...) son unidades con factor 1 que no se convierten entre sí.
- total_price no puede ser 0, porque toda línea de factura tiene un valor.
- purchase_date (cuándo se compró) y created_at (cuándo se digitó) son datos distintos.

## Reglas pendientes para la aplicación

- El formulario pasa el nombre del insumo a minúsculas antes de guardar, porque la base rechaza mayúsculas.
- En una compra, el insumo se elige de una lista y no se escribe. Solo se escribe texto libre al crear un insumo nuevo, y ahí se normaliza y se avisa si ya existe uno parecido.
- La unidad de la línea debe ser de la misma dimensión que la unidad de referencia del insumo.
- Corregir líneas de compra (con fecha de edición) se agregará con un archivo SQL posterior.
- Cuando existan proveedores, el código de factura será único por proveedor.

## Fuera del MVP

Inventario, pedidos, pagos, contabilidad, sedes, proveedores, integración con WhatsApp e inteligencia artificial.