const express = require("express");
const bodyParser = require("body-parser");
const models = require("./models"); // Mengimpor objek models
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: "http://localhost:5173", // Mengizinkan akses dari alamat ini
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

// Menghubungkan model dengan sequelize dan database
models.sequelize.sync().then(() => {
  console.log("Database terhubung");

  // Set up routing
  app.use("/users", require("./routes/userRoutes"));
  app.use("/sellers", require("./routes/sellerRoutes"));
  app.use("/admin", require("./routes/adminRoutes"));
  app.use("/post", require("./routes/postRoutes"));
  // Tambahkan routing lainnya di sini

  // Jalankan server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
  });
});
