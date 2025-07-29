const express = require('express');
const mongoose = require('mongoose');
const Service = require('./models/Service');
const Product = require('./models/Product');
const Deal = require('./models/deal');

const app = express();
app.use(express.json());

// DB connect
mongoose.connect('mongodb://127.0.0.1:27017/Sarte-Salon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get('/hello',(req, res ) =>{
  res.send("Hello World i m testing !");
} )
// ----- SERVICES -----
app.post('/service', async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json({ message: 'Service added', service: newService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/service', async (req, res) => {
  try {
    const service = await Service.find();
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/service/:id', async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Service updated', service: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/service/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----- PRODUCTS -----
app.post('/product', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product added', product: newProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/product', async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/product/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Product updated', product: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----- DEALS -----
app.post('/deals', async (req, res) => {
  try {
    const newDeal = new Deal(req.body);
    await newDeal.save();
    res.status(201).json({ message: 'Deal added', deal: newDeal });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/deals', async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/deals/:id', async (req, res) => {
  try {
    const updated = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Deal updated', deal: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/deals/:id', async (req, res) => {
  try {
    await Deal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deal deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('✅ Server running at http://localhost:3000'));
