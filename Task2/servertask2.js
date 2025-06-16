const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
let tempStorage=[];
app.get('/', (req, res) => {
  res.render('form');
});
app.post('/submit', (req, res) => {
  const { name, email, contact, dob, gender, college, degree, internship, query } = req.body;
  const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        return res.send('<h2 style="color:red;" background-color:rgb(240, 167, 248); no>Server Validation Failed: Age must be at least 18</h2><a href="/">Go Back</a>');
    }

    const userData = { name, dob };
    tempStorage.push(userData);

  res.render('result', { name, email, contact, dob, gender, college, degree, internship, query });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
