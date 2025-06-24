const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const PORT = 3000;


const readDB = () => {
  try {
    const data = fs.readFileSync('db.json', 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const writeDB = (data) => {
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
};


app.post('/books', (req, res) => {
  const books = readDB();
  const newBook = req.body;
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  writeDB(books);
  res.status(201).json(newBook);
});

// Get all books
app.get('/books', (req, res) => {
  const books = readDB();
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const books = readDB();
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.put('/books/:id', (req, res) => {
  const books = readDB();
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    writeDB(books);
    res.json(books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Delete book by ID
app.delete('/books/:id', (req, res) => {
  let books = readDB();
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    const deleted = books.splice(index, 1);
    writeDB(books);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});


app.get('/books/search', (req, res) => {
  const { author, title } = req.query;
  let books = readDB();
  if (author) {
    books = books.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
  }
  if (title) {
    books = books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
  }

  if (books.length) {
    res.json(books);
  } else {
    res.json({ message: 'No books found' });
  }
});


app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
