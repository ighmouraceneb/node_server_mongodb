import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import apiRoute from './app/routes/api.js';

const app = express();
const router = express.Router();
import serveStatic from 'serve-static';

//config variables
const config = {   
    "server": {
        "port": 5000,
        "env": "dev",
        "SSL": {
            "port": 5500,
            "env": "dev"
        }
    },
}
const ENV = config.server.env
const PORT = config.server.port


// connection mongoose 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myDb', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


//bodyParser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


// serving static files (image...)
app.use(serveStatic('public'));

// require routes

apiRoute(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT);
console.log('HTTP : Listening on port ' + PORT + '...');