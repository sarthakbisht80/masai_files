const express= require("express");

require("express-async-error");
const cors= require("cors");
const morgan= require("morgan");
const helmet= require("helmet");
const authroutes= require("./routes/authRoutes");

const bookroutes= require("./routes/bookRoutes");
const errorHandler= require("./middleware/errorHandler");

const app= express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use(express.json());
app.use('/api/v1/auth',authroutes);
app.use('/api/v1/books',bookroutes);
app.use(errorHandler);

module.exports=app;
