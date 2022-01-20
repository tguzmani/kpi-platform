-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: reporteria-test
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adm_account_contract`
--

DROP TABLE IF EXISTS `adm_account_contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_account_contract` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_adm_accounts` int(11) NOT NULL,
  `id_int_id_type` int(11) NOT NULL,
  `int_id_type_value` varchar(45) NOT NULL,
  `adress` varchar(100) NOT NULL,
  `id_geo_zone` int(11) NOT NULL,
  `monthly_value` decimal(15,3) NOT NULL,
  `id_adm_money_monthly_value` int(11) NOT NULL,
  `active_user_value` decimal(15,3) NOT NULL,
  `id_adm_money_active_user_value` int(11) NOT NULL,
  `inactive_user_value` decimal(15,3) NOT NULL,
  `id_adm_money_inactive_user_value` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_accounts_idx` (`id_adm_accounts`),
  KEY `int_id_type_idx` (`id_int_id_type`),
  KEY `geo_zone_idx` (`id_geo_zone`),
  KEY `adm_money_monthly_idx` (`id_adm_money_monthly_value`),
  KEY `dam_money_active_user_idx` (`id_adm_money_active_user_value`),
  KEY `adm_money_inactive_user_idx` (`id_adm_money_inactive_user_value`),
  CONSTRAINT `fk__adm_accounts_billings__adm_accounts` FOREIGN KEY (`id_adm_accounts`) REFERENCES `adm_accounts` (`id`),
  CONSTRAINT `fk__adm_accounts_billings__adm_money__active_user` FOREIGN KEY (`id_adm_money_active_user_value`) REFERENCES `adm_money` (`id`),
  CONSTRAINT `fk__adm_accounts_billings__adm_money__inactive_user` FOREIGN KEY (`id_adm_money_inactive_user_value`) REFERENCES `adm_money` (`id`),
  CONSTRAINT `fk__adm_accounts_billings__adm_money__monthly` FOREIGN KEY (`id_adm_money_monthly_value`) REFERENCES `adm_money` (`id`),
  CONSTRAINT `fk__adm_accounts_billings__geo_zone` FOREIGN KEY (`id_geo_zone`) REFERENCES `geo_zone` (`id`),
  CONSTRAINT `fk__adm_accounts_billings__int_id_type` FOREIGN KEY (`id_int_id_type`) REFERENCES `int_id_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_account_contract`
--

LOCK TABLES `adm_account_contract` WRITE;
/*!40000 ALTER TABLE `adm_account_contract` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_account_contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_accounts`
--

DROP TABLE IF EXISTS `adm_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `sub_domain` varchar(100) NOT NULL,
  `data_base` varchar(100) NOT NULL,
  `key_user` varchar(45) NOT NULL,
  `password` varchar(15) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `logo_address` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_accounts`
--

LOCK TABLES `adm_accounts` WRITE;
/*!40000 ALTER TABLE `adm_accounts` DISABLE KEYS */;
INSERT INTO `adm_accounts` VALUES (1,'TestClient','testclient','test-client-database','key-user','testclient',1,'kpi-logo.png'),(2,'Belenus','belenus','test-client-database','key-user','belenus*.',1,'belenus.png'),(3,'Maquihuano','maquihuano','test-client-database','key-user','maquihuano2021',1,'ag_maquihuano.png'),(4,'Arnaiz','arnaiz','test-client-database','key-user','arnaiz2021',1,'ag_arnaiz.png');
/*!40000 ALTER TABLE `adm_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_accounts_apps`
--

DROP TABLE IF EXISTS `adm_accounts_apps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_accounts_apps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_adm_accounts` int(11) NOT NULL,
  `id_int_apps` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_accounts_idx` (`id_adm_accounts`),
  KEY `int_apps_idx` (`id_int_apps`),
  CONSTRAINT `fk__adm_accounts_apps__adm_accounts` FOREIGN KEY (`id_adm_accounts`) REFERENCES `adm_accounts` (`id`),
  CONSTRAINT `fk__adm_accounts_apps__int_apps` FOREIGN KEY (`id_int_apps`) REFERENCES `int_apps` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_accounts_apps`
--

LOCK TABLES `adm_accounts_apps` WRITE;
/*!40000 ALTER TABLE `adm_accounts_apps` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_accounts_apps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_accounts_reports`
--

DROP TABLE IF EXISTS `adm_accounts_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_accounts_reports` (
  `id` int(11) NOT NULL,
  `id_adm_accounts` int(11) NOT NULL,
  `id_pbi_workspaces_reports` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_accounts_idx` (`id_adm_accounts`),
  KEY `pbi_workspaces_reports_idx` (`id_pbi_workspaces_reports`),
  CONSTRAINT `fk__adm_accounts_reports__adm_accounts` FOREIGN KEY (`id_adm_accounts`) REFERENCES `adm_accounts` (`id`),
  CONSTRAINT `fk__adm_accounts_reports__pbi_workspaces_reports` FOREIGN KEY (`id_pbi_workspaces_reports`) REFERENCES `pbi_workspaces_reports` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_accounts_reports`
--

LOCK TABLES `adm_accounts_reports` WRITE;
/*!40000 ALTER TABLE `adm_accounts_reports` DISABLE KEYS */;
INSERT INTO `adm_accounts_reports` VALUES (6,1,6),(7,1,7),(8,1,8),(9,3,9),(10,4,10),(11,1,11),(12,1,12);
/*!40000 ALTER TABLE `adm_accounts_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_money`
--

DROP TABLE IF EXISTS `adm_money`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_money` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(3) NOT NULL,
  `name` varchar(45) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_money`
--

LOCK TABLES `adm_money` WRITE;
/*!40000 ALTER TABLE `adm_money` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_money` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_money_ranges`
--

DROP TABLE IF EXISTS `adm_money_ranges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_money_ranges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_adm_money` int(11) NOT NULL,
  `date_begin` date NOT NULL,
  `date_ends` date NOT NULL,
  `value` decimal(10,3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_moneys_idx` (`id_adm_money`),
  CONSTRAINT `fk__adm_money_ranges__adm_money` FOREIGN KEY (`id_adm_money`) REFERENCES `adm_money` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_money_ranges`
--

LOCK TABLES `adm_money_ranges` WRITE;
/*!40000 ALTER TABLE `adm_money_ranges` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_money_ranges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_users`
--

DROP TABLE IF EXISTS `adm_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_adm_accounts` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `name` varchar(150) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_accounts_idx` (`id_adm_accounts`),
  CONSTRAINT `fk__adm_users__adm_accounts` FOREIGN KEY (`id_adm_accounts`) REFERENCES `adm_accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_users`
--

LOCK TABLES `adm_users` WRITE;
/*!40000 ALTER TABLE `adm_users` DISABLE KEYS */;
INSERT INTO `adm_users` VALUES (1,1,'TestUser','Test User','testuser@test.test','rl3rgi4NcZkpAEcacZnQ2VuOfJ0FxAqCRaKB/SwdZoQ=',1),(2,1,'rpdea-react-2','Roberto Perez de Arce','robertoo@kpimanagers.com','WZRHGrsBESr8wYFZ9sx0tPURuZgG2lmzyvWpwXPKz8U=',1),(3,3,'mjbrowne','María José Browne','mjbrowne@maquihuano.cl','WZRHGrsBESr8wYFZ9sx0tPURuZgG2lmzyvWpwXPKz8U=',1),(4,4,'jmarnaiz','José Miguel Arnáiz','jarnaiz@uc.cl','WZRHGrsBESr8wYFZ9sx0tPURuZgG2lmzyvWpwXPKz8U=',1),(5,1,'ftrentacoste','Felipe Trentacoste','felipe.trentacoste@kpimanagers.com','WZRHGrsBESr8wYFZ9sx0tPURuZgG2lmzyvWpwXPKz8U=',1),(6,1,'fbravo','Fernando Bravo','fbravo@primetec.cl','WZRHGrsBESr8wYFZ9sx0tPURuZgG2lmzyvWpwXPKz8U=',1),(7,1,'newtest','New test','new@gmail.com','jZae727K08KaOmKSgOaGzww/XVqGr/PKEgIMkjrcbJI=',1),(8,1,'new2','new2','new2jaja','jZae727K08KaOmKSgOaGzww/XVqGr/PKEgIMkjrcbJI=',1),(9,1,'datagrip-mod','Data Grip','datagrip@gmail.com','1234',1),(16,1,'updated-postman-user','Post Man User','postmanuser@gmail.com','1234',1),(22,1,'react-report-groups','React Report Groups','reactreportgroups@gmail.com','123456',1),(23,1,'hook user','Hook User','hookuser@gmail.com','123456',1);
/*!40000 ALTER TABLE `adm_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_users_dates`
--

DROP TABLE IF EXISTS `adm_users_dates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_users_dates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_adm_users` int(11) NOT NULL,
  `up_date` date NOT NULL,
  `down_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_users_idx` (`id_adm_users`),
  CONSTRAINT `fk__adm_users_dates__adm_users` FOREIGN KEY (`id_adm_users`) REFERENCES `adm_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_users_dates`
--

LOCK TABLES `adm_users_dates` WRITE;
/*!40000 ALTER TABLE `adm_users_dates` DISABLE KEYS */;
/*!40000 ALTER TABLE `adm_users_dates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adm_users_reports_groups`
--

DROP TABLE IF EXISTS `adm_users_reports_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_users_reports_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_adm_users` int(11) NOT NULL,
  `id_pbi_reports_groups_headers` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_users_idx` (`id_adm_users`),
  KEY `pbi_reports_groups_header_idx` (`id_pbi_reports_groups_headers`),
  CONSTRAINT `fk__adm_users_reports_groups__adm_users` FOREIGN KEY (`id_adm_users`) REFERENCES `adm_users` (`id`),
  CONSTRAINT `fk__adm_users_reports_groups__pbi_reports_groups_header` FOREIGN KEY (`id_pbi_reports_groups_headers`) REFERENCES `pbi_reports_groups_headers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_users_reports_groups`
--

LOCK TABLES `adm_users_reports_groups` WRITE;
/*!40000 ALTER TABLE `adm_users_reports_groups` DISABLE KEYS */;
INSERT INTO `adm_users_reports_groups` VALUES (6,3,4),(7,3,5),(9,4,6),(10,5,7),(12,6,8),(15,7,2),(16,7,8),(17,8,2),(18,9,2),(19,16,2),(20,16,3),(21,16,7),(22,22,2),(23,22,3),(24,22,8),(25,23,2),(26,23,7),(37,2,3),(38,2,7);
/*!40000 ALTER TABLE `adm_users_reports_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `geo_countries`
--

DROP TABLE IF EXISTS `geo_countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `geo_countries` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `geo_countries`
--

LOCK TABLES `geo_countries` WRITE;
/*!40000 ALTER TABLE `geo_countries` DISABLE KEYS */;
/*!40000 ALTER TABLE `geo_countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `geo_region`
--

DROP TABLE IF EXISTS `geo_region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `geo_region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_geo_countries` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `geo_countries_idx` (`id_geo_countries`),
  CONSTRAINT `fk__geo_region__geo_countries` FOREIGN KEY (`id_geo_countries`) REFERENCES `geo_countries` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `geo_region`
--

LOCK TABLES `geo_region` WRITE;
/*!40000 ALTER TABLE `geo_region` DISABLE KEYS */;
/*!40000 ALTER TABLE `geo_region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `geo_zone`
--

DROP TABLE IF EXISTS `geo_zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `geo_zone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_geo_region` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `geo_region_idx` (`id_geo_region`),
  CONSTRAINT `fk__geo_zone__geo_region` FOREIGN KEY (`id_geo_region`) REFERENCES `geo_region` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `geo_zone`
--

LOCK TABLES `geo_zone` WRITE;
/*!40000 ALTER TABLE `geo_zone` DISABLE KEYS */;
/*!40000 ALTER TABLE `geo_zone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `int_apps`
--

DROP TABLE IF EXISTS `int_apps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `int_apps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `int_apps`
--

LOCK TABLES `int_apps` WRITE;
/*!40000 ALTER TABLE `int_apps` DISABLE KEYS */;
/*!40000 ALTER TABLE `int_apps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `int_id_type`
--

DROP TABLE IF EXISTS `int_id_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `int_id_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `validate_function` varchar(100) NOT NULL,
  `id_int_countries` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `int_countries_idx` (`id_int_countries`),
  CONSTRAINT `fk__int_id_type__int_countries` FOREIGN KEY (`id_int_countries`) REFERENCES `geo_countries` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `int_id_type`
--

LOCK TABLES `int_id_type` WRITE;
/*!40000 ALTER TABLE `int_id_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `int_id_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `int_industries`
--

DROP TABLE IF EXISTS `int_industries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `int_industries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `int_industries`
--

LOCK TABLES `int_industries` WRITE;
/*!40000 ALTER TABLE `int_industries` DISABLE KEYS */;
INSERT INTO `int_industries` VALUES (1,'test-industry',1);
/*!40000 ALTER TABLE `int_industries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `int_regiones`
--

DROP TABLE IF EXISTS `int_regiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `int_regiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_int_countries` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `int_regiones`
--

LOCK TABLES `int_regiones` WRITE;
/*!40000 ALTER TABLE `int_regiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `int_regiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pbi_reports_groups_body`
--

DROP TABLE IF EXISTS `pbi_reports_groups_body`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pbi_reports_groups_body` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pbi_reports_groups_headers` int(11) NOT NULL,
  `id_pbi_workspaces_reports_sections` int(11) NOT NULL,
  `id_adm_accounts_reports` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pbi_reports_group_header_idx` (`id_pbi_reports_groups_headers`),
  KEY `adm_accounts_reports_idx` (`id_adm_accounts_reports`),
  KEY `pbi_workspaces_reports_sections_idx` (`id_pbi_workspaces_reports_sections`),
  CONSTRAINT `fk__pbi_reports_groups_body__adm_accounts_reports` FOREIGN KEY (`id_adm_accounts_reports`) REFERENCES `adm_accounts_reports` (`id`),
  CONSTRAINT `fk__pbi_reports_groups_body__pbi_reports_groups_header` FOREIGN KEY (`id_pbi_reports_groups_headers`) REFERENCES `pbi_reports_groups_headers` (`id`),
  CONSTRAINT `fk__pbi_reports_groups_body__pbi_workspaces_reports_sections` FOREIGN KEY (`id_pbi_workspaces_reports_sections`) REFERENCES `pbi_workspaces_reports_sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pbi_reports_groups_body`
--

LOCK TABLES `pbi_reports_groups_body` WRITE;
/*!40000 ALTER TABLE `pbi_reports_groups_body` DISABLE KEYS */;
INSERT INTO `pbi_reports_groups_body` VALUES (7,2,7,6),(10,2,9,7),(11,3,8,6),(12,2,10,8),(13,4,11,9),(14,4,12,9),(15,5,13,9),(16,6,14,10),(17,6,15,10),(18,6,16,10),(19,7,17,11),(20,7,18,11),(21,7,19,11),(22,7,20,11),(23,7,21,11),(24,7,22,11),(25,7,23,11),(26,7,24,11),(27,7,25,11),(28,8,26,12),(29,8,27,12),(30,8,28,12);
/*!40000 ALTER TABLE `pbi_reports_groups_body` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pbi_reports_groups_headers`
--

DROP TABLE IF EXISTS `pbi_reports_groups_headers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pbi_reports_groups_headers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_adm_accounts` int(11) NOT NULL,
  `code` varchar(9) NOT NULL,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_accounts_idx` (`id_adm_accounts`),
  CONSTRAINT `fk__pbi_reports_groups_header__adm_accounts` FOREIGN KEY (`id_adm_accounts`) REFERENCES `adm_accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pbi_reports_groups_headers`
--

LOCK TABLES `pbi_reports_groups_headers` WRITE;
/*!40000 ALTER TABLE `pbi_reports_groups_headers` DISABLE KEYS */;
INSERT INTO `pbi_reports_groups_headers` VALUES (2,1,'RP01','Grupo Prueba',1),(3,1,'RP02','Grupo Prueba 02',1),(4,3,'RP01','Grupo Principal',1),(5,3,'RP02','Grupo Análisis',1),(6,4,'RP01','Grupo Principal',1),(7,1,'RP03','Tablero Ventas',1),(8,1,'RP04','Grupo FX',1);
/*!40000 ALTER TABLE `pbi_reports_groups_headers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pbi_workspaces`
--

DROP TABLE IF EXISTS `pbi_workspaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pbi_workspaces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pbi` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_int_industries` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `int_industries_idx` (`id_int_industries`),
  CONSTRAINT `fk__pbi_workspaces__int_industries` FOREIGN KEY (`id_int_industries`) REFERENCES `int_industries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pbi_workspaces`
--

LOCK TABLES `pbi_workspaces` WRITE;
/*!40000 ALTER TABLE `pbi_workspaces` DISABLE KEYS */;
INSERT INTO `pbi_workspaces` VALUES (4,'f215dfe5-f4a3-44cc-a0f5-fa3de238411e','KPI Gestion',1,1),(5,'f3b9d857-e293-4689-9109-a71c4245daab','Agricola Maquihuano',1,1),(6,'4200fe18-e53e-4ffd-a989-666774bda2b9','Agricola Arnaiz',1,1);
/*!40000 ALTER TABLE `pbi_workspaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pbi_workspaces_reports`
--

DROP TABLE IF EXISTS `pbi_workspaces_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pbi_workspaces_reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pbi_workspaces` int(11) NOT NULL,
  `id_pbi` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pbi_workspaces_idx` (`id_pbi_workspaces`),
  CONSTRAINT `fk__pbi_workspaces_reports__pbi_workspaces` FOREIGN KEY (`id_pbi_workspaces`) REFERENCES `pbi_workspaces` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pbi_workspaces_reports`
--

LOCK TABLES `pbi_workspaces_reports` WRITE;
/*!40000 ALTER TABLE `pbi_workspaces_reports` DISABLE KEYS */;
INSERT INTO `pbi_workspaces_reports` VALUES (6,4,'aa463810-c45c-4cab-a926-0ed948d7c62a','Ejemplo Power BI',1),(7,4,'d509670e-da2b-4ce3-996e-67515da46e8c','Ejemplo Power BI igual WS',1),(8,4,'81ebe83e-bc4f-40d4-8cf5-36acf3fc3a48','US Sales Analysis',1),(9,5,'4027c77f-43d1-44cd-aa57-90855a4d1c5d','Análisis de Costos',1),(10,6,'73efba20-201a-4968-ad4f-e6f89bf419ce','Análisis de Costos',1),(11,4,'3d400a97-263a-44cc-be15-18da5bfdcb54','Tablero de Ventas',1),(12,4,'78d5c957-5e39-453b-a4af-5c3aea37eaaa','Análisis de Costos',1);
/*!40000 ALTER TABLE `pbi_workspaces_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pbi_workspaces_reports_sections`
--

DROP TABLE IF EXISTS `pbi_workspaces_reports_sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pbi_workspaces_reports_sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pbi_workspaces_reports` int(11) NOT NULL,
  `id_pbi` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pbi_workspaces_reports_idx` (`id_pbi_workspaces_reports`),
  CONSTRAINT `fk__pbi_workspaces_reports_sections__pbi_workspaces_reports` FOREIGN KEY (`id_pbi_workspaces_reports`) REFERENCES `pbi_workspaces_reports` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pbi_workspaces_reports_sections`
--

LOCK TABLES `pbi_workspaces_reports_sections` WRITE;
/*!40000 ALTER TABLE `pbi_workspaces_reports_sections` DISABLE KEYS */;
INSERT INTO `pbi_workspaces_reports_sections` VALUES (7,6,'','Página 1'),(8,6,'04678ff22cb86446142d','Página 2'),(9,7,'','Página 1'),(10,8,'','Página 1'),(11,9,'','Indicadores'),(12,9,'bfb832bd70ddc4ec3957','Análisis'),(13,9,'56773de18c1a459d9192','Pivot'),(14,10,'bcdb9758590becaa911a','Indicadores'),(15,10,'bfb832bd70ddc4ec3957','Análisis'),(16,10,'56773de18c1a459d9192','Pivot'),(17,11,'1e83b026989557a82e3b','Inicio'),(18,11,'18166f804530c6e8124d','Resumen'),(19,11,'eff373b50c4773a18d59','Mapa'),(20,11,'ca0a9344ac7250657eea','Indicadores'),(21,11,'2f314d745a80c013df4a','Evoluciones'),(22,11,'2796b5098377eb171505','Análisis'),(23,11,'9a78c3d7e8732cd4ea44','Pivot'),(24,11,'d78cb5b0e78782224d3b','Detalle Ventas'),(25,11,'c37b545d14b0288b3455','Detalle Presupuesto'),(26,12,'bcdb9758590becaa911a','Indicadores'),(27,12,'bfb832bd70ddc4ec3957','Análisis'),(28,12,'56773de18c1a459d9192','Pivot');
/*!40000 ALTER TABLE `pbi_workspaces_reports_sections` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-10 14:33:22
