const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;
const itemRoute = require('./routes/app/Item');

mongoose
	.connect(db)
	.then(()=>{console.log('db connected')})
	.catch(err =>console.log(err))

app.use('/api/items',itemRoute);

const port  = process.env.PORT || 3001;

app.listen(port,()=>console.log(`server started on ${port}`));