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
const sipsRoutes = require('./routes/sips.routes')
const clientRoutes = require('./routes/cliente.routes')
const facturaRoutes = require('./routes/factura.routes')


//DB conection Startup
const database = require('./config/db_pgsql')
database.connectSQL()

// enabling CORS for some specific origins only. 
let corsOptions = { 
  origin : ['https://cloudbuilds-client-folgybvrpq-ew.a.run.app'], 
} 

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('combined'))

app.use('/api/users',userRoutes)

app.use('/api/login',loginRoutes)

app.use('/api/precios',preciosRoutes)

app.use('/api/sips',sipsRoutes)

app.use('/api/cliente',clientRoutes)

app.use('/api/factura',facturaRoutes)

app.use('/api/*',error404);
  
app.listen(port, () => {
    console.log(`listening on port:${port}`);
  });
  
module.exports = {app}