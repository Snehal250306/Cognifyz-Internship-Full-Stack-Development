const express = require('express');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Sample data
const projects = [
  {
    title: 'Blog App',
    description: 'Built using PHP, MySQL with login system.',
    image: '/videos/blog%20app.mp4'
  },
  {
    title: 'CRUD System',
    description: 'Full-stack app for term work assessment.',
    image: '/images/crud-app.png'
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { projects });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
