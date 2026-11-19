CREATE TABLE units(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    dimension TEXT NOT NULL,
    factor_to_base NUMERIC NOT NULL,
    sort_order INTEGER NOT NULL,

    CONSTRAINT ck_units_code_format
        CHECK(code = btrim(code) AND length(btrim(code)) > 0),
    CONSTRAINT ck_units_name_format
        CHECK(name = btrim(name) AND length(btrim(name)) > 0),
    CONSTRAINT ck_units_dimension
        CHECK(dimension IN ('peso', 'volumen', 'cantidad', 'empaque')),
    CONSTRAINT ck_units_factor_to_base_valid
        CHECK(
            factor_to_base > 0
            AND (dimension <> 'empaque' OR factor_to_base = 1)),
    CONSTRAINT ck_units_sort_order_positive
        CHECK(sort_order > 0)
);

CREATE UNIQUE INDEX uq_units_name ON units(lower(name));
CREATE UNIQUE INDEX uq_units_code ON units(lower(code));

ALTER TABLE units ENABLE ROW LEVEL SECURITY;

CREATE POLICY units_select_all
ON units
FOR SELECT
USING(true);