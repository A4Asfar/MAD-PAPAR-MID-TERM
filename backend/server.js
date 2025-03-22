const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');

app.use('/api', authRoutes);
app.use('/api', jobRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
