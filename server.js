const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const http = require('http')
const logger = require('morgan');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const helmet = require('helmet')
var server = http.createServer(app)

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(helmet())
/* app.use(bodyParser.json()) */
app.use('/api', routes);
server.listen(PORT,'116.204.182.208', function () {
    console.log('API Start.....')
  })

/* app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)) */