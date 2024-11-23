import express from 'express';
import cors from 'cors';
import pg from 'pg'
const { Pool } = pg

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Create a new pool instance to connect to the PostgreSQL database
const pool = new Pool({
  user: 'sanjay584',  // your PostgreSQL username
  host: 'localhost', // database server
  database: 'travel-planner', // your database name
  password: 'new_password', // your PostgreSQL password
  port: 5432, // default PostgreSQL port
});

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example POST route for enquiry
app.post('/enquiry', async (req, res) => {
  const data = req.body;
  console.log(data); 

  try {
    const query = `
      INSERT INTO enquiry (
        name, email, destination, departure_date, return_date, travelers, budget, travel_style, message
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

    const values = [
      data.data.name,
      data.data.email,
      data.data.destination,
      data.data.departureDate,
      data.data.returnDate,
      data.data.travelers,
      data.data.budget,
      data.data.travelStyle,
      data.data.message,
    ];

    const result = await pool.query(query, values);

    // Respond with the inserted data
    res.status(201).json({
      message: 'Enquiry submitted successfully!',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Error inserting data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
