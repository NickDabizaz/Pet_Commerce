const express = require("express");
const bodyParser = require("body-parser");
const models = require("./models"); // Mengimpor objek models
const cors = require("cors");
const midtransClient = require("midtrans-client");

const app = express();
require("dotenv").config();

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
  app.use("/categories", require("./routes/categoriesRoutes"));
  app.use("/cart", require("./routes/cartRoutes"));
  app.use("/comments", require("./routes/commentRoutes"));
  app.use("/like", require("./routes/likeRoutes.js"));
  app.use("/order", require("./routes/orderRoutes.js"));

  app.post("/create-payment", async (req, res) => {
    console.log({ body: req.body });
    const snap = new midtransClient.CoreApi({
      isProduction: false,
      serverKey: "SB-Mid-server-iXfWxGK0DQ5rZpWWVvWt-We0",
      clientKey: "SB-Mid-client-w2NPR2ZdFeoLGB7C",
    });

    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        success: false,
        message: "Content can not be empty!",
      });
    }

    try {
      snap
        .charge(req.body)
        .then((chargeResponse) => {
          models.Order.create({
            order_id: chargeResponse.order_id,
            nama: req.body.nama,
            transaction_status: chargeResponse.transaction_status,
            response_midtrans: chargeResponse.transaction_id,
            order_date: new Date(),
            total_price: chargeResponse.gross_amount,
          })
            .then((data) => {
              return res.status(201).json({
                success: true,
                message: "Berhasil melakukan charge transaction!",
                data: data,
              });
            })
            .catch((error) => {
              console.log({ error });
              return res
                .status(400)
                .json({ success: false, message: error.message });
            });
        })
        .catch((error) => {
          console.log({ error });
          return res
            .status(400)

            .json({ success: false, message: error.message });
        });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ success: false, message: error.message });
    }
  });

  // Jalankan server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
  });
});
