CREATE TABLE purchases(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	purchase_date DATE NOT NULL,
	invoice_code TEXT,
	notes TEXT,
	created_at TIMESTAMPTZ DEFAULT now() NOT NULL,

	CONSTRAINT ck_purchases_invoice_code_format
		CHECK(invoice_code IS NULL OR (
			invoice_code = btrim(invoice_code) 
			AND LENGTH(btrim(invoice_code)) > 0)),
	CONSTRAINT ck_purchases_notes_format
		CHECK(notes IS NULL OR (notes = btrim(notes) AND LENGTH(btrim(notes)) > 0))
);

ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;