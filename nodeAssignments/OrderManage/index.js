const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/order');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/orderdb')
  .then(() => console.log('Connected to MongoDB'));
//get 
app.get('/orders/shipped', async (req, res) => {
  const orders = await Order.find({ order_status: 'shipped' });
  res.json(orders);
});
//update
app.put('/orders/1/amount', async (req, res) => {
  await Order.updateOne({ order_id: 1 }, { $set: { total_amount: 70000 } });
  res.send('Order amount updated.');
});
//delete
app.delete('/orders/4', async (req, res) => {
  await Order.deleteOne({ order_id: 4 });
  res.send('Order deleted.');
});
//get by name
app.get('/orders/customer/:name', async (req, res) => {
  const order = await Order.findOne({ customer_name: req.params.name });
  res.json(order);
});

app.put('/orders/2/status', async (req, res) => {
  await Order.updateOne({ order_id: 2 }, { $set: { order_status: 'delivered' } });
  res.send('Order status updated.');
});

app.get('/orders/amount/15000plus', async (req, res) => {
  const orders = await Order.find({ total_amount: { $gte: 15000 } });
  res.json(orders);
});

app.listen(3000, () => console.log('Server running on port 3000'));
