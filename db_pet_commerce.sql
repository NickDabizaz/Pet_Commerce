-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Nov 2023 pada 15.27
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

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
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `comments`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `orderdetails`
--

CREATE TABLE `orderdetails` (
  `detail_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `ordernotifications`
--

CREATE TABLE `ordernotifications` (
  `notification_id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `postlikes`
--

CREATE TABLE `postlikes` (
  `like_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `postshares`
--

CREATE TABLE `postshares` (
  `share_id` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `reviews`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `cart_id` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `stores`
--

CREATE TABLE `stores` (
  `store_id` int(11) NOT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `store_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `stores`
--

INSERT INTO `stores` (`store_id`, `store_name`, `store_description`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`) VALUES
(1, 'Testing Store Di Tampilan', 'Ini Contoh Description Tampilan dari Tampilan', '2023-11-15 14:23:29', '2023-11-15 14:23:29', NULL, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `address`, `phone_number`, `token`, `role`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Nicklaus', 'nicklaus@gmail.com', '123', 'Jl. Rumah no 1', '012345678987', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pY2tsYXVzQGdtYWlsLmNvbSIsImlhdCI6MTcwMDA1ODE3NywiZXhwIjoxNzAwMTQ0NTc3fQ.ct6qS4Q6bDErOudWKDZVB4TP1eYB_DjJHBybUlvCRFo', 'seller', '2023-11-15 14:22:54', '2023-11-15 14:22:57', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indeks untuk tabel `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`detail_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeks untuk tabel `ordernotifications`
--
ALTER TABLE `ordernotifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `postlikes`
--
ALTER TABLE `postlikes`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indeks untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `postshares`
--
ALTER TABLE `postshares`
  ADD PRIMARY KEY (`share_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `store_id` (`store_id`);

--
-- Indeks untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeks untuk tabel `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeks untuk tabel `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`store_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `ordernotifications`
--
ALTER TABLE `ordernotifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `postlikes`
--
ALTER TABLE `postlikes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `postshares`
--
ALTER TABLE `postshares`
  MODIFY `share_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `stores`
--
ALTER TABLE `stores`
  MODIFY `store_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `ordernotifications`
--
ALTER TABLE `ordernotifications`
  ADD CONSTRAINT `ordernotifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `postlikes`
--
ALTER TABLE `postlikes`
  ADD CONSTRAINT `postlikes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postlikes_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `postshares`
--
ALTER TABLE `postshares`
  ADD CONSTRAINT `postshares_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postshares_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD CONSTRAINT `shoppingcarts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `shoppingcarts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `stores`
--
ALTER TABLE `stores`
  ADD CONSTRAINT `stores_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


INSERT INTO `categories` (`category_id`, `category_name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Makanan Kucing', '2023-11-01 10:00:00', '2023-11-01 10:00:00', NULL), 
(2, 'Makanan Anjing', '2023-11-02 11:00:00', '2023-11-02 11:00:00', NULL),
(3, 'Mainan Kucing', '2023-11-03 12:00:00', '2023-11-03 12:00:00', NULL),
(4, 'Mainan Anjing', '2023-11-04 13:00:00', '2023-11-04 13:00:00', NULL),
(5, 'Aksesoris Hewan', '2023-11-05 14:00:00', '2023-11-05 14:00:00', NULL);

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `address`, `phone_number`, `token`, `role`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'John Doe', 'john@example.com', 'password123', 'Jl. Example No.1', '08123456789', NULL, 'customer', '2023-11-06 09:00:00', '2023-11-06 09:00:00', NULL),
(2, 'Jane Doe', 'jane@example.com', 'password456', 'Jl. Example No.2', '08987654321', NULL, 'customer', '2023-11-07 10:00:00', '2023-11-07 10:00:00', NULL), 
(3, 'James Smith', 'james@example.com', 'password789', 'Jl. Example No.3', '08192837465', NULL, 'seller', '2023-11-08 11:00:00', '2023-11-08 11:00:00', NULL),
(4, 'Jennifer Smith', 'jennifer@example.com', 'password321', 'Jl. Example No.4', '08465743829', NULL, 'seller', '2023-11-09 12:00:00', '2023-11-09 12:00:00', NULL),
(5, 'Robert Johnson', 'robert@example.com', 'password159', 'Jl. Example No.5', '08567483921', NULL, 'customer', '2023-11-10 13:00:00', '2023-11-10 13:00:00', NULL);

INSERT INTO `stores` (`store_id`, `store_name`, `store_description`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`) VALUES  
(1, 'Toko Hewan A', 'Toko hewan terlengkap', '2023-11-01 08:00:00', '2023-11-01 08:00:00', NULL, 3),
(2, 'Toko Hewan B', 'Toko hewan murah', '2023-11-02 09:00:00', '2023-11-02 09:00:00', NULL, 4),
(3, 'Toko Hewan C', 'Toko hewan berkualitas', '2023-11-03 10:00:00', '2023-11-03 10:00:00', NULL, 3),
(4, 'Toko Hewan D', 'Toko hewan menyeluruh', '2023-11-04 11:00:00', '2023-11-04 11:00:00', NULL, 4), 
(5, 'Toko Hewan E', 'Toko hewan terbaik', '2023-11-05 12:00:00', '2023-11-05 12:00:00', NULL, 3);

INSERT INTO `products` (`product_id`, `product_name`, `price`, `rating`, `category_id`, `store_id`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Makanan Kucing Meong', 15000, 4.5, 1, 1, 20, '2023-11-06 08:00:00', '2023-11-06 08:00:00', NULL),  
(2, 'Makanan Anjing Gukguk', 25000, 4.2, 2, 2, 30, '2023-11-07 09:00:00', '2023-11-07 09:00:00', NULL),
(3, 'Mainan Kucing Bulu', 5000, 4.8, 3, 3, 10, '2023-11-08 10:00:00', '2023-11-08 10:00:00', NULL),
(4, 'Mainan Anjing Kong', 10000, 4.0, 4, 4, 15, '2023-11-09 11:00:00', '2023-11-09 11:00:00', NULL),
(5, 'Kalung Anjing', 50000, 4.9, 5, 5, 5, '2023-11-10 12:00:00', '2023-11-10 12:00:00', NULL);

INSERT INTO `orders` (`order_id`, `user_id`, `order_date`, `total_price`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, '2023-11-11 10:00:00', 15000, '2023-11-11 10:00:00', '2023-11-11 10:00:00', NULL),
(2, 2, '2023-11-12 11:00:00', 25000, '2023-11-12 11:00:00', '2023-11-12 11:00:00', NULL),  
(3, 1, '2023-11-13 12:00:00', 15000, '2023-11-13 12:00:00', '2023-11-13 12:00:00', NULL),
(4, 3, '2023-11-14 13:00:00', 10000, '2023-11-14 13:00:00', '2023-11-14 13:00:00', NULL),
(5, 4, '2023-11-15 14:00:00', 50000, '2023-11-15 14:00:00', '2023-11-15 14:00:00', NULL);

INSERT INTO `orderdetails` (`detail_id`, `order_id`, `product_id`, `qty`, `subtotal`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 1, 15000, '2023-11-11 10:00:00', '2023-11-11 10:00:00', NULL),
(2, 2, 2, 1, 25000, '2023-11-12 11:00:00', '2023-11-12 11:00:00', NULL),
(3, 3, 1, 1, 15000, '2023-11-13 12:00:00', '2023-11-13 12:00:00', NULL),  
(4, 4, 4, 1, 10000, '2023-11-14 13:00:00', '2023-11-14 13:00:00', NULL),
(5, 5, 5, 1, 50000, '2023-11-15 14:00:00', '2023-11-15 14:00:00', NULL);

INSERT INTO `reviews` (`review_id`, `rating`, `comment`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`, `product_id`) VALUES
(1, 5, 'Bagus sekali', '2023-11-06 13:00:00', '2023-11-06 13:00:00', NULL, 1, 1),
(2, 4, 'Lumayan', '2023-11-07 14:00:00', '2023-11-07 14:00:00', NULL, 2, 2),
(3, 3, 'Biasa saja', '2023-11-08 15:00:00', '2023-11-08 15:00:00', NULL, 1, 3),
(4, 2, 'Kurang bagus', '2023-11-09 16:00:00', '2023-11-09 16:00:00', NULL, 5, 4),  
(5, 1, 'Tidak bagus', '2023-11-10 17:00:00', '2023-11-10 17:00:00', NULL, 4, 5);