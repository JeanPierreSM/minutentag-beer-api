const express = require('express');
const cors = require('cors');
const products = require('../mockedDatabase/products');
const stockPrice = require('../mockedDatabase/stock-price');

const PORT = 5000;

const app = express();
app.use(cors());

app.get('/api/products', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, '3000')); // wait for 3 seconds to simulate a real API request and display the spinner
  res.json(products);
});

app.get('/api/stock-price/:sku', (req, res) => {
  const sku = req.params.sku;

  if (sku === 'all') {
    res.json(stockPrice);
  } else {
    const stockInfo = stockPrice[sku];
    if (stockInfo) {
      res.json(stockInfo);
    } else {
      res.status(404).json({ message: 'SKU not found' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
