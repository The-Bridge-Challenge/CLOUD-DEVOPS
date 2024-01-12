require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const error404 = require('./middleware/error404')
const morgan = require('morgan')
const app = express();
const port = process.env.PORT || 3000;
// const path = require('path');
const cors = require('cors');

//routers
const userRoutes = require('./routes/users.routes')
const loginRoutes = require('./routes/login.routes')
const preciosRoutes = require('./routes/precios.routes')

//DB conection Startup
const database = require('./config/db_pgsql')
database.connectSQL()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('combined'))

app.use('/api/users',userRoutes)

app.use('/api/login',loginRoutes)

app.use('/api/precios',preciosRoutes)

app.use('*',error404);
  
app.listen(port, () => {
    console.log(`listening on port:${port}`);
  });
  
module.exports = {app}