const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models'); // Mengimpor objek models

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Menghubungkan model dengan sequelize dan database
models.sequelize.sync().then(() => {
  console.log('Database terhubung');

  // Set up routing
  app.use('/users', require('./routes/userRoutes'));
  app.use('/products', require('./routes/productRoutes'));
  // Tambahkan routing lainnya di sini

  // Jalankan server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
  });
});
