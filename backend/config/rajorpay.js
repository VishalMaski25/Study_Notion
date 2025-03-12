const Razorpay = require('razorpay');
require('dotenv').config();

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // ✅ Match with .env
    key_secret: process.env.RAZORPAY_KEY_SECRET // ✅ Match with .env
});
