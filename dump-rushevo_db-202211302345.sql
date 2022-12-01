-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: rushevo_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.10.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `id_pag` int(11) NOT NULL AUTO_INCREMENT,
  `page_name` varchar(256) NOT NULL,
  `description` varchar(256) NOT NULL,
  `link` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id_pag`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES (1,'Concepto','Explicación del concepto de Deportes Extremos!!!','/contenido/deportes/concepto.html'),(2,'Acerca De','Breve resumen sobre nosotros y el proyecto.','/contenido/acerca-de.html'),(3,'Skate','Explicación sobre el deporte extremo de Skating.','/contenido/deportes/skate.html'),(4,'Escalada','Explicación sobre el deporte extremo de escalar.','/contenido/deportes/escalada.html'),(5,'Skydiving','Explicación sobre el deporte extremo de Skydiving o Paracaidismo.','/contenido/deportes/skydiving.html'),(6,'Surf','Explicación sobre el deportes extremo de Surfing.','/contenido/deportes/surf.html'),(7,'Motocross','Explicación sobre el deporte extremo de Motocross.','/contenido/deportes/motocross.html');
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_articulos`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_articulos` (
  `id_img` int(11) NOT NULL AUTO_INCREMENT,
  `pag_id` int(11) NOT NULL,
  `img_name` varchar(256) NOT NULL,
  `img_url` varchar(256) NOT NULL,
  PRIMARY KEY (`id_img`),
  KEY `fk_img_id` (`pag_id`),
  CONSTRAINT `fk_img_id` FOREIGN KEY (`pag_id`) REFERENCES `articulos` (`id_pag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_articulos`
--

LOCK TABLES `imagenes_articulos` WRITE;
/*!40000 ALTER TABLE `imagenes_articulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes_articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `apellido` varchar(256) NOT NULL,
  `fecha_nac` date DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'gaming2@gaming.com','gaming','gam','ing2','2022-11-27'),(3,'gaming3@gaming.com','gaming','gam','ing2','2022-11-27'),(4,'gaming4@gaming.com','gaming','gam','ing2','2022-11-28'),(5,'gaming4@gaming.com','gaming','gam','ing2','2022-11-28'),(6,'testPOSTMAN@gaming.com','54321','test','man','2022-11-28'),(7,'test@testmails.com','12345','a','b','2022-11-29'),(8,'test@testmails.com','12345','a','b','2022-11-29'),(10,'aaaaaa@aaaa.com','abcde','aaaaa','bbbbbb','2022-11-03'),(11,'aaaaa','aaaaaa','aaaaa','aaaa','2022-11-03');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'rushevo_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-30 23:45:20
