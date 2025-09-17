const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routers/productRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/productsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error(err));

app.use('/products', productRoutes);
app.use(errorHandler);

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
