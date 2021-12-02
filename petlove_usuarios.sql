CREATE DATABASE  IF NOT EXISTS `petlove` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `petlove`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: petlove
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(75) DEFAULT NULL,
  `cpf` mediumtext,
  `email` varchar(60) NOT NULL,
  `cidade` varchar(25) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `Endereco` varchar(100) DEFAULT NULL,
  `senha` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'marcelo pereira de carvalho','null','marcelo@gmail.com','goiania','go','rua do camarao','$2a$10$zJgzh9PNQ5TQGvvwqm2gfOpKbe/sKBOQfGNFsrSDX.SQ7djBz3ur.'),(2,' ','null','','','','','$2a$10$H8ncwegcIBphytFEucEXSuabLs1.5Ad8JLL/FylUC3BuxrIDbjUwa'),(6,'xsxs xsxsx','null','xsxsx@gmail.com','xsxsxs','','sxsxs','$2a$10$clXDRN4G0V35mZwbpl0Jo.9inotnbqu.wByaebi39UKLUg/us8oV.'),(7,'xsxsx xsxsxs','null','mpc2605@gmail.com','xsxsx','','xsxs','$2a$10$uYM8xQyYPghkBXxwa2rm6OEo1KBcOs1D5hUa2LwKFopf/ZxBFP7wy'),(8,'ariany martins','null','a@gmail.com','dada','df','dad','$2a$10$ljWY9ToSj18aSdD7sNMwUeUi9LVpZqXF1Td/gly0tzUtkYAJe/oDW'),(13,'dqdqd qdq','null','dqdq@de.com','dqdq','','dqdq','$2a$10$NbXO.KcC8UTnsuFZEvCVg.31F6xxA.zC3wXd1yDQNrKl23BFofN/a'),(16,'dqdqd qdq','null','dqdqq@de.com','dqdq','al','dqdq','$2a$10$9PgSVDJI.gTpw4/9t5FMw.IyWwp46Sqq7V05nx0vx9lnmb0BglxTi'),(17,'marcelo marcelo','null','m@gmail.com','marcelo','ma','marcelo','$2a$10$OvxuGYdS42FljJz4pjGYkO2hKDfA8pnrXE5i1PybyyN025aIE7WZK');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-25 15:50:45
