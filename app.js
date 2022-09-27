const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const indexRouter = require('./src/routes/routes')

env.config();
const app = express();

//accessibility to any website
app.use(cors());

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// app.use('/uploads',express.static('uploads'))

app.use('/',indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}.`);
});

app.get('/', (req, res) =>{
    res.send('hello')
});


module.exports = app;  