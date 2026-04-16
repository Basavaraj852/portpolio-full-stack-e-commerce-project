const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();

app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb://mongo:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');

  // 👉 CALL seed AFTER DB connection
  seedData();
})
.catch(err => console.log(err));


// ✅ Seed function
const seedData = async () => {
  const count = await Product.countDocuments();

  if (count === 0) {
    await Product.insertMany([
      {
        name: "electronics",
        price: 999,
        image: "/images/product1.jpg"
      },
      {
        name: "shoes",
        price: 899,
        image: "/images/product2.jpg"
      }
    ]);

    console.log("✅ Seed data added");
  } else {
    console.log("ℹ️ Data already exists");
  }
};


// Routes
app.use('/api/products', require('./routes/productRoutes'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
