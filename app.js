const express = require("express");
const { Mongoose } = require("mongoose");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cors = require("cors");
const bodyParser = require("body-parser");
const cron = require("node-cron"); // Add this line
const Product = require("./model/posts"); // Add this line to access Product model

require("dotenv").config();
require("./db");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/uploads", express.static("uploads"));
// Scheduler to deactivate products at 10:00 PM daily
cron.schedule("8 19 * * *", async () => {
  try {
    console.log(
      "Running the scheduled task to deactivate products at 10:00 PM"
    );
    await Product.updateMany({}, { active: false });
    console.log("All products have been deactivated.");
  } catch (error) {
    console.error("Error deactivating products:", error);
  }
});

// cron.schedule("* * * * *", async () => {
//   const now = new Date();
//   console.log(
//     `Running the scheduled task. Current time: ${now.toLocaleTimeString()}`
//   );
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
const express = require('express');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product'); 
const cors = require("cors");
require('dotenv').config();
require('./db');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

/*
const express = require('express');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product'); 
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
require('./db');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

// Enable CORS
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

*/
