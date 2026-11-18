-- creamos la lista de datos base de units
INSERT INTO units(code, name, dimension, factor_to_base)
VALUES
	('g', 'gramo', 'peso', 1),
	('lb', 'libra', 'peso', 500),
	('kg', 'kilogramo', 'peso', 1000),
	('ml', 'mililitro', 'volumen', 1),
	('l', 'litro', 'volumen', 1000),
	('und', 'unidad', 'cantidad', 1),
	('docena', 'docena', 'cantidad', 12),
	('bandeja', 'bandeja', 'empaque', 1),
	('bloque', 'bloque', 'empaque', 1),
	('bolsa', 'bolsa', 'empaque', 1),
	('carton', 'carton', 'empaque', 1),
	('caja', 'caja', 'empaque', 1),
	('panal', 'panal', 'empaque', 1),
	('paquete', 'paquete', 'empaque', 1),
	('resma', 'resma', 'empaque', 1),
	('rollo', 'rollo', 'empaque', 1);