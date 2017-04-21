const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

//...............................Booking Routers................................

router.get('/bookingdetials', (req, res) =>{
  res.status(200).json({
    message: "Your Booking Details Are : "
  });
});

router.post('/booking', (req, res) =>{
  res.status(200).json({
    message: "Your Booking Details Are Inserted Successfully"
  });
});

router.delete('/booking', (req, res) =>{
  res.status(200).json({
    message: "Your Booking Details Are Deleted"
  });
});

module.exports = router;
