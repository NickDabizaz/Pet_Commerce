-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 31 Okt 2023 pada 16.10
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
-- Struktur dari tabel `detailtransaksis`
--

CREATE TABLE `detailtransaksis` (
  `detail_transaksi_id` varchar(10) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` varchar(10) DEFAULT NULL,
  `transaksi_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategoris`
--

CREATE TABLE `kategoris` (
  `kategori_id` varchar(10) NOT NULL,
  `nama_kategori` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `kategoris`
--

INSERT INTO `kategoris` (`kategori_id`, `nama_kategori`, `createdAt`, `updatedAt`) VALUES
('1', 'Makanan', '2023-10-31 21:46:14', '2023-10-31 21:46:14'),
('2', 'Mainan', '2023-10-31 21:46:14', '2023-10-31 21:46:14'),
('3', 'Cemilan', '2023-10-31 21:46:14', '2023-10-31 21:46:14'),
('4', 'Aksesoris', '2023-10-31 21:46:14', '2023-10-31 21:46:14'),
('5', 'Pakaian Hewan', '2023-10-31 21:46:14', '2023-10-31 21:46:14'),
('6', 'Obat dan Vitamin', '2023-10-31 21:46:14', '2023-10-31 21:46:14');

-- --------------------------------------------------------

--
-- Struktur dari tabel `komentars`
--

CREATE TABLE `komentars` (
  `komentar_id` varchar(10) NOT NULL,
  `komentar_text` text DEFAULT NULL,
  `waktu_komentar` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  `postingan_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `likepostingans`
--

CREATE TABLE `likepostingans` (
  `like_id` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  `postingan_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `notifikasitransaksis`
--

CREATE TABLE `notifikasitransaksis` (
  `notifikasi_id` varchar(10) NOT NULL,
  `tanggal` datetime DEFAULT NULL,
  `pesan` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `postingans`
--

CREATE TABLE `postingans` (
  `postingan_id` varchar(10) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  `toko_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `produks`
--

CREATE TABLE `produks` (
  `product_id` varchar(10) NOT NULL,
  `nama_produk` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `kategori_id` varchar(10) DEFAULT NULL,
  `toko_id` varchar(10) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `reviews`
--

CREATE TABLE `reviews` (
  `review_id` varchar(10) NOT NULL,
  `rating` float DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  `product_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sharepostingans`
--

CREATE TABLE `sharepostingans` (
  `share_id` varchar(10) NOT NULL,
  `link_share` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  `postingan_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `cart_id` varchar(10) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  `product_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tokos`
--

CREATE TABLE `tokos` (
  `toko_id` varchar(10) NOT NULL,
  `nama_toko` varchar(255) DEFAULT NULL,
  `deskripsi_toko` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tokos`
--

INSERT INTO `tokos` (`toko_id`, `nama_toko`, `deskripsi_toko`, `createdAt`, `updatedAt`, `user_id`) VALUES
('1', 'Toko Baru', 'Deskripsi Toko Baru', '2023-10-31 14:34:08', '2023-10-31 14:34:08', '1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksis`
--

CREATE TABLE `transaksis` (
  `transaksi_id` varchar(10) NOT NULL,
  `tanggal_transaksi` datetime DEFAULT NULL,
  `total_harga` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `user_id` varchar(10) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `nomor_telepon` varchar(15) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `nama`, `email`, `password`, `alamat`, `nomor_telepon`, `token`, `role`, `createdAt`, `updatedAt`) VALUES
('1', 'John Doe', 'john.doe@example.com', 'password123', '123 Main Street', '1234567890', NULL, 'seller', '2023-10-30 13:54:13', '2023-10-30 13:55:34');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `detailtransaksis`
--
ALTER TABLE `detailtransaksis`
  ADD PRIMARY KEY (`detail_transaksi_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `transaksi_id` (`transaksi_id`);

--
-- Indeks untuk tabel `kategoris`
--
ALTER TABLE `kategoris`
  ADD PRIMARY KEY (`kategori_id`);

--
-- Indeks untuk tabel `komentars`
--
ALTER TABLE `komentars`
  ADD PRIMARY KEY (`komentar_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `postingan_id` (`postingan_id`);

--
-- Indeks untuk tabel `likepostingans`
--
ALTER TABLE `likepostingans`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `postingan_id` (`postingan_id`);

--
-- Indeks untuk tabel `notifikasitransaksis`
--
ALTER TABLE `notifikasitransaksis`
  ADD PRIMARY KEY (`notifikasi_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `postingans`
--
ALTER TABLE `postingans`
  ADD PRIMARY KEY (`postingan_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `toko_id` (`toko_id`);

--
-- Indeks untuk tabel `produks`
--
ALTER TABLE `produks`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `kategori_id` (`kategori_id`),
  ADD KEY `toko_id` (`toko_id`);

--
-- Indeks untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeks untuk tabel `sharepostingans`
--
ALTER TABLE `sharepostingans`
  ADD PRIMARY KEY (`share_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `postingan_id` (`postingan_id`);

--
-- Indeks untuk tabel `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indeks untuk tabel `tokos`
--
ALTER TABLE `tokos`
  ADD PRIMARY KEY (`toko_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`transaksi_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `detailtransaksis`
--
ALTER TABLE `detailtransaksis`
  ADD CONSTRAINT `detailtransaksis_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `produks` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `detailtransaksis_ibfk_2` FOREIGN KEY (`transaksi_id`) REFERENCES `transaksis` (`transaksi_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `komentars`
--
ALTER TABLE `komentars`
  ADD CONSTRAINT `komentars_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `komentars_ibfk_2` FOREIGN KEY (`postingan_id`) REFERENCES `postingans` (`postingan_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `likepostingans`
--
ALTER TABLE `likepostingans`
  ADD CONSTRAINT `likepostingans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `likepostingans_ibfk_2` FOREIGN KEY (`postingan_id`) REFERENCES `postingans` (`postingan_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `notifikasitransaksis`
--
ALTER TABLE `notifikasitransaksis`
  ADD CONSTRAINT `notifikasitransaksis_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `postingans`
--
ALTER TABLE `postingans`
  ADD CONSTRAINT `postingans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `postingans_ibfk_2` FOREIGN KEY (`toko_id`) REFERENCES `tokos` (`toko_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `produks`
--
ALTER TABLE `produks`
  ADD CONSTRAINT `produks_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `kategoris` (`kategori_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `produks_ibfk_2` FOREIGN KEY (`toko_id`) REFERENCES `tokos` (`toko_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `produks` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `sharepostingans`
--
ALTER TABLE `sharepostingans`
  ADD CONSTRAINT `sharepostingans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `sharepostingans_ibfk_2` FOREIGN KEY (`postingan_id`) REFERENCES `postingans` (`postingan_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD CONSTRAINT `shoppingcarts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `shoppingcarts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `produks` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tokos`
--
ALTER TABLE `tokos`
  ADD CONSTRAINT `tokos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transaksis`
--
ALTER TABLE `transaksis`
  ADD CONSTRAINT `transaksis_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
