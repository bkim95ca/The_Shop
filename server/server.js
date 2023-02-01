const express = require('express');
// const stripe = require('stripe')
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;


app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json(), express.urlencoded({ extended: true }));
const stripe = require("./routes/stripe.routes")


require('./config/mongoose.config')
require('./routes/user.routes')(app)
require('./routes/product.routes')(app)


app.use("/api/stripe", stripe)


app.listen(port, ()=>console.log(`Listening on port: ${port}`));