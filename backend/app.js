const express  = require('express');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());

app.get("/", (req,res) => {
    res.send({
        message: "hello"
    })
})


app.listen(PORT, () => {
    console.log(`api running at http://localhost:${PORT}`);
})