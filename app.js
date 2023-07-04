const express = require('express')

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello and Welcome!")
});

function add(a, b){
    var sum = a+b;
    return sum;
};

function Subtract(a, b){
    var s = a-b;
    return s;
};

function multiply(a, b){
    var m= a*b;
    return m;
};

function divide(a, b){
    var d = a/b;
    return d;
};

function power(a, b){
    return Math.pow(a, b);
    
};

function average(a,b){
    var a = a+b/2;
    return a;
}

function log(a){
    var l= Math.log(a);
    return l;
};


app.get('/cal/:num1/:num2/:type',(req,res) => { //this concept learned from Nishant Sir
    
    const num1 =Number(req.params.num1);
    const num2 =Number(req.params.num2);

    let ans;

    if(req.params.type === "add"){
        ans = add(num1, num2);
    }

    else if(req.params.type === "Subtract"){
        ans = Subtract(num1, num2);
    }

    else if(req.params.type === "multiply"){
        ans = multiply(num1, num2);
    }

    else if(req.params.type === "divide"){
        ans = divide(num1, num2);
    }
                
    else if(req.params.type === "power"){
        ans = power(num1, num2);
    }     

    else if(req.params.type === "average"){
        ans = average(num1, num2);
    } 
    
    else if(req.params.type === "log"){
        ans = log(num1);
    }   

    res.send(`${req.params.type} of ${num1} and ${num2} is ${ans}`);  // send for all APIs      
});


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});