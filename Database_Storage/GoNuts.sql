-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2023 at 10:10 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gonuts`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `NID` int(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `name`, `Email`, `NID`, `password`, `token`) VALUES
('PhantomN3rd', 'Abrar Ahmed', 'abrargroad2000@gmail.com', 21301309, '$2a$08$yPwQUDU4ER9esgGRh5XXGemkmcsVqMSiJJuTcT8L4cv9DQwojHzh2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGhhbnRvbU4zcmQiLCJpYXQiOjE2OTUxOTcyNzksImV4cCI6MTY5NTI4MzY3OX0.4-Nti2I3EOMgASA8p-cjtBx2Q3o-bv3qIjBO41VYHrk');

-- --------------------------------------------------------

--
-- Table structure for table `bands`
--

CREATE TABLE `bands` (
  `BandName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Number` int(11) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `members` text NOT NULL,
  `Songs` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bands`
--

INSERT INTO `bands` (`BandName`, `Email`, `Number`, `genre`, `members`, `Songs`) VALUES
('Arekta Rock Band', 'arektarock@gmail.com', 1758435675, 'Rock', 'Riasat Azmi, Ifaz, Zihan, Rasha, Arjo', 'Eden, Chaap, Arekta Rock Gaan, Tasher Prashad, Upashona, Ke Ami, Shikari Aj Shikar, Tomar Haat Dhore Ami Aj Bhorer Opekkhay, Deepto, Ghum Paranor Gaan, Bhoy, Notun Shokal, Shorgo/Norok.'),
('Artcell', 'artcell@gmail.com', 1758345925, 'Progressive Metal, Hiphop', 'George Lincoln D\'Costa, Kazi Faisal Ahmed, Saef Al Nazi Cézanne, Kazi Shazzadul Asheqeen Shaju and Iqbal Asif Jewel', 'অন্যসময়, পথ চলা, রুপক, মুখোশ, ইতিহাস, কৃত্রিম মানুষ, অবশ অনুভূতির দেয়াল, পাথর বাগান, ছায়ার নিনাদ, তোমাকে, গন্তব্যহীন, অনিকেত প্রান্তর, বাক্স বন্দী'),
('Chirkutt', 'chirkutt@gmail.com', 1842943296, 'Rock', 'Sharmin Sultana Sumi, Emon Chowdhury, Jahid Nirob, Pavel Areen', 'Jaago, Bhalo Lage Na, Kanamachi, Jadur Shohor, Bini Sutoy, Kono Ek Shundor Shondhay, Mitthe, Jadur Shohor, Voboghure, Sharakhon.'),
('Cryptic Fate', 'cfate@gmail.com', 1759439593, 'Heavy Metal', 'Shakib Chowdhury, K. Sarfaraz Latifullah, Farhan Samad, Raef al Hasan Rafa.', 'Akromon, Bishonno Adhaar, Brittanto, Cholo Bangladesh, Danob, Ekhono Shomoy, Gontobbohin, Holud Potro, Obhiman, Onnothay.'),
('Karnival', 'karnival@gmail.com', 1754829654, 'Rock', 'Tinu Rashid, Salmi Rahman, Mousum Dhamai and Khalid Ashraf', 'Jhalmuri, Shob Kichu Bujhona, Premikar Biye, Ghum, Tumar Nil Nil Megh, Mon Shudhu Mon Chuyeche, Shob Khela, Mithya, Shundori Komola, Beshi Valobasha Jai Na.'),
('Lalon', 'lalon@gmail.com', 1843964328, 'Folk, Rock, Fusion', 'Nigar Sultana Sumi, Thein Han Maung Titi, Ashraf Ahmed Turjo, Rafi Islam, Julkar Naim Ratul, Clinton Prottoy', 'Somoy Gele, Khepa, Chatok, Pagol, Taal Tomal, Opar Hoye, Tal Tomal, Moner Manush, Ontora, Shudha Shindhu, Allah Bol, Biprotip.'),
('Meghdol', 'meghdol@gmail.com', 1749854324, 'Folk, Rock', 'Shibu Kumer Shill, Mejbaur Rahman Sumon, Rasheed Sharif Shoaib, Tanbeer Dawood Rony, MG Kibria, Shourov Sarkar, Amzad Hossain', 'Bhindeshi Tara, Fera, Rod Boleche Hobe, Bheja Bheja Chokh, Shopno Bhongo, Bondhu, Shei Tumi, Prem, Jhara Jhara Jhara, Tumi Kon Kanoner Phool.'),
('Nemesis', 'nemesis@gmail.com', 1756789032, 'Alternative Rock', 'Zohad Reza Chowdhury, Sultan Rafsan Khan, Raquibun Nabi Ratul, Dio Haque.', 'Kobor, Gonojowar, Obocheton, Dhushor Shomoy, Adhar, Sesh Kata, Pothe Ebar Namo Sathi, Keno Amar, Dhoro Jodi Hothat Sondhye, Onneshon.');

-- --------------------------------------------------------

--
-- Table structure for table `concert`
--

CREATE TABLE `concert` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Date` date NOT NULL,
  `Description` text NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Venue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `concert`
--

INSERT INTO `concert` (`ID`, `Name`, `Date`, `Description`, `Type`, `Venue`) VALUES
(1, 'Joy Bangla Concert', '2023-08-24', 'Bands: Artcell, Avoid Rafa, Lalon, Chirkutt, Cryptic Fate, Karnival, Meghdol, Nemesis, and Arekta Rock Band', 'All', 1),
(2, 'Dhaka Rock Fest', '2023-08-25', 'Bands: Apekkhik, Arekta Rock Band, Artcell, Bangla Five, Bangu Bibi, Brahmaputra, Cryptic Fate, Fantasy Realm, Karnival, Nemesis, Owned, Power Surge, Sonar Bangla Circus, Torture Goregrinder, Trainwreck, and Unmaad', 'Rock', 3),
(3, 'BRAC Hope Festival 2023', '2023-08-26', 'Bands: Fazlur Rahman Babu, Nagar Baul (James), Arnob, Artcell, Lalon band and Nemesis', 'All', 1),
(4, 'Coke Studio Bangla Concert', '2023-08-27', 'Singers: Meghdol. Mejbaur Rahman Sumon, Mukul Mojumder Ishaan, Riad Hasan, Pollob Vai, Sanzida Mahmood Nandita, Shibu Kumer Shill, Towfique Ahmed and Pritom Hasan.', 'Folk', 2),
(5, 'Dhaka Summer Con', '2023-08-28', 'Old Dhaka Diaries”, “Firoze Jong”, “Indalo”, “Bangla Five”, “Level Five”, “Owned”, “Odd Signature”, “Dads in the Park”, “Hatirpool Sessions and 30 others.', 'Hip Hop', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `UserUsername` varchar(50) NOT NULL,
  `TicketID` int(11) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Price` int(11) NOT NULL,
  `ConcertID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`UserUsername`, `TicketID`, `Type`, `Price`, `ConcertID`) VALUES
('PhantomN3rd', 12345678, 'Regular', 200, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `NID` int(11) NOT NULL,
  `Number` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`NID`, `Number`, `Username`, `Password`, `Email`, `Name`, `token`) VALUES
(21301309, 2147483647, 'PhantomN3rd', '$2a$08$YXgYpFtDlNgCPj3KrecybuuacsHsxN.699RFx91wgLeTYnsfWs1yK', 'abrargroad2000@gmail.com', 'Abrar Ahmed', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGhhbnRvbU4zcmQiLCJpYXQiOjE2OTUxOTcyNzksImV4cCI6MTY5NTI4MzY3OX0.4-Nti2I3EOMgASA8p-cjtBx2Q3o-bv3qIjBO41VYHrk');

-- --------------------------------------------------------

--
-- Table structure for table `venues`
--

CREATE TABLE `venues` (
  `VenueID` int(11) NOT NULL,
  `Address` text NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Capacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `venues`
--

INSERT INTO `venues` (`VenueID`, `Address`, `Name`, `Capacity`) VALUES
(1, 'Dhaka - Mymensingh Highway, 1212', 'BANGLADESH ARMY STADIUM', 20000),
(2, 'Kuril Bishwa Road, Next to 300 ft, Purbachal Express Hwy, Dhaka 1229', 'ICCB HALL 4', 3000),
(3, 'ICCB, Purbachal Link Road, Dhaka', 'ICCB EXPO ZONE', 5000),
(4, 'Bangabandhu National Stadium Rd, Dhaka 1000', 'BANGABANDHU NATIONAL STADIUM', 36000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `NID` (`NID`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Indexes for table `bands`
--
ALTER TABLE `bands`
  ADD PRIMARY KEY (`BandName`),
  ADD UNIQUE KEY `Email_unique` (`Email`);

--
-- Indexes for table `concert`
--
ALTER TABLE `concert`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `concert_ibfk_1` (`Venue`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`TicketID`),
  ADD KEY `UserUsername` (`UserUsername`),
  ADD KEY `ConcertID` (`ConcertID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Username`),
  ADD UNIQUE KEY `NID_unique` (`NID`),
  ADD UNIQUE KEY `Email_unique` (`Email`);

--
-- Indexes for table `venues`
--
ALTER TABLE `venues`
  ADD PRIMARY KEY (`VenueID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `concert`
--
ALTER TABLE `concert`
  ADD CONSTRAINT `concert_ibfk_1` FOREIGN KEY (`Venue`) REFERENCES `venues` (`VenueID`);

--
-- Constraints for table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`UserUsername`) REFERENCES `users` (`Username`),
  ADD CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`ConcertID`) REFERENCES `concert` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
