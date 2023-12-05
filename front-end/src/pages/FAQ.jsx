import React from 'react';
import { MainLayout } from "../Components";
import faqpict from "../assets/faq.png"
import faqimage from "../assets/faqimage.jpg"

const FAQ = () => {
  return (
    <>
      <MainLayout />
      <div style={{ backgroundColor: "#F3F0F0", height: "680px", paddingTop: "1px" }}>
        <div className="pt-10 pb-10">
          <div
            className="container-fluid rounded shadow"
            style={{
              width: "94%",
              height: "610px",
              backgroundImage: `url(${faqimage})`,
              backgroundSize: "cover",
              overflow: "hidden",
            }}
          >
            <div
              className="container-fluid overflow-y-auto border border-black"
              style={{
                width: "55rem",
                height: "575px",
                marginTop: "1rem",
                marginRight: "40%",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
              }}
            >
              <div>
                <img
                  src={faqpict}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: "8rem",
                    height: "5rem",
                    marginTop: "0.5%",
                    marginLeft: "21rem",
                  }}
                />
              </div>
              <div style={{ paddingTop: "0.5%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>1. Apa yang membedakan Pet Commerce dari toko hewan peliharaan lainnya?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Pet Commerce menawarkan pengalaman belanja yang unik dan lengkap untuk hewan peliharaan Anda.
                  Kami fokus pada menyediakan produk berkualitas tinggi dan layanan pelanggan yang unggul.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>2. Apa saja kategori produk yang tersedia di Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Di Pet Commerce, Anda dapat menemukan makanan, perlengkapan, mainan, dan aksesori untuk berbagai jenis hewan peliharaan,
                  termasuk anjing, kucing, burung, kelinci, dan reptil.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>3. Bagaimana saya melakukan transaksi pada Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Setelah memilih produk yang diinginkan, anda dapat menambahkan produk ke keranjang. Setelah itu, anda dapat menekan tombol keranjang untuk
                  memilih produk mana yang hendak dibeli. Lalu tekanlah tombol Checkout dan ikuti instruksi yang ada hingga pembayaran berhasil.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>4. Bagaimana saya menemukan barang yang saya inginkan secara cepat?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Pada Pet Commerce terdapat fitur untuk melakukan pencarian pada bagian atas halaman website. Terdapat juga fitur filter
                  untuk mempermudah proses pencarian barang sesuai kategori.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>5. Bagaimana cara saya menjual produk saya di Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Pertama-tama lakukan register terlebih dahulu untuk membuat akun sebagai seller. Lalu pergi ke bagian profile dan tekan tombol
                  untuk membuat toko baru. Setelah memasukkan informasi-informasi yang dibutuhkan, toko akan dibuat. Pada toko yang baru dibuat tersebut,
                  anda dapat menambahkan produk-produk baru dengan memasukkan data-data yang diperlukan seperti foto produk, deskripsi, harga, dsb.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>6. Apa itu fitur Community pada Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Fitur Community pada Pet Commerce adalah sebuah fitur untuk setiap user agar dapat berinteraksi dengan sesama pecinta hewan.
                  Anda dapat membahas segala sesuatu yang berkaitan dengan hewan peliharaan anda atau segala sesuatu yang berhubungan dengan hewan.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>7. Berapa kali saya dapat melakukan posting di halaman Community?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Anda dapat melakukan posting sebanyak apapun sesuai yang anda inginkan. Tetapi perlu diingat bahwa postingan yang daoat dipost adalah
                  yang berhubungan dengan hewan saja.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>8. Apakah saya dapat melakukan posting berupa video di halaman Community?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Mohon maaf untuk saat ini Pet Commerce masih belum membuka fitur posting berupa video. Tetapi tenang saja, Pet Commerce akan terus berkembang
                  untuk memenuhi kebutuhan customer setia Pet Commerce 😊.
                </p>
              </div>

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>9. Bagaimana cara melindungi data pribadi saya di Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Pet Commerce berkomitmen untuk melindungi data pribadi Anda. Kami menggunakan berbagai langkah keamanan untuk melindungi data Anda,
                  termasuk enkripsi data pribadi anda, kontrol akses, dan prosedur keamanan fisik.
                </p>
              </div><br />

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata", color: "#1286CE" }}>10. Apa saja metode pembayaran yang dapat saya gunakan di Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata", color: "#1286CE" }}>
                  Pet Commerce menerima berbagai macam metode pembayaran, diantaranya yaitu, kartu kredit, kartu debit, transfer bank, e-wallet, dsb.
                </p>
              </div><br />

              {/* Tambahkan entri FAQ lainnya sesuai dengan format di atas */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
