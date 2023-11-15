import React from 'react';
import { MainLayout } from "../Components";
import faqpict from "../assets/faq.png"

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
              backgroundColor: "#61A0AF",
              overflow: "hidden",
            }}
          >
            <img
              src={faqpict}
              style={{
                display: "block",
                margin: "0 auto",
                width: "8rem",
                height: "5rem",
                marginTop: "0.5%"
              }}
            />
            <div
              className="container-fluid rounded"
              style={{
                width: "99%",
                height: "490px",
                marginTop: "1.5vh",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div style={{ paddingTop: "0.5%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata" }}>1. Apa yang membedakan Pet Commerce dari toko hewan peliharaan lainnya?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata" }}>
                  Pet Commerce menawarkan pengalaman belanja yang unik dan lengkap untuk hewan peliharaan Anda.
                  Kami fokus pada menyediakan produk berkualitas tinggi dan layanan pelanggan yang unggul.
                </p>
              </div>

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata" }}>2. Apa saja kategori produk yang tersedia di Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata" }}>
                  Di Pet Commerce, Anda dapat menemukan makanan, perlengkapan, mainan, dan aksesori untuk berbagai jenis hewan peliharaan,
                  termasuk anjing, kucing, burung, kelinci, dan reptil.
                </p>
              </div>

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata" }}>3. Bagaimana saya dapat melacak status pesanan saya di Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata" }}>
                  Setelah pesanan Anda dikirim, Anda akan menerima email konfirmasi beserta nomor pelacakan.
                  Gunakan nomor tersebut untuk melacak status pengiriman pesanan Anda melalui layanan kurir yang kami gunakan.
                </p>
              </div>

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata" }}>4. Apakah Pet Commerce menawarkan program loyalitas?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata" }}>
                  Ya, Pet Commerce memiliki program loyalitas yang memungkinkan Anda mengumpulkan poin setiap kali berbelanja.
                  Poin tersebut dapat ditukarkan dengan diskon atau produk gratis pada pembelian berikutnya.
                </p>
              </div>

              <div style={{ marginTop: "1%" }}>
                <strong style={{ fontSize: "16pt", fontFamily: "Literata" }}>5. Bagaimana kebijakan pengembalian di Pet Commerce?</strong>
                <p style={{ fontSize: "14pt", fontFamily: "Literata" }}>
                  Kami memiliki kebijakan pengembalian yang jelas. Jika Anda tidak puas dengan produk yang Anda terima,
                  Anda dapat mengembalikannya dalam batas waktu tertentu untuk pengembalian dana atau penukaran.
                </p>
              </div>

              {/* Tambahkan entri FAQ lainnya sesuai dengan format di atas */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
