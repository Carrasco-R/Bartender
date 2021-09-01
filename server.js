const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Order = require('./models/order');
const { result } = require('lodash');
const port = process.env.PORT || 5000;

//express app
const app = express();

//mongo
const dbURI = "mongodb+srv://baymeadows:stjohns@cluster0.svvn6.mongodb.net/bartender?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {console.log('connected to db'); })
  .catch((err) => console.log(err));

//listen for requests
app.listen(port, () => console.log('~~Server listening on port:5000'));

//middleware & static
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));


app.get('/all-orders', (req, res) => {
  Order.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
});

app.post('/add-order', (req, res) => {
  const order = new Order({
    type: req.body.type,
    rocks: (req.body.rocks == 'on')? true:false,
    garnish: req.body.garnish,
    rim: req.body.rim,
    fname: req.body.fname,
    lname: req.body.lname,
    phoneNumber: req.body.phoneNumber
  });
  console.log(order);
  order.save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    })
})

