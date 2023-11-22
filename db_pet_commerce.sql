-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2023 at 11:56 AM
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
-- Database: `db_pet_commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Food', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(2, 'Toys', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(3, 'Snacks', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(4, 'Accessories', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(5, 'Pet Clothing', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(6, 'Medicine and Vitamins', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `comment_text` text DEFAULT NULL,
  `comment_time` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `comment_text`, `comment_time`, `user_id`, `post_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Great post!', '2023-02-05 14:00:00', 2, 1, '2023-02-05 14:00:00', '2023-02-05 14:00:00', NULL),
(2, 'I agree!', '2023-02-06 15:00:00', 1, 2, '2023-02-06 15:00:00', '2023-02-06 15:00:00', NULL),
(3, 'Great post!', '2023-02-05 14:00:00', 2, 1, '2023-02-05 14:00:00', '2023-02-05 14:00:00', NULL),
(4, 'Great post!', '2023-02-05 14:00:00', 2, 1, '2023-02-05 14:00:00', '2023-02-05 14:00:00', NULL),
(5, 'asd', '2023-02-05 14:00:00', 1, 1, '2023-11-07 18:30:33', '2023-11-07 18:30:34', NULL),
(6, 'asdaw', '2023-02-05 14:00:00', 2, 1, '2023-11-07 18:30:37', '2023-11-07 18:30:37', NULL),
(7, 'kiwkiw', '2023-11-08 00:34:20', 1, 1, '2023-11-07 18:30:39', '2023-11-07 18:30:39', NULL),
(8, 'asd', '2023-02-05 14:00:00', 1, 1, '2023-11-07 18:30:41', '2023-11-07 18:30:41', NULL),
(9, 'asdasd', '2023-02-05 14:00:00', 1, 1, '2023-11-07 18:30:43', '2023-11-07 18:30:43', NULL),
(10, 'eeeeeeee', '2023-02-05 14:00:00', 1, 1, '2023-11-07 18:30:46', '2023-11-07 18:30:46', NULL),
(11, 'this post are full of bots omggggggggggggggggggggggggggggggggggggggggggggggggggggg', '2023-02-05 14:00:00', 2, 1, '2023-11-07 18:30:47', '2023-11-07 18:30:47', NULL),
(12, 'omg bottttttttttttssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss asdawdewavegtebetnwsfq3r314egt2hbgw', '2023-02-05 14:00:00', 2, 1, '2023-11-07 18:30:50', '2023-11-07 18:30:50', NULL),
(13, 'a\r\na\r\na\r\na\r\n\r\na\r\na\r\na', '2023-11-08 15:43:06', 2, 1, '2023-11-07 18:30:51', '2023-11-07 18:30:51', NULL),
(14, 'asd awdwad asdasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddk,uhdytnretf,dmnghdjxf zdbrswUAKSUM,SwgHUaqjkswmz gdnzjakmu,djirlku6ei5u64thsnhjmxd,kiclukey5jrsthgnxhmd jcl ul666 kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkeo', '2023-11-08 15:44:04', 3, 1, '2023-11-07 18:30:53', '2023-11-07 18:30:53', NULL),
(15, NULL, NULL, NULL, NULL, '2023-11-07 18:30:56', '2023-11-07 18:30:56', NULL),
(16, NULL, NULL, NULL, NULL, '2023-11-07 18:30:58', '2023-11-07 18:30:58', NULL),
(17, 'asd', '2023-11-15 18:29:15', 1, 1, '2023-11-15 18:29:15', '2023-11-15 18:29:15', NULL),
(18, 'www', '2023-11-15 18:29:20', 1, 1, '2023-11-15 18:29:20', '2023-11-15 18:29:20', NULL),
(19, 'frdf', '2023-11-16 01:35:17', 1, 3, '2023-11-16 01:35:17', '2023-11-16 01:35:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `detail_id` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ordernotifications`
--

CREATE TABLE `ordernotifications` (
  `notification_id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_date` datetime DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `postlikes`
--

CREATE TABLE `postlikes` (
  `like_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `postlikes`
--

INSERT INTO `postlikes` (`like_id`, `user_id`, `post_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 2, '2023-02-07 16:00:00', '2023-02-07 16:00:00', NULL),
(2, 2, 1, '2023-02-08 17:00:00', '2023-02-08 17:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `title`, `user_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'My first post', 1, '2023-02-03 12:00:00', '2023-02-03 12:00:00', NULL),
(2, 'Fun toys for pets', 2, '2023-02-04 13:00:00', '2023-02-04 13:00:00', NULL),
(3, 'My first post', 1, '2023-02-03 12:00:00', '2023-02-03 12:00:00', NULL),
(4, 'My first post', 1, '2023-02-03 12:00:00', '2023-02-03 12:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `postshares`
--

CREATE TABLE `postshares` (
  `share_id` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `postshares`
--

INSERT INTO `postshares` (`share_id`, `link`, `user_id`, `post_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'https://example.com/post/1', 1, 1, '2023-02-12 10:00:00', '2023-02-12 10:00:00', NULL),
(2, 'https://example.com/post/2', 2, 2, '2023-02-13 11:00:00', '2023-02-13 11:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `price`, `rating`, `category_id`, `store_id`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Product 1', 100, 4, 1, 1, 10, '2023-11-07 15:23:07', '2023-11-07 15:23:07', NULL),
(2, 'Product 2', 100, 0, 1, 1, 10, '2023-11-07 15:23:11', '2023-11-07 15:23:11', NULL),
(3, 'Product 3', 100, 0, 1, 1, 10, '2023-11-07 15:23:14', '2023-11-07 15:23:14', NULL),
(4, 'Product 5\r\n', 100, 0, 1, 1, 10, '2023-11-07 15:23:14', '2023-11-07 15:23:14', NULL),
(5, 'Product 4\r\n', 100, 0, 1, 1, 10, '2023-11-07 15:23:14', '2023-11-07 15:23:14', NULL),
(6, 'Product 6\r\n', 100, 0, 1, 1, 10, '2023-11-07 15:23:14', '2023-11-07 15:23:14', NULL),
(7, 'Product 7\r\n', 100, 0, 1, 1, 10, '2023-11-07 15:23:14', '2023-11-07 15:23:14', NULL),
(8, 'Product 8\r\n', 100, 0, 1, 1, 10, '2023-11-07 15:23:14', '2023-11-07 15:23:14', NULL),
(9, 'Product 9\r\n', 100, 0, 1, 1, 10, '2023-11-07 15:23:14', '2023-11-07 15:23:14', NULL),
(10, 'tjtjuyt', 232, 3, 1, 4, 1233, '2023-11-09 03:32:12', '2023-11-09 03:32:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `rating` float DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `cart_id` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shoppingcarts`
--

INSERT INTO `shoppingcarts` (`cart_id`, `qty`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`, `product_id`) VALUES
(1, 4, '2023-11-14 17:46:44', '2023-11-16 01:32:19', NULL, 1, 2),
(2, 1, '2023-11-14 18:48:23', '2023-11-16 01:32:25', '2023-11-16 01:32:25', 1, 3),
(3, 1, '2023-11-14 18:48:26', '2023-11-16 01:32:26', '2023-11-16 01:32:26', 1, 4),
(4, 1, '2023-11-14 18:48:28', '2023-11-16 01:32:26', NULL, 1, 5),
(5, 1, '2023-11-14 18:48:32', '2023-11-14 18:48:32', NULL, 1, 6),
(6, 4, '2023-11-14 18:48:34', '2023-11-14 18:48:49', NULL, 1, 8),
(7, 1, '2023-11-15 17:55:59', '2023-11-15 17:55:59', NULL, 1, 4),
(8, 1, '2023-11-15 17:58:55', '2023-11-15 17:58:55', NULL, 1, 4),
(9, 1, '2023-11-15 17:59:23', '2023-11-15 17:59:23', NULL, 1, 4),
(10, 1, '2023-11-15 17:59:30', '2023-11-15 17:59:30', NULL, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `store_id` int(11) NOT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `store_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`store_id`, `store_name`, `store_description`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`) VALUES
(1, 'My Store', 'This is my store', '2023-11-07 15:23:04', '2023-11-07 15:23:04', NULL, 3),
(2, 'toko1', 'ini toko pertama', '2023-11-08 12:42:37', '2023-11-08 12:42:37', NULL, 1),
(3, 'toko2', 'ini toko kedua', '2023-11-08 12:43:40', '2023-11-08 12:43:40', NULL, 1),
(4, 'toko3', 'ini toko ketiga', '2023-11-09 03:31:53', '2023-11-09 03:31:53', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `address`, `phone_number`, `token`, `role`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'John Doe', 'john@example.com', 'password123', NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3MDA2NDYyMjUsImV4cCI6MTcwMDczMjYyNX0.watB9IT4UxmnetXb9T61WuMwJuGYnfAKzveY2o9Edv4', 'seller', '2023-02-01 10:00:00', '2023-11-22 09:43:45', NULL),
(2, 'Jane Doe', 'jane@example.com', 'password456', NULL, NULL, NULL, NULL, '2023-02-02 11:00:00', '2023-02-02 11:00:00', NULL),
(3, 'John Doe', 'john@example.com', 'password', '123 Main St', '1234567890', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE2OTkzNzA0MDIsImV4cCI6MTY5OTQ1NjgwMn0.AU7pTlJgSgc6_7xTFGqS5kCWentYoP_tJFV21elqoMo', 'seller', '2023-11-07 15:19:56', '2023-11-07 15:20:02', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`detail_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `ordernotifications`
--
ALTER TABLE `ordernotifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `postlikes`
--
ALTER TABLE `postlikes`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `postshares`
--
ALTER TABLE `postshares`
  ADD PRIMARY KEY (`share_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`store_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ordernotifications`
--
ALTER TABLE `ordernotifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `postlikes`
--
ALTER TABLE `postlikes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `postshares`
--
ALTER TABLE `postshares`
  MODIFY `share_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `store_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ordernotifications`
--
ALTER TABLE `ordernotifications`
  ADD CONSTRAINT `ordernotifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `postlikes`
--
ALTER TABLE `postlikes`
  ADD CONSTRAINT `postlikes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postlikes_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `postshares`
--
ALTER TABLE `postshares`
  ADD CONSTRAINT `postshares_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postshares_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD CONSTRAINT `shoppingcarts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `shoppingcarts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `stores`
--
ALTER TABLE `stores`
  ADD CONSTRAINT `stores_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
