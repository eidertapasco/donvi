CREATE TABLE units(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    dimension TEXT NOT NULL,
    factor_to_base NUMERIC NOT NULL,

    CONSTRAINT ck_units_code_no_whitespace
        CHECK(code = btrim(code) AND length(btrim(code)) > 0),
    CONSTRAINT ck_units_name_no_whitespace
        CHECK(name = btrim(name) AND length(btrim(name)) > 0),
    CONSTRAINT ck_units_dimension
        CHECK(dimension IN ('peso', 'volumen', 'cantidad', 'empaque')),
    CONSTRAINT ck_units_factor_positive
        CHECK(
            factor_to_base > 0 
            AND (dimension <> 'empaque' OR factor_to_base = 1))
);   

CREATE UNIQUE INDEX idx_units_name_lower ON units(lower(name));
CREATE UNIQUE INDEX idx_units_code_lower ON units(lower(code));

ALTER TABLE units ENABLE ROW LEVEL SECURITY;

CREATE POLICY units_select_all
ON units
FOR SELECT
USING(true);