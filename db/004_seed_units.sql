-- creamos la lista de datos base de units
INSERT INTO units(code, name, dimension, factor_to_base, sort_order)
VALUES
    ('g',      'gramo',     'peso',     1,    1),
    ('lb',     'libra',     'peso',     500,  2),
    ('kg',     'kilogramo', 'peso',     1000, 3),
    ('ml',     'mililitro', 'volumen',  1,    4),
    ('l',      'litro',     'volumen',  1000, 5),
    ('und',    'unidad',    'cantidad', 1,    6),
    ('docena', 'docena',    'cantidad', 12,   7),
    ('bandeja','bandeja',   'empaque',  1,    8),
    ('bloque', 'bloque',    'empaque',  1,    9),
    ('bolsa',  'bolsa',     'empaque',  1,    10),
    ('carton', 'carton',    'empaque',  1,    11),
    ('caja',   'caja',      'empaque',  1,    12),
    ('panal',  'panal',     'empaque',  1,    13),
    ('paquete','paquete',   'empaque',  1,    14),
    ('resma',  'resma',     'empaque',  1,    15),
    ('rollo',  'rollo',     'empaque',  1,    16);
