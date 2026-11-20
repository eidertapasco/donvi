CREATE TABLE supplies(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name TEXT NOT NULL,
	usage_unit TEXT NOT NULL,
	portions_per_unit NUMERIC NOT NULL,
	category_id INTEGER REFERENCES categories(id) NOT NULL,
	reference_unit_id INTEGER REFERENCES units(id) NOT NULL,

	CONSTRAINT ck_supplies_name_format
		CHECK(
			name = btrim(name) 
			AND LENGTH(btrim(name)) > 0
			AND name = LOWER(name)),
	CONSTRAINT ck_supplies_usage_unit_format
		CHECK(usage_unit = btrim(usage_unit) 
			AND LENGTH(btrim(usage_unit)) > 0
			AND usage_unit = LOWER(usage_unit)),
	CONSTRAINT ck_supplies_portions_per_unit_positive
		CHECK(portions_per_unit > 0)
);

CREATE INDEX idx_supplies_category_id ON supplies(category_id);
CREATE UNIQUE INDEX uq_supplies_name ON supplies(LOWER(name));

ALTER TABLE supplies ENABLE ROW LEVEL SECURITY;