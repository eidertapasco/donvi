CREATE TABLE purchase_items(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	quantity NUMERIC NOT NULL,
	total_price NUMERIC NOT NULL,
	actual_yield NUMERIC,
	unit_id INTEGER REFERENCES units(id) NOT NULL,
	purchase_id INTEGER REFERENCES purchases(id) NOT NULL,
	supply_id INTEGER REFERENCES supplies(id) NOT NULL,

	CONSTRAINT ck_purchase_items_quantity_positive
		CHECK(quantity > 0),
	-- No se permite precio 0: toda línea de factura tiene un valor.
	CONSTRAINT ck_purchase_items_total_price_positive
		CHECK(total_price > 0),
	CONSTRAINT ck_purchase_items_actual_yield_positive
		CHECK(actual_yield IS NULL OR actual_yield > 0 )
);

CREATE INDEX idx_purchase_items_purchase_id ON purchase_items(purchase_id);
CREATE INDEX idx_purchase_items_supply_id ON purchase_items(supply_id);
-- unit_id no tiene índice a propósito: solo hay 16 unidades y no se filtra por ellas.
-- Si aparece esa consulta, se crea con un archivo nuevo.

ALTER TABLE purchase_items ENABLE ROW LEVEL SECURITY;