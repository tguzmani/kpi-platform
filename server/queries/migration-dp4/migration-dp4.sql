-- adm_estados_pago
CREATE TABLE IF NOT EXISTS `adm_estados_pago` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`));

-- adm_invoices_header
CREATE TABLE IF NOT EXISTS `adm_invoices_header` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `invoice_id` VARCHAR(45) NOT NULL,
  `id_adm_account_contract` INT NULL,
  `id_adm_money` INT NOT NULL,
  `value` DECIMAL(15,3) NOT NULL,
  `date_creation` DATE NOT NULL,
  `date_payment` DATE NOT NULL,
  `id_adm_estados_pago` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `adm_account_contract_idx` (`id_adm_account_contract` ASC),
  INDEX `adm_money_idx` (`id_adm_money` ASC),
  INDEX `adm_esatdos_pago_idx` (`id_adm_estados_pago` ASC),
  CONSTRAINT `adm_account_contract`
    FOREIGN KEY (`id_adm_account_contract`)
    REFERENCES `adm_account_contract` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `adm_money`
    FOREIGN KEY (`id_adm_money`)
    REFERENCES `adm_money` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `adm_esatdos_pago`
    FOREIGN KEY (`id_adm_estados_pago`)
    REFERENCES `adm_estados_pago` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- int_items
CREATE TABLE IF NOT EXISTS `int_items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`));

-- adm_items_standar_costs
CREATE TABLE IF NOT EXISTS `adm_items_standar_costs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_int_items` INT NOT NULL,
  `id_geo_countries` INT NULL,
  `up_date` DATE NOT NULL,
  `down_date` DATE NOT NULL,
  `standard_cost` DECIMAL(15,3) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `int_items_idx` (`id_int_items` ASC),
  INDEX `geo_countries_idx` (`id_geo_countries` ASC),
  CONSTRAINT `int_items`
    FOREIGN KEY (`id_int_items`)
    REFERENCES `reporteria-test`.`int_items` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `geo_countries`
    FOREIGN KEY (`id_geo_countries`)
    REFERENCES `reporteria-test`.`geo_countries` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- adm_account_contract_detail
CREATE TABLE IF NOT EXISTS `adm_account_contract_detail` (
  `id` INT NOT NULL,
  `id_adm_account_contract` INT NOT NULL,
  `id_int_items` INT NOT NULL,
  `quantity` DECIMAL(15,3) NOT NULL,
  `standard_cost` DECIMAL(15,3) NULL,
  `contract_cost` DECIMAL(15,3) NOT NULL,
  `up_date` DATE NOT NULL,
  `down_date` DATE NULL,
  `active` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `adm_account_contract_idx` (`id_adm_account_contract` ASC),
  INDEX `int_items_idx` (`id_int_items` ASC),
  CONSTRAINT `adm_account_contract_detail`
    FOREIGN KEY (`id_adm_account_contract`)
    REFERENCES `reporteria-test`.`adm_account_contract` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `int_items_detail`
    FOREIGN KEY (`id_int_items`)
    REFERENCES `reporteria-test`.`int_items` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- adm_invoices_body
CREATE TABLE IF NOT EXISTS `adm_invoices_body` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_adm_invoices_header` INT NOT NULL,
  `id_int_items` INT NOT NULL,
  `id_adm_account_contract_detail` INT NOT NULL,
  `quantity` DECIMAL(15,3) NOT NULL,
  `contract_cost` DECIMAL(15,3) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `adm_invoices_header_idx` (`id_adm_invoices_header` ASC),
  INDEX `int_items_idx` (`id_int_items` ASC),
  INDEX `adm_account_contract_detail_idx` (`id_adm_account_contract_detail` ASC),
  CONSTRAINT `adm_invoices_header`
    FOREIGN KEY (`id_adm_invoices_header`)
    REFERENCES `reporteria-test`.`adm_invoices_header` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `int_items_body`
    FOREIGN KEY (`id_int_items`)
    REFERENCES `reporteria-test`.`int_items` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `adm_account_contract_detail_body`
    FOREIGN KEY (`id_adm_account_contract_detail`)
    REFERENCES `reporteria-test`.`adm_account_contract_detail` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);INSERT INTO `geo_countries` (id, name)
VALUES (1, 'Chile');

INSERT INTO `geo_region` (`id`,`name`,`id_geo_countries`)
VALUES
	(1,'Arica y Parinacota', 1),
	(2,'Tarapacá', 1),
	(3,'Antofagasta', 1),
	(4,'Atacama', 1),
	(5,'Coquimbo', 1),
	(6,'Valparaiso', 1),
	(7,'Metropolitana de Santiago', 1),
	(8,'Libertador General Bernardo O\'Higgins', 1),
	(9,'Maule', 1),
	(10,'Biobío', 1),
	(11,'La Araucanía', 1),
	(12,'Los Ríos', 1),
	(13,'Los Lagos', 1),
	(14,'Aisén del General Carlos Ibáñez del Campo', 1),
	(15,'Magallanes y de la Antártica Chilena', 1);

INSERT INTO `geo_zone` (`id`,`name`,`id_geo_region`)
VALUES
  (1, 'Arica', 1),
  (2, 'Camarones', 1),
  (3, 'General Lagos', 1),
  (4, 'Putre', 1),
  (5, 'Alto Hospicio', 2),
  (6, 'Iquique', 2),
  (7, 'Camiña', 2),
  (8, 'Colchane', 2),
  (9, 'Huara', 2),
  (10, 'Pica', 2),
  (11, 'Pozo Almonte', 2),
  (12, 'Tocopilla', 3),
  (13, 'María Elena', 3),
  (14, 'Calama', 3),
  (15, 'Ollague', 3),
  (16, 'San Pedro de Atacama', 3),
  (17, 'Antofagasta', 3),
  (18, 'Mejillones', 3),
  (19, 'Sierra Gorda', 3),
  (20, 'Taltal', 3),
  (21, 'Chañaral', 4),
  (22, 'Diego de Almagro', 4),
  (23, 'Copiapó', 4),
  (24, 'Caldera', 4),
  (25, 'Tierra Amarilla', 4),
  (26, 'Vallenar', 4),
  (27, 'Alto del Carmen', 4),
  (28, 'Freirina', 4),
  (29, 'Huasco', 4),
  (30, 'La Serena', 5),
  (31, 'Coquimbo', 5),
  (32, 'Andacollo', 5),
  (33, 'La Higuera', 5),
  (34, 'Paihuano', 5),
  (35, 'Vicuña', 5),
  (36, 'Ovalle', 5),
  (37, 'Combarbalá', 5),
  (38, 'Monte Patria', 5),
  (39, 'Punitaqui', 5),
  (40, 'Río Hurtado', 5),
  (41, 'Illapel', 5),
  (42, 'Canela', 5),
  (43, 'Los Vilos', 5),
  (44, 'Salamanca', 5),
  (45, 'La Ligua', 6),
  (46, 'Cabildo', 6),
  (47, 'Zapallar', 6),
  (48, 'Papudo', 6),
  (49, 'Petorca', 6),
  (50, 'Los Andes', 6),
  (51, 'San Esteban', 6),
  (52, 'Calle Larga', 6),
  (53, 'Rinconada', 6),
  (54, 'San Felipe', 6),
  (55, 'Llaillay', 6),
  (56, 'Putaendo', 6),
  (57, 'Santa María', 6),
  (58, 'Catemu', 6),
  (59, 'Panquehue', 6),
  (60, 'Quillota', 6),
  (61, 'La Cruz', 6),
  (62, 'La Calera', 6),
  (63, 'Nogales', 6),
  (64, 'Hijuelas', 6),
  (65, 'Valparaíso', 6),
  (66, 'Viña del Mar', 6),
  (67, 'Concón', 6),
  (68, 'Quintero', 6),
  (69, 'Puchuncaví', 6),
  (70, 'Casablanca', 6),
  (71, 'Juan Fernández', 6),
  (72, 'San Antonio', 6),
  (73, 'Cartagena', 6),
  (74, 'El Tabo', 6),
  (75, 'El Quisco', 6),
  (76, 'Algarrobo', 6),
  (77, 'Santo Domingo', 6),
  (78, 'Isla de Pascua', 6),
  (79, 'Quilpué', 6),
  (80, 'Limache', 6),
  (81, 'Olmué', 6),
  (82, 'Villa Alemana', 6),
  (83, 'Colina', 7),
  (84, 'Lampa', 7),
  (85, 'Tiltil', 7),
  (86, 'Santiago', 7),
  (87, 'Vitacura', 7),
  (88, 'San Ramón', 7),
  (89, 'San Miguel', 7),
  (90, 'San Joaquín', 7),
  (91, 'Renca', 7),
  (92, 'Recoleta', 7),
  (93, 'Quinta Normal', 7),
  (94, 'Quilicura', 7),
  (95, 'Pudahuel', 7),
  (96, 'Providencia', 7),
  (97, 'Peñalolén', 7),
  (98, 'Pedro Aguirre Cerda', 7),
  (99, 'Ñuñoa', 7),
  (100, 'Maipú', 7),
  (101, 'Macul', 7),
  (102, 'Lo Prado', 7),
  (103, 'Lo Espejo', 7),
  (104, 'Lo Barnechea', 7),
  (105, 'Las Condes', 7),
  (106, 'La Reina', 7),
  (107, 'La Pintana', 7),
  (108, 'La Granja', 7),
  (109, 'La Florida', 7),
  (110, 'La Cisterna', 7),
  (111, 'Independencia', 7),
  (112, 'Huechuraba', 7),
  (113, 'Estación Central', 7),
  (114, 'El Bosque', 7),
  (115, 'Conchalí', 7),
  (116, 'Cerro Navia', 7),
  (117, 'Cerrillos', 7),
  (118, 'Puente Alto', 7),
  (119, 'San José de Maipo', 7),
  (120, 'Pirque', 7),
  (121, 'San Bernardo', 7),
  (122, 'Buin', 7),
  (123, 'Paine', 7),
  (124, 'Calera de Tango', 7),
  (125, 'Melipilla', 7),
  (126, 'Alhué', 7),
  (127, 'Curacaví', 7),
  (128, 'María Pinto', 7),
  (129, 'San Pedro', 7),
  (130, 'Isla de Maipo', 7),
  (131, 'El Monte', 7),
  (132, 'Padre Hurtado', 7),
  (133, 'Peñaflor', 7),
  (134, 'Talagante', 7),
  (135, 'Codegua', 8),
  (136, 'Coínco', 8),
  (137, 'Coltauco', 8),
  (138, 'Doñihue', 8),
  (139, 'Graneros', 8),
  (140, 'Las Cabras', 8),
  (141, 'Machalí', 8),
  (142, 'Malloa', 8),
  (143, 'Mostazal', 8),
  (144, 'Olivar', 8),
  (145, 'Peumo', 8),
  (146, 'Pichidegua', 8),
  (147, 'Quinta de Tilcoco', 8),
  (148, 'Rancagua', 8),
  (149, 'Rengo', 8),
  (150, 'Requínoa', 8),
  (151, 'San Vicente de Tagua Tagua', 8),
  (152, 'Chépica', 8),
  (153, 'Chimbarongo', 8),
  (154, 'Lolol', 8),
  (155, 'Nancagua', 8),
  (156, 'Palmilla', 8),
  (157, 'Peralillo', 8),
  (158, 'Placilla', 8),
  (159, 'Pumanque', 8),
  (160, 'San Fernando', 8),
  (161, 'Santa Cruz', 8),
  (162, 'La Estrella', 8),
  (163, 'Litueche', 8),
  (164, 'Marchigüe', 8),
  (165, 'Navidad', 8),
  (166, 'Paredones', 8),
  (167, 'Pichilemu', 8),
  (168, 'Curicó', 9),
  (169, 'Hualañé', 9),
  (170, 'Licantén', 9),
  (171, 'Molina', 9),
  (172, 'Rauco', 9),
  (173, 'Romeral', 9),
  (174, 'Sagrada Familia', 9),
  (175, 'Teno', 9),
  (176, 'Vichuquén', 9),
  (177, 'Talca', 9),
  (178, 'San Clemente', 9),
  (179, 'Pelarco', 9),
  (180, 'Pencahue', 9),
  (181, 'Maule', 9),
  (182, 'San Rafael', 9),
  (184, 'Constitución', 9),
  (185, 'Empedrado', 9),
  (186, 'Río Claro', 9),
  (183, 'Curepto', 9),
  (187, 'Linares', 9),
  (188, 'San Javier', 9),
  (189, 'Parral', 9),
  (190, 'Villa Alegre', 9),
  (191, 'Longaví', 9),
  (192, 'Colbún', 9),
  (193, 'Retiro', 9),
  (194, 'Yerbas Buenas', 9),
  (195, 'Cauquenes', 9),
  (196, 'Chanco', 9),
  (197, 'Pelluhue', 9),
  (198, 'Bulnes', 10),
  (199, 'Chillán', 10),
  (200, 'Chillán Viejo', 10),
  (201, 'El Carmen', 10),
  (202, 'Pemuco', 10),
  (203, 'Pinto', 10),
  (204, 'Quillón', 10),
  (205, 'San Ignacio', 10),
  (206, 'Yungay', 10),
  (207, 'Cobquecura', 10),
  (208, 'Coelemu', 10),
  (209, 'Ninhue', 10),
  (210, 'Portezuelo', 10),
  (211, 'Quirihue', 10),
  (212, 'Ránquil', 10),
  (213, 'Treguaco', 10),
  (214, 'San Carlos', 10),
  (215, 'Coihueco', 10),
  (216, 'San Nicolás', 10),
  (217, 'Ñiquén', 10),
  (218, 'San Fabián', 10),
  (219, 'Alto Biobío', 11),
  (220, 'Antuco', 11),
  (221, 'Cabrero', 11),
  (222, 'Laja', 11),
  (223, 'Los Ángeles', 11),
  (224, 'Mulchén', 11),
  (225, 'Nacimiento', 11),
  (226, 'Negrete', 11),
  (227, 'Quilaco', 11),
  (228, 'Quilleco', 11),
  (229, 'San Rosendo', 11),
  (230, 'Santa Bárbara', 11),
  (231, 'Tucapel', 11),
  (232, 'Yumbel', 11),
  (233, 'Concepción', 11),
  (234, 'Coronel', 11),
  (235, 'Chiguayante', 11),
  (236, 'Florida', 11),
  (237, 'Hualpén', 11),
  (238, 'Hualqui', 11),
  (239, 'Lota', 11),
  (240, 'Penco', 11),
  (241, 'San Pedro de La Paz', 11),
  (242, 'Santa Juana', 11),
  (243, 'Talcahuano', 11),
  (244, 'Tomé', 11),
  (245, 'Arauco', 11),
  (246, 'Cañete', 11),
  (247, 'Contulmo', 11),
  (248, 'Curanilahue', 11),
  (249, 'Lebu', 11),
  (250, 'Los Álamos', 11),
  (251, 'Tirúa', 11),
  (252, 'Angol', 12),
  (253, 'Collipulli', 12),
  (254, 'Curacautín', 12),
  (255, 'Ercilla', 12),
  (256, 'Lonquimay', 12),
  (257, 'Los Sauces', 12),
  (258, 'Lumaco', 12),
  (259, 'Purén', 12),
  (260, 'Renaico', 12),
  (261, 'Traiguén', 12),
  (262, 'Victoria', 12),
  (263, 'Temuco', 12),
  (264, 'Carahue', 12),
  (265, 'Cholchol', 12),
  (266, 'Cunco', 12),
  (267, 'Curarrehue', 12),
  (268, 'Freire', 12),
  (269, 'Galvarino', 12),
  (270, 'Gorbea', 12),
  (271, 'Lautaro', 12),
  (272, 'Loncoche', 12),
  (273, 'Melipeuco', 12),
  (274, 'Nueva Imperial', 12),
  (275, 'Padre Las Casas', 12),
  (276, 'Perquenco', 12),
  (277, 'Pitrufquén', 12),
  (278, 'Pucón', 12),
  (279, 'Saavedra', 12),
  (280, 'Teodoro Schmidt', 12),
  (281, 'Toltén', 12),
  (282, 'Vilcún', 12),
  (283, 'Villarrica', 12),
  (284, 'Valdivia', 13),
  (285, 'Corral', 13),
  (286, 'Lanco', 13),
  (287, 'Los Lagos', 13),
  (288, 'Máfil', 13),
  (289, 'Mariquina', 13),
  (290, 'Paillaco', 13),
  (291, 'Panguipulli', 13),
  (292, 'La Unión', 13),
  (293, 'Futrono', 13),
  (294, 'Lago Ranco', 13),
  (295, 'Río Bueno', 13),
  (297, 'Osorno', 14),
  (298, 'Puerto Octay', 14),
  (299, 'Purranque', 14),
  (300, 'Puyehue', 14),
  (301, 'Río Negro', 14),
  (302, 'San Juan de la Costa', 14),
  (303, 'San Pablo', 14),
  (304, 'Calbuco', 14),
  (305, 'Cochamó', 14),
  (306, 'Fresia', 14),
  (307, 'Frutillar', 14),
  (308, 'Llanquihue', 14),
  (309, 'Los Muermos', 14),
  (310, 'Maullín', 14),
  (311, 'Puerto Montt', 14),
  (312, 'Puerto Varas', 14),
  (313, 'Ancud', 14),
  (314, 'Castro', 14),
  (315, 'Chonchi', 14),
  (316, 'Curaco de Vélez', 14),
  (317, 'Dalcahue', 14),
  (318, 'Puqueldón', 14),
  (319, 'Queilén', 14),
  (320, 'Quellón', 14),
  (321, 'Quemchi', 14),
  (322, 'Quinchao', 14),
  (323, 'Chaitén', 14),
  (324, 'Futaleufú', 14),
  (325, 'Hualaihué', 14),
  (326, 'Palena', 14),
  (327, 'Lago Verde', 15),
  (328, 'Coihaique', 15),
  (329, 'Aysén', 15),
  (330, 'Cisnes', 15),
  (331, 'Guaitecas', 15),
  (332, 'Río Ibáñez', 15),
  (333, 'Chile Chico', 15),
  (334, 'Cochrane', 15),
  (335, 'O''Higgins', 15),
  (336, 'Tortel', 15),
  (337, 'Natales', 16),
  (338, 'Torres del Paine', 16),
  (339, 'Laguna Blanca', 16),
  (340, 'Punta Arenas', 16),
  (341, 'Río Verde', 16),
  (342, 'San Gregorio', 16),
  (343, 'Porvenir', 16),
  (344, 'Primavera', 16),
  (345, 'Timaukel', 16),
  (346, 'Cabo de Hornos', 16),
  (347, 'Antártica', 16);


alter table int_items
change nombre name varchar(100) unique not null;

alter table int_items
change estado status tinyint(1) default 1;

insert into int_items (name)
values
    ('Plataforma'),
    ('Reportes'),
    ('Usuarios'),
    ('Servicio A'),
    ('Servicio B'),
    ('Servicio C'),
    ('Servicio D'),
    ('Servicio F'),
    ('Item X'),
    ('Item Y'),
    ('Item Z');

update int_items
set status = 0 where id = 6;create function generate_date(days int)
returns datetime
begin
    return date_add(now(), interval days day);
end;

-- el producto 1 tiene dos precios, pero justamente uno ya venció
-- el producto igual
-- faltan productos desde id = 8 hasta id = 11, lo cual es adrede
-- el producto 6 no se debe cargar porque no esta activo
insert into adm_items_standard_costs (id_int_items, id_geo_countries, up_date, down_date, standard_cost)
values
    (1, 1, generate_date(-30), generate_date(-10), 1.25),
    (1, 1, generate_date(0), generate_date(30), 5),
    (2, 1, generate_date(-10), generate_date(30), 1),
    (3, 1, generate_date(-10), generate_date(30), 0.3),
    (4, 1, generate_date(-10), generate_date(30), 3),
    (4, 1, generate_date(-30), generate_date(-10), 5),
    (5, 1, generate_date(-30), generate_date(30), 2),
    (6, 1, generate_date(-30), generate_date(30), 2.5),
    (7, 1, generate_date(-30), generate_date(30), 0.75);

insert into adm_money (code, name, active)
values ('UF', 'Unidad de fomento', 1);

-- en bd se muestra un campo id_adm_money, el cual no aparece en el create table
insert into int_id_type (type, validate_function, id_int_countries)
values ('RUT', 'RUT', 1);
alter table adm_account_contract
    change adress address varchar(100);

alter table adm_account_contract
    drop foreign key fk__adm_accounts_billings__adm_account,
    drop foreign key fk__adm_accounts_billings__adm_money__monthly,
    drop foreign key fk__adm_accounts_billings__adm_money__inactive_user,
    drop foreign key fk__adm_accounts_billings__adm_money__active_user,
    drop foreign key fk__adm_accounts_billings__adm_money__monthly,
    drop foreign key fk__adm_accounts_billings__int_id_type,
    drop foreign key fk__adm_accounts_billings__geo_zone;

alter table adm_account_contract
    drop monthly_value,
    drop id_adm_money_monthly_value,
    drop active_user_value,
    drop id_adm_money_active_user_value,
    drop inactive_user_value,
    drop id_adm_money_inactive_user_value;

alter table adm_account_contract
    add column name varchar(100);

alter table adm_account_contract
    add constraint fk__account_contract__adm_accounts foreign key (id_adm_accounts) references adm_accounts (id),
    add constraint fk__account_contract__int_id_type foreign key (id_int_id_type) references int_id_type (id),
    add constraint fk__account_contract__geo_zone foreign key (id_geo_zone) references geo_zone (id);

insert into adm_account_contract (id_adm_accounts, id_int_id_type, int_id_type_value, address, id_geo_zone, active, name)
values (1, 1, '28615208', 'Calle A, Altos de B, Edificio C', 72, 1, 'Contrato ABC')alter table adm_account_contract_detail
    change contract_cost contract_cost decimal(15, 3);

insert into adm_account_contract_detail values (id_adm_account_contract, id_int_items)