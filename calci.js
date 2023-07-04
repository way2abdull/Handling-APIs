const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/add', (req,res) => {
    sum = req.body.a+req.body.b;
    res.send(`sum is ${sum}`);
})

app.post('/subtract', (req , res) => {
    let sub = (req.body.a) - (req.body.b);
    res.send(`${sub}`);

})

app.post('/multiply', (req , res) => {
    let mult = (req.body.a) * (req.body.b);
    res.send(`${mult}`);

})

app.post('/divide' , (req , res) => {
    let divide = req.body.a / req.body.b;
    res.send(`division of ${req.body.a} and ${req.body.b} is:  ${divide}`);

})

app.post('/exponential' , (req , res) => {
    exponent = req.body.a ** req.body.b;
    res.send(`Result of ${req.body.a} ^ ${req.body.b} = ${exponent}`);

})

app.post('/log', (req,res) => {
    let a =(req.body.a);
    log = Math.log(a);
    res.send(`Log of ${a} is :  ${log}`);
})


app.listen(port, () => {
    console.log("Server running on port 3000")
});
