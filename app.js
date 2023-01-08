import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3500;

import web from './routes/web.js'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// View engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app config
app.use(express.static(path.join(__dirname, 'assets')))

// load routes
app.use('/', web )

app.listen(port, ()=>{
    console.log(`server is live on ${port}`)
})