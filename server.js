const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const userRoutes = require('./routes/user');
const elecRoutes = require('./routes/Electricity');
const shipRoutes = require('./routes/Shipping');
const vehRoutes = require('./routes/Vehicle');
const fuelRoutes = require('./routes/Fuel');
const estimatesRoutes = require('./routes/Estimates');
const cardProfileRoutes = require('./routes/CardProfile');
const transactionRoutes = require('./routes/Transaction');




mongoose.connect("mongodb+srv://images:" + 
process.env.MONGO_ATLAS_PW + 
"@cluster0.ma5ux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true

    }
);
mongoose.Promise = global.Promise;

const app = express();


app.use(morgan("dev"));

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/estimates1", elecRoutes);
app.use("/api/v1/estimates2", shipRoutes);
app.use('/api/v1/estimates3', vehRoutes);
app.use('/api/v1/estimates4', fuelRoutes);
app.use('/api/v1/estimates', estimatesRoutes);
app.use('/card', cardProfileRoutes);
app.use('/transaction', transactionRoutes);


  

 app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
  
  app.listen(5000);