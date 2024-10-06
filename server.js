require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
mongoose.connect(process.env.MUNCHDATABASE, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

// Define the schemas and models
const DataSchema1 = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  select: { type: String, required: true },
  query: { type: String, required: true },
});

const Data1 = mongoose.model("Data1", DataSchema1);

const dataSchema2 = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  select: { type: String, required: true },
  query: { type: String, required: true },
});

const Data2 = mongoose.model("Data2", dataSchema2);

const dataSchema3 = new mongoose.Schema({
  name: String,
  email: String,
  telephone: String,
  message: String,
});
const Data3 = mongoose.model('Data3', dataSchema3);
// Handle form submissions
app.post('/submit-form', (req, res) => {
  const { username, email, mobile, address, select, query } = req.body;
  console.log('Received franchise data:', req.body);

  if (!username || !email || !mobile || !address || !select || !query) {
    return res.status(400).send('All fields are required.');
  }

  const newData1 = new Data1({ username, email, mobile, address, select, query });

  newData1.save()
    .then(() => res.redirect('/franchise'))
    .catch(err => {
      console.error("Error:", err);
      res.status(500).send("An error occurred while saving the data.");
    });
});

app.post('/submit-address', (req, res) => {
  const { username, email, mobile, address, select, query } = req.body;

  if (!username || !email || !mobile || !address || !select || !query) {
    return res.status(400).send('All fields are required.');
  }

  const newData2 = new Data2({ username, email, mobile, address, select, query });

  newData2.save()
    .then(() => res.redirect('/admission'))
    .catch(err => {
      console.error("Error:", err);
      res.status(500).send("An error occurred while saving the data.");
    });
});


app.post('/submit-contact', (req, res) => {
  const { username, email, telephone, message } = req.body;

  if (!username || !email || !telephone || !message) {
    return res.status(400).send('All fields are required.');
  }

  const newData3 = new Data3({ username, email, telephone, message });

  newData3.save()
    .then(() => res.redirect('/contact'))
    .catch(err => {
      console.error("Error:", err);
      res.status(500).send("An error occurred while saving the data.");
    });
});



// Routes to serve HTML files
app.get('/franchise', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'franchise.html'));
});
app.get('/Admission', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'Admission.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'contact.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/Newsandevent', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'Newsandevent.html'));
});

app.get('/program', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'program.html'));
});

app.get('/pre-nursery', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'pre-nursery.html'));
});

app.get('/nursery', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'nursery.html'));
});

app.get('/kindergarten', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'kindergarten.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'privacy.html'));
});

app.get('/refund', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'refund.html'));
});

app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'terms.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'faq.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});




// app.post('/submit-user', (req, res) => {
//   const {username, email, mobile, address,select,query } = req.body;
//   const newData1 = new Data1({
//     username: username,
//     email: email,
//     mobile: mobile,
//     address: address,
//     select: select,
//     query: query,
    
//   });
// newData1.save()
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch(err => {
//       console.error("Error:", err);
//       res.status(500).send("An error occurred while saving the data.");
//     });
// });