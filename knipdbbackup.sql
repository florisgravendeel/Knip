-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
--
-- server: wesleyv.mysql.database.azure.com
-- user: wesleyvuong@wesleyv
-- remember pass: + USA 8 & 4 drip { > , music FRUIT EGG 9 COFFEE } EGG
--
--
--
-- Host: wesleyv.mysql.database.azure.com    Database: website
-- ------------------------------------------------------
-- Server version	5.6.47.0

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
-- Table structure for table `behandeling`
--

DROP TABLE IF EXISTS `behandeling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `behandeling` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` text NOT NULL,
  `prijs` varchar(45) NOT NULL,
  `tijdsduur` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) /*!50100 TABLESPACE `innodb_system` */ ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `behandeling`
--

LOCK TABLES `behandeling` WRITE;
/*!40000 ALTER TABLE `behandeling` DISABLE KEYS */;
INSERT INTO `behandeling` VALUES (3,'Knippen','15',30);
INSERT INTO `behandeling` VALUES (4,'Wassen, knippen en föhnen','27',45);
INSERT INTO `behandeling` VALUES (5,'Wassen, knippen, en tangen','27',45);
INSERT INTO `behandeling` VALUES (6,'Pony knippen','5',15);
INSERT INTO `behandeling` VALUES (7,'Verven','12',20);
INSERT INTO `behandeling` VALUES (8,'Kleuren','15',20);
INSERT INTO `behandeling` VALUES (9,'Epileren','10',10);
INSERT INTO `behandeling` VALUES (10,'Ontharen','8',10);
INSERT INTO `behandeling` VALUES (11,'Baard scheren','8',5);
INSERT INTO `behandeling` VALUES (12,'Baard trimmen','12',10);
INSERT INTO `behandeling` VALUES (13,'Tangen','25',15);
INSERT INTO `behandeling` VALUES (14,'Vlechten','10',30);
INSERT INTO `behandeling` VALUES (15,'Opsteken','29',20);
INSERT INTO `behandeling` VALUES (16,'Watergolven','30',30);
/*!40000 ALTER TABLE `behandeling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kapper`
--

DROP TABLE IF EXISTS `kapper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kapper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` tinytext NOT NULL,
  `gebruikersnaam` varchar(45) NOT NULL,
  `wachtwoord` varchar(45) NOT NULL,
  `email` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`gebruikersnaam`)
) /*!50100 TABLESPACE `innodb_system` */ ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kapper`
--

LOCK TABLES `kapper` WRITE;
/*!40000 ALTER TABLE `kapper` DISABLE KEYS */;
INSERT INTO `kapper` VALUES (3,'Emma','emma123','geen','emma@knip.nl');
INSERT INTO `kapper` VALUES (4,'Rik','rik233','213213','rik@live.nl');
INSERT INTO `kapper` VALUES (5,'Max','max44','geen','max@gmail.com');
/*!40000 ALTER TABLE `kapper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservering`
--

DROP TABLE IF EXISTS `reservering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservering` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` tinytext NOT NULL,
  `email` tinytext,
  `telefoon` tinytext,
  `begin_datum` datetime NOT NULL,
  `eind_datum` datetime NOT NULL,
  `kapper_id` int(11) NOT NULL,
  `behandelings_id` int(11) NOT NULL,
  `opmerking` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `foreignkey_kapper_idx` (`kapper_id`),
  KEY `foreingkey_behandeling_idx` (`behandelings_id`),
  FULLTEXT KEY `name` (`naam`),
  CONSTRAINT `foreignkey_kapper` FOREIGN KEY (`kapper_id`) REFERENCES `kapper` (`id`),
  CONSTRAINT `foreingkey_behandeling` FOREIGN KEY (`behandelings_id`) REFERENCES `behandeling` (`id`)
) /*!50100 TABLESPACE `innodb_system` */ ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservering`
--

LOCK TABLES `reservering` WRITE;
/*!40000 ALTER TABLE `reservering` DISABLE KEYS */;
INSERT INTO `reservering` VALUES (6,'Gert','gert@klant.nl','0611223344','2020-12-01 10:00:00','2020-12-01 10:30:00',3,3,'');
INSERT INTO `reservering` VALUES (7,'Lissa','lis@hotmail.com','0622102244','2020-12-18 12:00:00','2020-12-18 13:00:00',3,3,'');
INSERT INTO `reservering` VALUES (8,'India','india@live.nl','0612101244','2020-12-02 13:00:00','2020-12-02 14:00:00',4,3,'');
INSERT INTO `reservering` VALUES (9,'Gert','gert@kpn.nl','0611221133','2020-12-04 09:00:00','2020-12-04 09:30:00',4,3,'');
INSERT INTO `reservering` VALUES (10,'Gerda','gerda@live.nl','0644445522','2020-12-09 09:00:00','2020-12-09 10:00:00',5,3,'');
INSERT INTO `reservering` VALUES (14,'Hanneke','han@kpn.nl','0633343311','2020-12-04 14:00:00','2020-12-04 14:30:00',4,3,'');
INSERT INTO `reservering` VALUES (15,'Bas','basske@live.nl','0655224421','2020-12-08 12:00:00','2020-12-08 13:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (23,'Bas2','basske@live.nl','0655224421','2020-12-19 16:30:00','2020-12-19 17:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (24,'Bas22','basske@live.nl','0655224421','2020-12-05 16:30:00','2020-12-05 17:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (25,'Kees','basske@live.nl','0655224421','2020-12-11 16:30:00','2020-12-11 17:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (26,'Kees3','keesham@ned.nl','0655224421','2020-12-19 16:30:00','2020-12-19 17:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (27,'Baas99','keesham@ned.nl','0655224421','2020-12-05 16:30:00','2020-12-05 17:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (28,'Beest22','keesmoet@niks.be','0655224421','2020-12-18 16:30:00','2020-12-18 17:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (29,'Marja','marja@greatb.co.uk','0655224421','2020-12-05 16:30:00','2020-12-05 17:00:00',3,3,'dag');
INSERT INTO `reservering` VALUES (30,'Wesley','wes@greatb.co.uk','0611221177','2020-12-04 10:30:00','2020-12-04 11:00:00',4,3,'HTralala');
INSERT INTO `reservering` VALUES (31,'Jan','wes@greatb.co.uk','0611221177','2020-12-04 10:30:00','2020-12-04 11:00:00',4,3,'HTralala');
INSERT INTO `reservering` VALUES (32,'Jan','wes@greatb.co.uk','0611221177','2020-12-04 10:30:00','2020-12-04 11:00:00',4,3,'HTralala');
INSERT INTO `reservering` VALUES (33,'Piet','wes@greatb.co.uk','0611221177','2020-12-04 10:30:00','2020-12-04 11:00:00',4,3,'HTralala');
/*!40000 ALTER TABLE `reservering` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-10 10:13:23
