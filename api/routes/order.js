const router = require("express").Router();
const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

router.post("/", verifyToken, async (req,res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder); 
    } catch(err) {
        res.status(500).json(err);
    }
})

router.put("/:id",verifyTokenAndAdmin, async (req,res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true}
        );
        res.status(200).json(updatedOrder);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.delete("/:id",verifyTokenAndAdmin, async (req,res) => {
    try {
        await Order.findByIdAndDelete( req.params.id );
        res.status(200).json("Order has been deleted ....");
    } catch(err) {
        res.status(500).json(err);
    }
})

router.get("/find/:userId",verifyTokenAndAuthorization,async (req,res) => {
    try {
        const Orders = await Order.find({userId: req.params.userId});
        res.status(200).json(Orders);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.get("/",verifyTokenAndAdmin, async (req,res) => {
    try {
        let Orders = [];
        Orders = await Order.find();
        res.status(200).json(Orders);
    } catch(err) {
        res.status(500).json(err);
    }
})

//Get Monthly Income
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        {
          $match: {
            createdAt: { $gte: prevMonth },
          },
        },
        { $project: { month: { $month: '$createdAt' }, sales: '$amount' } },
        {
          $group: {
            _id: '$month',
            total: { $sum: '$sales' },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
