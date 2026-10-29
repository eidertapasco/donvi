-- name = btrim(name) rechaza espacios al incio o al final
-- length(btrim(name)) > 0 rechaza texto vacio
CREATE TABLE categories(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name TEXT NOT NULL 
		CONSTRAINT ck_categories_name_no_whitespace 
		CHECK(name = btrim(name) AND length(btrim(name)) > 0)
);

CREATE UNIQUE INDEX idx_categories_name_lower
ON categories(lower(name));