const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('form');
});
app.post('/submit', (req, res) => {
  const { name, email, contact, dob, gender, college, degree, internship, query } = req.body;
  res.render('result', { name, email, contact, dob, gender, college, degree, internship, query });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
