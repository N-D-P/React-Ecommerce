const express = require('express');
const stripe = require('stripe');

const router = express.Router();

router.post('/payment', (req, res) => {
  const stripeObj = stripe(process.env.STRIPE_KEY);
  stripeObj.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount * 100,
      currency: 'usd',
      description: 'Software development services',
    },
    (err, stripeRes) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(200).json(stripeRes);
        console.log(stripeRes);
      }
    }
  );
});

module.exports = router;