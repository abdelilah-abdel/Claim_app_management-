-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 23, 2022 at 05:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reclamations`
--

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(9);

-- --------------------------------------------------------

--
-- Table structure for table `reclamation_table`
--

CREATE TABLE `reclamation_table` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gsm1` varchar(255) DEFAULT NULL,
  `gsm2` varchar(255) DEFAULT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `typology` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `num_compte` varchar(255) DEFAULT NULL,
  `object` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reclamation_table`
--

INSERT INTO `reclamation_table` (`id`, `nom`, `prenom`, `email`, `gsm1`, `gsm2`, `cin`, `state`, `typology`, `reference`, `num_compte`, `object`) VALUES
(5, '1', '1', '1', '1', '1', '2', 1, '1', '1', '1', '1'),
(6, '1', '1', '1', '1', '1', '2', 1, '1', '1', '1', '1'),
(7, '2', '2', '2', NULL, '2', '2', 2, '2', '2', '2', '2'),
(8, '2', '2', '2', NULL, '2', '2', 2, '2', '2', '2', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reclamation_table`
--
ALTER TABLE `reclamation_table`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
