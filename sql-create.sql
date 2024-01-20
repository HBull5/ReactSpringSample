CREATE SCHEMA `demo` ;

USE demo;

DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `employees` WRITE;

INSERT INTO `employees` VALUES (1,'John Doe',35,'Male'),(2,'Jane Deer',40,'Female'),(3,'Where Waldo',78,'Male'),(4,'Theodore Rosevelt',95,'Male'),(5,'Margrett Thatcher',95,'Female');

UNLOCK TABLES;