require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
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

app.use('/api/users',userRoutes)

app.use('/api/login',loginRoutes)

app.use('/api/precios',preciosRoutes)


//* Serve static assets in production, must be at this location of this file
// if (process.env.NODE_ENV === 'production') {
//     //*Set static folder
//     app.use(express.static('client/build'));
  
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
//   }

// dummy route
// app.get("/", (req, res) => {
//     res.send("Hello world!");
//   });
  
app.listen(port, () => {
    console.log(`listening on port:${port}`);
  });
  
module.exports = {app}