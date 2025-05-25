// This file contains environment variables for the PostgreSQL database connection.
// Make sure to keep this file secure and not expose it in public repositories.

const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.user.userId });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// This is the main server file that sets up the Express application.
// It imports necessary modules, configures middleware, and defines routes for user authentication.
