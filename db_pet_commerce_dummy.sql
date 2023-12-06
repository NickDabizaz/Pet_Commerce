








SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;











DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `categories` (`category_id`, `category_name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Food', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(2, 'Toys', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(3, 'Snacks', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(4, 'Accessories', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(5, 'Pet Clothing', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(6, 'Medicine and Vitamins', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL),
(7, 'Clothing', '2023-10-31 21:46:14', '2023-10-31 21:46:14', NULL);







DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_text` text DEFAULT NULL,
  `comment_time` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;







DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE IF NOT EXISTS `orderdetails` (
  `detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `qty` int(11) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`detail_id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `orderdetails` (`detail_id`, `qty`, `subtotal`, `createdAt`, `updatedAt`, `deletedAt`, `product_id`, `order_id`) VALUES
(1, 5, 150000, '2023-12-05 18:08:54', '2023-12-05 18:08:54', NULL, NULL, 5);







DROP TABLE IF EXISTS `ordernotifications`;
CREATE TABLE IF NOT EXISTS `ordernotifications` (
  `notification_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`notification_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;







DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_date` datetime DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `orders` (`order_id`, `order_date`, `total_price`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`) VALUES
(5, '2023-12-05 18:08:53', 150000, '2023-12-05 18:08:53', '2023-12-05 18:08:53', NULL, 3);







DROP TABLE IF EXISTS `postlikes`;
CREATE TABLE IF NOT EXISTS `postlikes` (
  `like_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `postlikes` (`like_id`, `user_id`, `post_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(3, 1, 1, '2023-12-05 15:08:26', '2023-12-05 15:08:34', '2023-12-05 15:08:34'),
(4, 1, 2, '2023-12-05 15:08:30', '2023-12-05 15:08:30', NULL),
(5, 1, 1, '2023-12-05 15:08:36', '2023-12-05 15:42:03', '2023-12-05 15:42:03'),
(6, 1, 4, '2023-12-05 15:08:44', '2023-12-05 15:08:46', '2023-12-05 15:08:46'),
(7, 2, 1, '2023-12-05 15:09:11', '2023-12-05 15:09:11', NULL),
(8, 1, 1, '2023-12-05 15:42:06', '2023-12-05 16:51:32', '2023-12-05 16:51:32'),
(9, 1, 4, '2023-12-05 15:42:09', '2023-12-05 15:42:09', NULL),
(10, 1, 6, '2023-12-05 15:52:20', '2023-12-05 15:52:20', NULL),
(11, 1, 1, '2023-12-05 16:51:38', '2023-12-05 16:52:18', '2023-12-05 16:52:18'),
(12, 1, 1, '2023-12-05 16:52:21', '2023-12-05 16:54:31', '2023-12-05 16:54:31'),
(13, 1, 1, '2023-12-05 17:07:11', '2023-12-05 17:07:11', NULL);







DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `posts` (`post_id`, `title`, `user_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'AING MAUNGG!!', 3, '2023-12-04 07:19:51', '2023-12-04 07:19:51', NULL),
(2, 'UWEKKK :P', 3, '2023-12-04 07:21:58', '2023-12-04 07:21:58', NULL),
(3, 'pakboi', 3, '2023-12-04 07:23:13', '2023-12-04 07:23:13', NULL),
(4, 'Pacarku daki', 3, '2023-12-04 07:24:05', '2023-12-04 07:24:05', NULL),
(5, 'ihihi', 1, '2023-12-04 15:47:19', '2023-12-04 15:47:19', NULL),
(6, 'Laper bang, hiks :(', 1, '2023-12-05 15:52:11', '2023-12-05 15:52:11', NULL);







DROP TABLE IF EXISTS `postshares`;
CREATE TABLE IF NOT EXISTS `postshares` (
  `share_id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`share_id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;







DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_description` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  KEY `store_id` (`store_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `price`, `rating`, `category_id`, `store_id`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Happy Dog Makanan Anjing Basah Sensible Pure Africa Ostrich 400gr', 'Makanan%20anjing%20basah%20Happy%20Dog%20Sensible%20Pure%20Africa%20Ostrich%20untuk%20anjing%20dewasa.%0A%0AIdeal%20bagi%20para%20pecinta%20daging%2C%20Happy%20Dog%20Sensible%20Pure%20Africa%20terbuat%20100%25%20dari%20daging%20eksklusif%20burung%20unta%20yang%20kaya%20nutrisi%20dan%20ramah%20pencernaan.%20Dilengkapi%20vitamin%20E%20untuk%20meningkatkan%20daya%20tahan%20tubuh.%0A%0A-%20Kadar%20protein%2011.8%25%20dan%20lemak%205.2%25.%0A-%20100%25%20terbuat%20dari%20daging%20burung%20unta.%0A-%20Resep%20grain%20free%20(bebas%20biji-bijian)%20dan%20tanpa%20soya%20dan%20gula.%0A-%20Mengandung%20vitamin%20untuk%20kesehatan%20tubuh%20yang%20optimal.%0A-%20Cocok%20untuk%20pencernaan%20sensitif.%0A-%20Tanpa%20pewarna%20buatan%2C%20penguat%20rasa%2C%20maupun%20pengawet.%0A%0AKomposisi%3A%20Daging%20dan%20produk%20turunan%20hewani%20(70%25%20daging%20otot%20burung%20unta%2C%20jeroan%20burung%20unta)**%2C%20mineral%3B%20*)%20dikarenakan%20keterbatasan%20dalam%20proses%20pembuatan%2C%20pakan%20ini%20masih%20mungkin%20mengandung%20protein%20lain.%0A%0ANilai%20gizi%3A%20Protein%20kasar%2011.8%25%2C%20lemak%20kasar%205.2%25%2C%20abu%20kasar%202.0%25%2C%20serat%20kasar%200.5%25%2C%20kadar%20air%2079.8%25%2C%20Vitamin%20A%20(3a672a)%203000%20IU%2C%20Vitamin%20D3%20(3a671)%20300%20IU%2C%20Vitamin%20E%20(semua%20rac-alpha-tocopheryl%20acetate%203a700)%2012%20mg%2C%20Vitamin%20B1%20(thiamine%20mononitrate%203a821)%202.5%20mg.%0A%0AApakah%20itu%20mixed%20feeding%3F%0AMixed%20feeding%20atau%20mixed%20diet%20yaitu%20mencampur%20makanan%20kering%20dengan%20makanan%20basah.%20Tujuannya%20agar%20mendapatkan%20manfaat%20dari%20keduanya%20sehingga%20mendukung%20kesehatan%20tubuh%20yang%20optimal.%0A%0AApa%20saja%20manfaat%20mixed%20feeding%3F%0A-%20Menambah%20selera%20makan%20anjing%20agar%20makannya%20lahap.%0A-%20Menjaga%20gigi%20dan%20gusi%20tetap%20sehat.%0A-%20Membantu%20mencukupi%20kebutuhan%20minum%20anjing%20dan%20menjaga%20tetap%20terhidrasi.%0A-%20Menjaga%20kesehatan%20ginjal%20dan%20saluran%20kemih.%0A-%20Aroma%20dan%20tekstur%20makanan%20yang%20lezat%20dan%20disukai%20anjing.%0A%0AHarap%20diperhatikan%3A%0A-%20Berikan%20makanan%20pada%20suhu%20ruangan.%0A-%20Air%20minum%20segar%20sebaiknya%20tersedia%20setiap%20saat.%0A-%20Simpan%20di%20tempat%20yang%20sejuk%2C%20kering%20dan%20gelap.%0A-%20Simpan%20di%20lemari%20es%20setelah%20dibuka.%0A%0AMade%20with%20love%20in%20Germany.', 59500, 0, 1, 1, 99, '2023-12-06 12:53:41', '2023-12-06 12:53:41', NULL),
(2, 'Happy Dog Makanan Anjing Dewasa Sensible Neuseeland 11kg', 'Makanan%20anjing%20Happy%20Dog%20Sensible%20Neuseeland%20untuk%20anjing%20dewasa%20ras%20medium-besar%20di%20atas%20umur%2018%20bulan%20dengan%20berat%20badan%20di%20atas%2011%20kg.%0A%0ARangkaian%20eksklusif%20Happy%20Dog%20Sensible%20hadir%20dalam%20kelezatan%20dan%20keunikan%20cita%20rasa%20kuliner%20dunia.%20Sensible%20Neuseeland%20gluten%20free%20(tanpa%20gandum%2C%20jelai%2C%20gandum%20hitam)%20terbuat%20dari%20perpaduan%20daging%20domba%20dan%20beras%20yang%20mudah%20dicerna%20dan%20ditoleransi%20tubuh%2C%20ideal%20untuk%20anjing%20dengan%20pencernaan%20sensitif%20yang%20pemilih%20makanan.%20Mengandung%20kerang%20hijau%20untuk%20memperkuat%20persendian.%0A%0A-%20Kadar%20protein%2021%25%20dan%20lemak%2012%25.%0A-%20Mengandung%20Natural%20Life%20Concept.%0A-%20Gluten%20free%20dengan%20protein%20yang%20mudah%20dicerna%20dari%20daging%20domba.%0A-%20Formula%20ideal%20untuk%20anjing%20aktif%20dengan%20pencernaan%20yang%20sensitif.%0A-%20Mengandung%20kerang%20hijau%20untuk%20memperkuat%20persendian.%0A-%20Diperkaya%20biotin%2C%20zinc%2C%20Omega-3%20dan%206%20untuk%20kesehatan%20kulit%20dan%20bulu.%0A-%20Ukuran%20kibble%20besar%3A%2019%20mm%20x%206%20mm.%0A%0AKomposisi%3A%20Protein%20domba*%20(20%25)%2C%20tepung%20beras%20(20%25)%2C%20tepung%20jagung%2C%20jagung%2C%20protein%20beras*%20(10%25)%2C%20lemak%20hewani%20(termasuk%20unggas)%2C%20bubur%20bit*%20(tanpa%20gula)%2C%20hidrolisat%20hati%2C%20minyak%20bunga%20matahari%2C%20apel%20pomace*%2C%20kalium%20klorida%2C%20minyak%20kanola%2C%20ragi*%2C%20sodium%20klorida%2C%20rumput%20laut*%2C%20biji%20rami%2C%20daging%20kerang%20hijau*%20(0.05%25)%2C%20ragi*%20(ekstrak)%2C%20milk%20thistle%2C%20artichoke%2C%20dandelion%2C%20jahe%2C%20daun%20birch%2C%20jelatang%2C%20kamomil%2C%20ketumbar%2C%20rosemary%2C%20sage%2C%20akar%20licorice%2C%20timi%20(total%20herbal%20kering%3A%200.17%25)%3B%20*)%20dikeringkan.%0A%0ANilai%20gizi%3A%20Protein%20kasar%2021%25%2C%20lemak%20kasar%2012%25%2C%20serat%20kasar%203%25%2C%20abu%20kasar%207.5%25%2C%20kalsium%201.6%25%2C%20fosfor%201.05%25%2C%20sodium%200.35%25%2C%20kalium%200.55%25%2C%20magnesium%200.09%25%2C%20Omega-6%202.8%25%2C%20Omega-3%200.3%25.%0A%0ANatural%20Life%20Concept%3A%0A-%20Bahan%20natural%20tanpa%20GMO%2C%20pengawet%2C%20penguat%20rasa%2C%20dan%20pewarna%20buatan.%0A-%20Protein%20hewani%20yang%20digunakan%20mencapai%2090%25%20dari%20total%20protein.%0A-%20Variasi%20herbal%20untuk%20mengoptimalkan%20kesehatan%20tubuh.%0A-%20Kaya%20Omega-3%20dan%206%20untuk%20merawat%20kulit%20dan%20bulu%20yang%20sehat%20dan%20berkilau.%0A-%20Mendukung%20persendian%20yang%20kuat%20dan%20saluran%20pencernaan%20yang%20sehat.%0A%0AMade%20with%20love%20in%20Germany.', 1037000, 0, 1, 1, 10, '2023-12-06 12:57:11', '2023-12-06 12:57:11', NULL),
(3, 'Happy Dog Makanan Anak Anjing Naturcroq Puppy 1kg', 'Makanan%20anjing%20Happy%20Dog%20NaturCroq%20Puppy%20untuk%20anak%20anjing%20ras%20medium-besar%20umur%201-6%20bulan%20dan%20anjing%20hamil%20atau%20menyusui.%0A%0ADukung%20perkembangan%20anak%20anjing%20di%20fase%20pertamanya%20dengan%20sumber%20protein%20dan%20vitamin%20berkualitas.%20Terbuat%20dari%20protein%20utama%20unggas%20dan%20tambahan%20wortel%2C%20selada%2C%20dan%20oat%20menjadikan%20makanan%20ini%20bernutrisi%20penuh%20dan%20menyehatkan.%20Nutrisi%20yang%20lengkap%20ideal%20untuk%20menunjang%20kebutuhan%20khusus%20anjing%20hamil%20dan%20menyusui.%0A%0A-%20Kadar%20protein%2029%25%20dan%20lemak%2014%25.%0A-%20Terbuat%20dari%20protein%20utama%20unggas%20yang%20mudah%20dicerna.%0A-%20Diperkaya%20vitamin%20dan%20antioksidan%20untuk%20meningkatkan%20daya%20tahan%20tubuh.%0A-%20Mengandung%20kalsium%20dan%20vitamin%20D3%20untuk%20kekuatan%20tulang%20yang%20optimal.%0A-%20Ukuran%20kibble%20kecil%3A%207%20mm%20x%207%20mm.%0A%0AKomposisi%3A%20Protein%20unggas*%2C%20tepung%20terigu%2C%20tepung%20jagung%2C%20tepung%20beras%2C%20tepung%20daging%2C%20jagung%20utuh%2C%20lemak%20unggas%2C%20lemak%20sapi%2C%20tepung%20ikan%2C%20bubur%20bit*%20(tanpa%20gula)%2C%20hidrolisat%20hati%2C%20apel%20pomace*%20(0.8%25)%2C%20ragi*%2C%20wortel*%2C%20sodium%20klorida%2C%20oat%20hijau*%2C%20bunga%20matahari*%2C%20selada*%2C%20peterseli*%20(total%20herbal%20hijau%3A%200.3%25)%3B%20*)%20dikeringkan.%0A%0ANilai%20gizi%3A%20Protein%20kasar%2029%25%2C%20lemak%20kasar%2014%25%2C%20serat%20kasar%203%25%2C%20abu%20kasar%207.5%25%2C%20kalsium%201.65%25%2C%20fosfor%201.1%25%2C%20sodium%200.25%25%2C%20kalium%200.5%25%2C%20magnesium%200.11%25%2C%20Omega-6%202.2%25%2C%20Omega-3%200.3%25.%0A%0AKenapa%20mempercayakan%20nutrisi%20kucing%20dan%20anjingmu%20dengan%20Happy%20Cat%20dan%20Happy%20Dog%3F%0A-%20Happy%20Cat%20dan%20Happy%20Dog%20menggunakan%20daging%20berkualitas%20tinggi%20yang%20didapatkan%20dari%20peternakan%20terbaik.%0A-%20Terbuat%20dari%20bahan%20alami%20pilihan%20yang%20berasal%20dari%20agrikultur%20Jerman%20dan%20sekitarnya.%0A-%20Tidak%20mengandung%20pewarna%2C%20perisa%20dan%20gula%20tambahan%2C%20pengawet%2C%20soya%2C%20maupun%20bahan%20rekayasa%20genetika.%0A-%20Happy%20Cat%20dan%20Happy%20Dog%20menjamin%20daya%20cerna%20yang%20tinggi.%0A-%20Diproduksi%20dengan%20standar%20tertinggi%20menggunakan%20metode%20Thermostufenmix%C2%AE.%0A-%20Pengujian%20mutu%20dan%20keamanan%20pangan%20Happy%20Cat%20dan%20Happy%20Dog%20diuji%20oleh%20institusi%20teknologi%20analisa%20pangan%20IfU-LAT%20GmbH.%0A%0AMade%20with%20love%20in%20Germany.', 86500, 0, 1, 1, 99, '2023-12-06 12:58:04', '2023-12-06 12:58:04', NULL),
(4, 'Baju Kucing Anjing Model Dinosaurus Kostum Cat Dog Pakaian Hoodie - XS', 'Kostum%20lucu%20untuk%20anabul.%20Terbuat%20dari%20bahan%20fleece%20yg%20halus%2C%20lembut%20dan%20nyaman%20dipakai.Bisa%20dipakai%20untuk%20semua%20jenis%20anjing%20dan%20kucing%0A%0ARekomendasi%20berat%20badan%3A%0AXS%201-1.5kg%0AS%201.5-2.5kg%0AM%202-3kg%0AL%203-4kg%0AXL%204-6kg%0AXXL%206-10kg%0A%0A**Tetap%20ukur%20lingkar%20dada%20anabul%20anda%2C%20agar%20lebih%20pasti%20%F0%9F%99%8F%F0%9F%8F%BB**%0A%0AAbout%20Pawsitive%20Vibes%0A%E2%80%A2100%25%20Original%20product%0A%E2%80%A2FREE%20packaging%20bubble%20dan%20kardus%20untuk%20produk%20yg%20riskan%2Fgampang%20rusak.%0A%E2%80%A2Product%20selalu%20fresh(masa%20exp%20lama)%0A%E2%80%A2Gojek%2C%20Grab%2C%20Instant%2C%20Reguler%20avaiable%20senin-sabtu%0A%E2%80%A2Jam%20Operasional%2008%3A00-15%3A00.%20Order%20diluar%20jam%20operasional%20akan%20dikirim%20ketika%20beroperasi%20kembali.', 29900, 0, 7, 2, 10, '2023-12-06 13:28:55', '2023-12-06 13:28:55', NULL),
(5, 'Baju Kucing Anjing Model Dinosaurus Kostum Cat Dog Pakaian Hoodie - S', 'Kostum%20lucu%20untuk%20anabul.%20Terbuat%20dari%20bahan%20fleece%20yg%20halus%2C%20lembut%20dan%20nyaman%20dipakai.Bisa%20dipakai%20untuk%20semua%20jenis%20anjing%20dan%20kucing%0A%0ARekomendasi%20berat%20badan%3A%0AXS%201-1.5kg%0AS%201.5-2.5kg%0AM%202-3kg%0AL%203-4kg%0AXL%204-6kg%0AXXL%206-10kg%0A%0A**Tetap%20ukur%20lingkar%20dada%20anabul%20anda%2C%20agar%20lebih%20pasti%20%F0%9F%99%8F%F0%9F%8F%BB**%0A%0AAbout%20Pawsitive%20Vibes%0A%E2%80%A2100%25%20Original%20product%0A%E2%80%A2FREE%20packaging%20bubble%20dan%20kardus%20untuk%20produk%20yg%20riskan%2Fgampang%20rusak.%0A%E2%80%A2Product%20selalu%20fresh(masa%20exp%20lama)%0A%E2%80%A2Gojek%2C%20Grab%2C%20Instant%2C%20Reguler%20avaiable%20senin-sabtu%0A%E2%80%A2Jam%20Operasional%2008%3A00-15%3A00.%20Order%20diluar%20jam%20operasional%20akan%20dikirim%20ketika%20beroperasi%20kembali.', 29900, 0, 1, 2, 10, '2023-12-06 13:29:16', '2023-12-06 13:29:16', NULL),
(6, 'Baju Kucing Anjing Model Dinosaurus Kostum Cat Dog Pakaian Hoodie - M', 'Kostum%20lucu%20untuk%20anabul.%20Terbuat%20dari%20bahan%20fleece%20yg%20halus%2C%20lembut%20dan%20nyaman%20dipakai.Bisa%20dipakai%20untuk%20semua%20jenis%20anjing%20dan%20kucing%0A%0ARekomendasi%20berat%20badan%3A%0AXS%201-1.5kg%0AS%201.5-2.5kg%0AM%202-3kg%0AL%203-4kg%0AXL%204-6kg%0AXXL%206-10kg%0A%0A**Tetap%20ukur%20lingkar%20dada%20anabul%20anda%2C%20agar%20lebih%20pasti%20%F0%9F%99%8F%F0%9F%8F%BB**%0A%0AAbout%20Pawsitive%20Vibes%0A%E2%80%A2100%25%20Original%20product%0A%E2%80%A2FREE%20packaging%20bubble%20dan%20kardus%20untuk%20produk%20yg%20riskan%2Fgampang%20rusak.%0A%E2%80%A2Product%20selalu%20fresh(masa%20exp%20lama)%0A%E2%80%A2Gojek%2C%20Grab%2C%20Instant%2C%20Reguler%20avaiable%20senin-sabtu%0A%E2%80%A2Jam%20Operasional%2008%3A00-15%3A00.%20Order%20diluar%20jam%20operasional%20akan%20dikirim%20ketika%20beroperasi%20kembali.', 29900, 0, 1, 2, 10, '2023-12-06 13:29:29', '2023-12-06 13:29:29', NULL),
(7, 'Baju Kucing Anjing Model Dinosaurus Kostum Cat Dog Pakaian Hoodie - L', 'Kostum%20lucu%20untuk%20anabul.%20Terbuat%20dari%20bahan%20fleece%20yg%20halus%2C%20lembut%20dan%20nyaman%20dipakai.Bisa%20dipakai%20untuk%20semua%20jenis%20anjing%20dan%20kucing%0A%0ARekomendasi%20berat%20badan%3A%0AXS%201-1.5kg%0AS%201.5-2.5kg%0AM%202-3kg%0AL%203-4kg%0AXL%204-6kg%0AXXL%206-10kg%0A%0A**Tetap%20ukur%20lingkar%20dada%20anabul%20anda%2C%20agar%20lebih%20pasti%20%F0%9F%99%8F%F0%9F%8F%BB**%0A%0AAbout%20Pawsitive%20Vibes%0A%E2%80%A2100%25%20Original%20product%0A%E2%80%A2FREE%20packaging%20bubble%20dan%20kardus%20untuk%20produk%20yg%20riskan%2Fgampang%20rusak.%0A%E2%80%A2Product%20selalu%20fresh(masa%20exp%20lama)%0A%E2%80%A2Gojek%2C%20Grab%2C%20Instant%2C%20Reguler%20avaiable%20senin-sabtu%0A%E2%80%A2Jam%20Operasional%2008%3A00-15%3A00.%20Order%20diluar%20jam%20operasional%20akan%20dikirim%20ketika%20beroperasi%20kembali.', 29900, 0, 1, 2, 10, '2023-12-06 13:29:42', '2023-12-06 13:29:42', NULL),
(8, 'Kostum Kucing Anjing Model Wig Rambut Singa - Kostum Wig Singa - M', 'Wig%20Rambut%20Singa%0A%0AUkuran%20Lingkar%20kepala%0AS%20%3A%2028%20cm%0AM%20%3A%2032%20cm%0AL%20%3A%2038%20cm%0A%0AKostum%20untuk%20anjing%20dan%20kucing%20ini%20berbentuk%20wig%20%2F%20rambut%20singa.%20Jika%20di%20pakaikan%20ke%20kucing%20dan%20anjing%20kesayangan%20anda%2C%20maka%20kucing%20dan%20anjing%20peliharaan%20anda%20akan%20kelihatan%20sangat%20lucu%20dan%20gemas.%20Karena%20imut%20imut%20berkepala%20singa.%0A%0AKelebihan%3A%0A%F0%9F%90%BE%20Bahan%20kain%20wol%20dan%20100%25%20kain%20polyster.%0A%F0%9F%90%BE%20Bahan%20luar%20dalam%20sangat%20halus%20seperti%20bahan%20bulu%20boneka.%0A%F0%9F%90%BE%20Jahitan%20Rapi%20%26%20Kuat%2C%20ukuran%20bisa%20disesuaikan.%0A%F0%9F%90%BE%20Tidak%20Kaku%20%2C%20Tidak%20Tipis%20dan%20Tidak%20Luntur.%0A%0AAbout%20Pawsitive%20Vibes%20%F0%9F%90%BE%0A%E2%80%A2100%25%20Original%20product%0A%E2%80%A2FREE%20packaging%20bubble%20dan%20kardus%20untuk%20produk%20yg%20riskan%2Fgampang%20rusak.%0A%E2%80%A2Jam%20Operasional%2008%3A00-15%3A00.%20Order%20diluar%20jam%20operasional%20akan%20dikirim%20ketika%20beroperasi%20kembali.', 44900, 0, 7, 2, 10, '2023-12-06 13:30:48', '2023-12-06 13:30:48', NULL),
(9, 'Kostum Kucing Anjing Model Wig Rambut Singa - Kostum Wig Singa - S', 'Wig%20Rambut%20Singa%0A%0AUkuran%20Lingkar%20kepala%0AS%20%3A%2028%20cm%0AM%20%3A%2032%20cm%0AL%20%3A%2038%20cm%0A%0AKostum%20untuk%20anjing%20dan%20kucing%20ini%20berbentuk%20wig%20%2F%20rambut%20singa.%20Jika%20di%20pakaikan%20ke%20kucing%20dan%20anjing%20kesayangan%20anda%2C%20maka%20kucing%20dan%20anjing%20peliharaan%20anda%20akan%20kelihatan%20sangat%20lucu%20dan%20gemas.%20Karena%20imut%20imut%20berkepala%20singa.%0A%0AKelebihan%3A%0A%F0%9F%90%BE%20Bahan%20kain%20wol%20dan%20100%25%20kain%20polyster.%0A%F0%9F%90%BE%20Bahan%20luar%20dalam%20sangat%20halus%20seperti%20bahan%20bulu%20boneka.%0A%F0%9F%90%BE%20Jahitan%20Rapi%20%26%20Kuat%2C%20ukuran%20bisa%20disesuaikan.%0A%F0%9F%90%BE%20Tidak%20Kaku%20%2C%20Tidak%20Tipis%20dan%20Tidak%20Luntur.%0A%0AAbout%20Pawsitive%20Vibes%20%F0%9F%90%BE%0A%E2%80%A2100%25%20Original%20product%0A%E2%80%A2FREE%20packaging%20bubble%20dan%20kardus%20untuk%20produk%20yg%20riskan%2Fgampang%20rusak.%0A%E2%80%A2Jam%20Operasional%2008%3A00-15%3A00.%20Order%20diluar%20jam%20operasional%20akan%20dikirim%20ketika%20beroperasi%20kembali.%0A%E2%80%A2Grab%2CGojek%2CInstant%20Available%20Senin-Sabtu.%0A%E2%80%A2JNT%20Senin-Sabtu.', 39900, 0, 1, 2, 10, '2023-12-06 13:31:03', '2023-12-06 13:31:03', NULL),
(10, 'Kostum Kucing Anjing Model Wig Rambut Singa - Kostum Wig Singa - L', 'Wig%20Rambut%20Singa%0A%0AUkuran%20Lingkar%20kepala%0AS%20%3A%2028%20cm%0AM%20%3A%2032%20cm%0AL%20%3A%2038%20cm%0A%0AKostum%20untuk%20anjing%20dan%20kucing%20ini%20berbentuk%20wig%20%2F%20rambut%20singa.%20Jika%20di%20pakaikan%20ke%20kucing%20dan%20anjing%20kesayangan%20anda%2C%20maka%20kucing%20dan%20anjing%20peliharaan%20anda%20akan%20kelihatan%20sangat%20lucu%20dan%20gemas.%20Karena%20imut%20imut%20berkepala%20singa.%0A%0AKelebihan%3A%0A%F0%9F%90%BE%20Bahan%20kain%20wol%20dan%20100%25%20kain%20polyster.%0A%F0%9F%90%BE%20Bahan%20luar%20dalam%20sangat%20halus%20seperti%20bahan%20bulu%20boneka.%0A%F0%9F%90%BE%20Jahitan%20Rapi%20%26%20Kuat%2C%20ukuran%20bisa%20disesuaikan.%0A%F0%9F%90%BE%20Tidak%20Kaku%20%2C%20Tidak%20Tipis%20dan%20Tidak%20Luntur.%0A%0AAbout%20Pawsitive%20Vibes%20%F0%9F%90%BE%0A%E2%80%A2100%25%20Original%20product%0A%E2%80%A2FREE%20packaging%20bubble%20dan%20kardus%20untuk%20produk%20yg%20riskan%2Fgampang%20rusak.%0A%E2%80%A2Jam%20Operasional%2008%3A00-15%3A00.%20Order%20diluar%20jam%20operasional%20akan%20dikirim%20ketika%20beroperasi%20kembali.', 49900, 0, 7, 2, 10, '2023-12-06 13:31:24', '2023-12-06 13:31:24', NULL),
(11, 'Paws Hotel Eye Mask - Pet Dog Clothes - Eye Mask only', 'Paws%20Hotel%20Eye%20Mask%0A%0A-%20Eye%20Mask%20only%0A%0ANotes%3A%0A1.%20Due%20to%20the%20different%20monitor%20and%20light%20effect%2C%20the%20actual%20color%20of%20the%20item%20might%20be%20slightly%20different%20from%20the%20color%20showed%20on%20the%20pictures.%20Thank%20you!', 70000, 0, 7, 2, 10, '2023-12-06 13:32:38', '2023-12-06 13:32:38', NULL);







DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `rating` float DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;







DROP TABLE IF EXISTS `shoppingcarts`;
CREATE TABLE IF NOT EXISTS `shoppingcarts` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `shoppingcarts` (`cart_id`, `qty`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`, `product_id`) VALUES
(1, 4, '2023-11-14 17:46:44', '2023-11-16 01:32:19', NULL, 1, NULL),
(2, 1, '2023-11-14 18:48:23', '2023-11-16 01:32:25', '2023-11-16 01:32:25', 1, NULL),
(3, 1, '2023-11-14 18:48:26', '2023-11-16 01:32:26', '2023-11-16 01:32:26', 1, NULL),
(4, 1, '2023-11-14 18:48:28', '2023-11-16 01:32:26', NULL, 1, NULL),
(5, 1, '2023-11-14 18:48:32', '2023-11-14 18:48:32', NULL, 1, NULL),
(6, 4, '2023-11-14 18:48:34', '2023-11-14 18:48:49', NULL, 1, NULL),
(7, 1, '2023-11-15 17:55:59', '2023-11-15 17:55:59', NULL, 1, NULL),
(8, 1, '2023-11-15 17:58:55', '2023-11-15 17:58:55', NULL, 1, NULL),
(9, 1, '2023-11-15 17:59:23', '2023-11-15 17:59:23', NULL, 1, NULL),
(10, 1, '2023-11-15 17:59:30', '2023-11-15 17:59:30', NULL, 1, NULL),
(11, 1, '2023-11-23 02:15:22', '2023-11-23 02:15:22', NULL, 1, NULL),
(12, 5, '2023-12-05 18:08:29', '2023-12-05 18:08:29', '2023-12-05 18:08:54', 3, NULL);







DROP TABLE IF EXISTS `stores`;
CREATE TABLE IF NOT EXISTS `stores` (
  `store_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(255) DEFAULT NULL,
  `store_description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`store_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `stores` (`store_id`, `store_name`, `store_description`, `createdAt`, `updatedAt`, `deletedAt`, `user_id`) VALUES
(1, 'Jaedung Pet Store', 'jual semua kebutuhan peliharaan anda', '2023-12-06 12:53:24', '2023-12-06 12:53:24', NULL, 1),
(2, 'Daebak Pet Store', 'jual semua kebutuhan peliharaan dengan harga miring', '2023-12-06 13:26:36', '2023-12-06 13:26:36', NULL, 3);







DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;





INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `address`, `phone_number`, `token`, `role`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'John Doe', 'john@example.com', 'password123', 'Jl. depan belok kiri', '081987654321', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3MDE4Mzc5NTQsImV4cCI6MTcwMTkyNDM1NH0.1rshcLdMKOON4wruRwB4QoiTmEJEVEGxnN-MxHbRC1I', 'seller', '2023-02-01 10:00:00', '2023-12-06 04:45:54', NULL),
(2, 'Jane Doe', 'jane@example.com', 'password456', 'Jl. kaki aja', '081651237459', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJpYXQiOjE3MDE3OTc1MDYsImV4cCI6MTcwMTg4MzkwNn0.l5o70KnmCiwZ3XjjqLu3fK53kg7SXh69YBuGOOZlLik', 'customer', '2023-02-02 11:00:00', '2023-12-05 17:31:46', NULL),
(3, 'Daebak', 'daebak62@gmail.com', 'daebak62', 'Jl. kebenaran', '081234567891', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhZWJhazYyQGdtYWlsLmNvbSIsImlhdCI6MTcwMTg2ODk5MywiZXhwIjoxNzAxOTU1MzkzfQ.E3u1NQjv-HCmnKx2RGguADsRMsDZyIZPentHez4NvCA', 'seller', '2023-12-04 05:51:05', '2023-12-06 13:23:13', NULL);

ALTER TABLE `comments`
  ADD CONSTRAINT `comments_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_fk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_fk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetails_fk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE SET NULL ON UPDATE CASCADE;




ALTER TABLE `ordernotifications`
  ADD CONSTRAINT `ordernotifications_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;




ALTER TABLE `orders`
  ADD CONSTRAINT `orders_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;




ALTER TABLE `postlikes`
  ADD CONSTRAINT `postlikes_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postlikes_fk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;




ALTER TABLE `posts`
  ADD CONSTRAINT `posts_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;




ALTER TABLE `postshares`
  ADD CONSTRAINT `postshares_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postshares_fk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE;




ALTER TABLE `products`
  ADD CONSTRAINT `products_fk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_fk_2` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE NO ACTION ON UPDATE CASCADE;




ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_fk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE `shoppingcarts`
  ADD CONSTRAINT `shoppingcarts_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `shoppingcarts_fk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;


ALTER TABLE `stores`
  ADD CONSTRAINT `storefk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

