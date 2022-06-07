const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);
router.post('/payment',async (req,res)=> {
    try {
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "inr",
        },
        (err,res) => {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(res);
            }
        })
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;