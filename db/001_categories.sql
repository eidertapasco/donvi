-- name = btrim(name) rechaza espacios al incio o al final
-- length(btrim(name)) > 0 rechaza texto vacio
CREATE TABLE categories(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name TEXT NOT NULL
		CONSTRAINT ck_categories_name_format
		CHECK(name = btrim(name) AND length(btrim(name)) > 0)
);

CREATE UNIQUE INDEX uq_categories_name
ON categories(lower(name));

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY categories_select_all
ON categories
FOR SELECT
USING(true);