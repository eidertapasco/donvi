-- Actualizacion a las politicas de la tabla categories
DROP POLICY IF EXISTS "categories_select_all" ON public.categories;

CREATE POLICY "categories_select_authenticated"
ON public.categories
FOR SELECT
TO authenticated
USING (true);

-- Actualizacion a las politicas de la tabla units
DROP POLICY IF EXISTS "units_select_all" ON public.units;

CREATE POLICY "units_select_authenticated"
ON public.units
FOR SELECT
TO authenticated
USING (true);

-- Creación de las politicas de la tabla supplies
DROP POLICY IF EXISTS "supplies_select_authenticated" ON public.supplies;

CREATE POLICY "supplies_select_authenticated"
ON public.supplies
FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "supplies_insert_authenticated" ON public.supplies;

CREATE POLICY "supplies_insert_authenticated"
ON public.supplies
FOR INSERT
TO authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "supplies_update_authenticated" ON public.supplies;

CREATE POLICY "supplies_update_authenticated"
ON public.supplies
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Creación de las politicas de la tabla purchases
DROP POLICY IF EXISTS "purchases_select_authenticated" ON public.purchases;

CREATE POLICY "purchases_select_authenticated"
ON public.purchases
FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "purchases_insert_authenticated" ON public.purchases;

CREATE POLICY "purchases_insert_authenticated"
ON public.purchases
FOR INSERT
TO authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "purchases_update_authenticated" ON public.purchases;

CREATE POLICY "purchases_update_authenticated"
ON public.purchases
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Creación de las politicas de la tabla purchase_items
DROP POLICY IF EXISTS "purchase_items_select_authenticated" ON public.purchase_items;

CREATE POLICY "purchase_items_select_authenticated"
ON public.purchase_items
FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "purchase_items_insert_authenticated" ON public.purchase_items;

CREATE POLICY "purchase_items_insert_authenticated"
ON public.purchase_items
FOR INSERT
TO authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "purchase_items_update_authenticated" ON public.purchase_items;

CREATE POLICY "purchase_items_update_authenticated"
ON public.purchase_items
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "purchase_items_delete_authenticated" ON public.purchase_items;

CREATE POLICY "purchase_items_delete_authenticated"
ON public.purchase_items
FOR DELETE
TO authenticated
USING (true);