-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2018 at 01:10 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `2adpro`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `production` int(3) NOT NULL,
  `value1` varchar(100) NOT NULL,
  `value2` varchar(100) NOT NULL,
  `quality` varchar(100) NOT NULL,
  `value3` varchar(100) NOT NULL,
  `value4` varchar(100) NOT NULL,
  `certification` int(5) NOT NULL,
  `value5` varchar(50) NOT NULL,
  `value6` varchar(100) NOT NULL,
  `training` varchar(10) NOT NULL,
  `value7` varchar(100) NOT NULL,
  `value8` varchar(100) NOT NULL,
  `analysis` varchar(100) NOT NULL,
  `value9` varchar(100) NOT NULL,
  `value10` varchar(100) NOT NULL,
  `attendance` varchar(100) NOT NULL,
  `value11` varchar(100) NOT NULL,
  `value12` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`production`, `value1`, `value2`, `quality`, `value3`, `value4`, `certification`, `value5`, `value6`, `training`, `value7`, `value8`, `analysis`, `value9`, `value10`, `attendance`, `value11`, `value12`) VALUES

(4, 'Exceeds Expectations', 'force', '99.1', 'Exceeds Expectations', 'value4', 0, '', '', '', '', '', '', '', '', '', '', ''),
(2, 'Mostly Meets Expectations', 'force', '100', 'Outstanding', 'value4', 0, '', '', '', '', '', '', '', '', '', '', ''),
(2, 'Mostly Meets Expectations', 'force', '100', 'Outstanding', 'light', 0, '', '', '', '', '', '', '', '', '', '', ''),
(5, 'Exceeds Expectations', 'tango', '99.2', 'Exceeds Expectations', 'mango', 4, 'Outstanding', 'click', '', '', '', '', '', '', '', '', ''),
(5, 'Exceeds Expectations', 'tango', '99.2', 'Exceeds Expectations', 'mango', 4, 'Outstanding', 'click', '3', 'Exceeds Expectations', 'greek', '', '', '', '', '', ''),
(5, 'Exceeds Expectations', 'tango', '99.2', 'Exceeds Expectations', 'mango', 4, 'Outstanding', 'click', '3', 'Exceeds Expectations', 'greek', '11', 'Outstanding', 'amazon', '', '', ''),
(5, 'Exceeds Expectations', 'tango', '99.2', 'Exceeds Expectations', 'mango', 4, 'Outstanding', 'click', '3', 'Exceeds Expectations', 'greek', '11', 'Outstanding', 'amazon', '1', 'Meets Expectations', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
