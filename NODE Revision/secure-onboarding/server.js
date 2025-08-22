require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// connect db
connectDB();

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// rate limiter on auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/auth', authLimiter);

// routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Secure Onboarding API Running 🚀' });
});

// 404
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
