const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const PORT = 3000;

const readDB = () =>
     JSON.parse(fs.readFileSync('db.json', 'utf-8')
);


const writeDB = 
(data) => fs.writeFileSync('db.json', JSON.stringify(data, null, 2)
);

// POST 
app.post('/dishes', (req, res) => {

    const dishes = readDB();
  const newDish = req.body;

  if (!newDish.id || !newDish.name || !newDish.price || !newDish.category) {
    return res.status(400).json({ message: 'Invalid dish data' });
   
}
  dishes.push(newDish);
    writeDB(dishes);
   res.status(201).json(newDish);
 });

// GET 
app.get('/dishes', (req, res) => {
  const dishes  = readDB();
  if (dishes.length === 0) {
    return res.status(404).json({ message: 'No dishes found' });
 
}
  res.json(dishes);
 });

// GET 
app.get('/dishes/:id', (req, res) => {
  const dishes = readDB();
  const dish = dishes.find(d => d.id == req.params.id);
  if (!dish) {
    return res.status(404).json({ message: 'No dishes found' });
  }
  res.json(dish);
});

// PUT /dishes/:id → Update dish by ID
app.put('/dishes/:id', (req, res) => {
  const dishes = readDB();
  const index = dishes.findIndex(d => d.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'No dishes found' });
  }
  dishes[index] = { ...dishes[index], ...req.body };
  writeDB(dishes);
  res.json(dishes[index]);
});

// DELETE /dishes/:id → Delete dish by ID
app.delete('/dishes/:id', (req, res) => {
  let dishes = readDB();
  const initialLength = dishes.length;
  dishes = dishes.filter(d => d.id != req.params.id);
  if (dishes.length === initialLength) {
    return res.status(404).json({ message: 'No dishes found' });
  }
  writeDB(dishes);
  res.json({ message: 'Dish deleted successfully' });
});

// GET 
app.get('/dishes/get', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: 'Name query parameter is required' });
  }
  const dishes = readDB();
  const results = dishes.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
  if (results.length === 0) {
    return res.status(404).json({ message: 'No dishes found' });
  }
  res.json(results);
});

app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
