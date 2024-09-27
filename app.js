const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const accountRoutes = require('./routes/accountRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/accounts', accountRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
