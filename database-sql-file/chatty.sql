-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2023 at 05:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatty`
--

-- --------------------------------------------------------

--
-- Table structure for table `sessiontbl`
--

CREATE TABLE `sessiontbl` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessiontbl`
--

INSERT INTO `sessiontbl` (`session_id`, `expires`, `data`) VALUES
('5mvvIQsIX3bIYuDIPO-Ex8LlgoLtuEzS', 1703984013, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-31T00:53:33.133Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"1e356c18-cda0-4741-808c-69f8cb284735\"}'),
('8vejyC8hpvz9KVetWsKDDWjJ2w1c3eRl', 1703989245, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-31T01:41:10.251Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"1e356c18-cda0-4741-808c-69f8cb284735\"}'),
('Cy3SVjHeexXd5UBDCb9fZIU9B8FTnWA4', 1703989240, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-31T01:14:08.923Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"e1668143-b334-42da-8269-1cb4dd912fa5\"}'),
('Shan8nGFG6pNwWqSA0nUdlw2IrY-vhxt', 1703983594, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-30T21:51:50.277Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"e1668143-b334-42da-8269-1cb4dd912fa5\"}'),
('bY094nciwp_UPtBzL0WuH2lqz3o5D4JM', 1703988491, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-31T01:49:57.487Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"c5f8ce83-9d1e-4bf5-9902-0567e918f997\"}'),
('kizh3-67j4gShbJGoRPrxSXbHGh5OD4X', 1703986216, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-31T01:30:15.788Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"1e356c18-cda0-4741-808c-69f8cb284735\"}'),
('nuwhEeCoLIuOTW31VagUggt9c5tMqoA_', 1704049913, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-31T19:08:18.353Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"e1668143-b334-42da-8269-1cb4dd912fa5\"}'),
('nygkMTlj15Rc2PO1axrlN1E3EwmPnIe1', 1704049855, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-31T19:10:54.428Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"1e356c18-cda0-4741-808c-69f8cb284735\"}'),
('yyLndgapTPwKk1d_crcwL3tesOFi_6Lj', 1703983596, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2023-12-30T22:46:16.631Z\",\"httpOnly\":true,\"path\":\"/\"},\"user_key\":\"c5f8ce83-9d1e-4bf5-9902-0567e918f997\"}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `avatar` varchar(10000) DEFAULT NULL,
  `hash_key` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `password`, `email`, `name`, `lastname`, `role`, `avatar`, `hash_key`) VALUES
(9, '45674567845678202340-04324-', 'test@mail.ru', 'test', 'test', 'Project manager', 'http://localhost:2000/avatars?avatar_name=6.png', 'c5f8ce83-9d1e-4bf5-9902-0567e918f997'),
(10, '4568648458923643263463624', 'b1on1kkk@mail.ru', 'Alex', 'Sinyak', 'Project manager', 'http://localhost:2000/avatars?avatar_name=5.png', 'e1668143-b334-42da-8269-1cb4dd912fa5'),
(11, '1235678956789567567785674567456745673450', 'just74@mail.ru', 'Alexander ', 'Sinyak', 'Project manager', 'http://localhost:2000/avatars?avatar_name=2.png', '1e356c18-cda0-4741-808c-69f8cb284735');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sessiontbl`
--
ALTER TABLE `sessiontbl`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
